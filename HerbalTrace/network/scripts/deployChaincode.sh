#!/bin/bash

set -e

CHANNEL_NAME=${1:-"herbaltrace-channel"}

echo "=== Deploying Chaincode herbaltrace v1.0 to ${CHANNEL_NAME} ==="
echo ""

# ===== STEP 1: PACKAGE =====
echo "Step 1: Packaging chaincode..."
docker exec cli bash << 'EOPACKAGE'
  export CORE_PEER_LOCALMSPID=FarmersCoopMSP
  export CORE_PEER_ADDRESS=peer0.farmers.herbaltrace.com:7051
  export CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/farmers.herbaltrace.com/peers/peer0.farmers.herbaltrace.com/tls/ca.crt
  export CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/farmers.herbaltrace.com/users/Admin@farmers.herbaltrace.com/msp
  
  cd /opt/gopath/src/github.com/hyperledger/fabric/peer
  rm -f herbaltrace_1.0.tar.gz
  
  peer lifecycle chaincode package herbaltrace_1.0.tar.gz \
    --path /opt/gopath/src/github.com/chaincode/herbaltrace \
    --lang golang \
    --label herbaltrace_1.0
  
  echo "✓ Packaged successfully"
EOPACKAGE

[ $? -eq 0 ] || exit 1
echo ""

# ===== STEP 2: INSTALL  =====
echo "Step 2: Installing on all organizations..."

for org in farmers labs processors manufacturers; do
  case "$org" in
    farmers) port=7051; mspid="FarmersCoopMSP" ;;
    labs) port=9051; mspid="TestingLabsMSP" ;;
    processors) port=11051; mspid="ProcessorsMSP" ;;
    manufacturers) port=13051; mspid="ManufacturersMSP" ;;
  esac
  
  echo "  Installing on ${org}..."
  docker exec cli bash << EOINSTALL
    export CORE_PEER_LOCALMSPID=${mspid}
    export CORE_PEER_ADDRESS=peer0.${org}.herbaltrace.com:${port}
    export CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/${org}.herbaltrace.com/peers/peer0.${org}.herbaltrace.com/tls/ca.crt
    export CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/${org}.herbaltrace.com/users/Admin@${org}.herbaltrace.com/msp
    
    cd /opt/gopath/src/github.com/hyperledger/fabric/peer
    peer lifecycle chaincode install herbaltrace_1.0.tar.gz
EOINSTALL
  [ $? -eq 0 ] || { echo "ERROR installing on $org"; exit 1; }
done

echo "✓ Installed on all organizations"
echo ""

# ===== STEP 3: QUERY PACKAGE ID =====
echo "Step 3: Querying package ID..."

PACKAGE_ID=$(docker exec cli bash << 'EOQUERYINSTALL'
  export CORE_PEER_LOCALMSPID=FarmersCoopMSP
  export CORE_PEER_ADDRESS=peer0.farmers.herbaltrace.com:7051
  export CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/farmers.herbaltrace.com/peers/peer0.farmers.herbaltrace.com/tls/ca.crt
  export CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/farmers.herbaltrace.com/users/Admin@farmers.herbaltrace.com/msp
  
  peer lifecycle chaincode queryinstalled | grep "herbaltrace_1.0" | awk '{print $3}'
EOQUERYINSTALL
)

[ -n "$PACKAGE_ID" ] || { echo "ERROR: Could not find PACKAGE_ID"; exit 1; }
echo "✓ Found PACKAGE_ID=${PACKAGE_ID}"
echo ""

# ===== STEP 4: APPROVE =====
echo "Step 4: Approving for all organizations..."

ORDERER_CA=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/ordererOrganizations/herbaltrace.com/orderers/orderer.herbaltrace.com/msp/tlscacerts/tlsca.herbaltrace.com-cert.pem

for org in farmers labs processors manufacturers; do
  case "$org" in
    farmers) port=7051; mspid="FarmersCoopMSP" ;;
    labs) port=9051; mspid="TestingLabsMSP" ;;
    processors) port=11051; mspid="ProcessorsMSP" ;;
    manufacturers) port=13051; mspid="ManufacturersMSP" ;;
  esac
  
  echo "  Approving for ${org}..."
  docker exec cli bash << EOAPPROVE
    export CORE_PEER_LOCALMSPID=${mspid}
    export CORE_PEER_ADDRESS=peer0.${org}.herbaltrace.com:${port}
    export CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/${org}.herbaltrace.com/peers/peer0.${org}.herbaltrace.com/tls/ca.crt
    export CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/${org}.herbaltrace.com/users/Admin@${org}.herbaltrace.com/msp
    
    peer lifecycle chaincode approveformyorg \
      --channelID herbaltrace-channel \
      --name herbaltrace \
      --version 1.0 \
      --package-id ${PACKAGE_ID} \
      --sequence 1 \
      --tls \
      --cafile ${ORDERER_CA} \
      --orderer orderer.herbaltrace.com:7050 \
      --ordererTLSHostnameOverride orderer.herbaltrace.com
EOAPPROVE
  [ $? -eq 0 ] || { echo "ERROR approving for $org"; exit 1; }
done

echo "✓ Approved by all organizations"
echo ""

# ===== STEP 5: COMMIT =====
echo "Step 5: Committing chaincode definition..."

docker exec cli bash << 'EOCOMMIT'
  export CORE_PEER_LOCALMSPID=FarmersCoopMSP
  export CORE_PEER_ADDRESS=peer0.farmers.herbaltrace.com:7051
  export CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/farmers.herbaltrace.com/peers/peer0.farmers.herbaltrace.com/tls/ca.crt
  export CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/farmers.herbaltrace.com/users/Admin@farmers.herbaltrace.com/msp
  
  ORDERER_CA=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/ordererOrganizations/herbaltrace.com/orderers/orderer.herbaltrace.com/msp/tlscacerts/tlsca.herbaltrace.com-cert.pem
  
  peer lifecycle chaincode commit \
    --channelID herbaltrace-channel \
    --name herbaltrace \
    --version 1.0 \
    --sequence 1 \
    --tls \
    --cafile ${ORDERER_CA} \
    --orderer orderer.herbaltrace.com:7050 \
    --ordererTLSHostnameOverride orderer.herbaltrace.com \
    --peerAddresses peer0.farmers.herbaltrace.com:7051 \
    --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/farmers.herbaltrace.com/peers/peer0.farmers.herbaltrace.com/tls/ca.crt \
    --peerAddresses peer0.labs.herbaltrace.com:9051 \
    --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/labs.herbaltrace.com/peers/peer0.labs.herbaltrace.com/tls/ca.crt \
    --peerAddresses peer0.processors.herbaltrace.com:11051 \
    --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/processors.herbaltrace.com/peers/peer0.processors.herbaltrace.com/tls/ca.crt \
    --peerAddresses peer0.manufacturers.herbaltrace.com:13051 \
    --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/manufacturers.herbaltrace.com/peers/peer0.manufacturers.herbaltrace.com/tls/ca.crt
EOCOMMIT

[ $? -eq 0 ] || exit 1
echo "✓ Definition committed"
echo ""

# ===== STEP 6: VERIFY =====
echo "Step 6: Verifying committed chaincode..."

docker exec cli bash << 'EOVERIFY'
  export CORE_PEER_LOCALMSPID=FarmersCoopMSP
  export CORE_PEER_ADDRESS=peer0.farmers.herbaltrace.com:7051
  export CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/farmers.herbaltrace.com/peers/peer0.farmers.herbaltrace.com/tls/ca.crt
  export CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/farmers.herbaltrace.com/users/Admin@farmers.herbaltrace.com/msp
  
  peer lifecycle chaincode querycommitted \
    --channelID herbaltrace-channel \
    --name herbaltrace
EOVERIFY

echo ""
echo "=========================================="
echo "✓ CHAINCODE DEPLOYMENT COMPLETED"
echo "=========================================="
echo "Chaincode: herbaltrace v1.0"
echo "Channel: herbaltrace-channel"
echo "Status: READY FOR INVOCATION"

function packageChaincode() {
  echo "Packaging chaincode ${CC_NAME} (language: ${CC_LANG_NORMALIZED})..."
  
  # Use printf for cleaner escaping in the bash -c command
  docker exec cli bash << 'EOBASH'
    export CORE_PEER_LOCALMSPID=FarmersCoopMSP
    export CORE_PEER_ADDRESS=peer0.farmers.herbaltrace.com:7051
    export CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/farmers.herbaltrace.com/peers/peer0.farmers.herbaltrace.com/tls/ca.crt
    export CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/organizations/peerOrganizations/farmers.herbaltrace.com/users/Admin@farmers.herbaltrace.com/msp
    
    cd /opt/gopath/src/github.com/hyperledger/fabric/peer
    rm -f herbaltrace_1.0.tar.gz
    
    peer lifecycle chaincode package herbaltrace_1.0.tar.gz \
      --path /opt/gopath/src/github.com/chaincode/herbaltrace \
      --lang golang \
      --label herbaltrace_1.0
    
    echo 'Chaincode packaged successfully'
EOBASH
  
  if [ $? -ne 0 ]; then
    echo "Failed to package chaincode"
    exit 1
  fi
}

function installChaincodeAllOrgs() {
  echo "Installing chaincode on all organizations..."
  
  local orgs=("farmers" "labs" "processors" "manufacturers")
  local ports=("7051" "9051" "11051" "13051")
  local mspids=("FarmersCoopMSP" "TestingLabsMSP" "ProcessorsMSP" "ManufacturersMSP")
  
  for i in 0 1 2 3; do
    local org=${orgs[$i]}
