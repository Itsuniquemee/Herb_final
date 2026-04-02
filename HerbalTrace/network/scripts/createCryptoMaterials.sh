#!/bin/bash

set -e

CRYPTO_CONFIG_DIR="../organizations"
CRYPTOGEN_IMAGE="hyperledger/fabric-tools:2.5"
mkdir -p ${CRYPTO_CONFIG_DIR}

run_cryptogen() {
  if command -v cryptogen >/dev/null 2>&1; then
    cryptogen "$@"
    return
  fi

  echo "cryptogen binary not found locally. Using ${CRYPTOGEN_IMAGE} container..."
  docker run --rm -v "${PWD}:${PWD}" -w "${PWD}" "${CRYPTOGEN_IMAGE}" cryptogen "$@"
}

# Generate crypto materials using cryptogen
echo "Generating crypto materials with cryptogen..."

# Create crypto-config.yaml
cat > crypto-config.yaml << 'EOF'
OrdererOrgs:
  - Name: Orderer
    Domain: herbaltrace.com
    EnableNodeOUs: true
    Specs:
      - Hostname: orderer
      - Hostname: orderer2
      - Hostname: orderer3

PeerOrgs:
  - Name: FarmersCoop
    Domain: farmers.herbaltrace.com
    EnableNodeOUs: true
    Template:
      Count: 2
    Users:
      Count: 2

  - Name: TestingLabs
    Domain: labs.herbaltrace.com
    EnableNodeOUs: true
    Template:
      Count: 2
    Users:
      Count: 2

  - Name: Processors
    Domain: processors.herbaltrace.com
    EnableNodeOUs: true
    Template:
      Count: 2
    Users:
      Count: 2

  - Name: Manufacturers
    Domain: manufacturers.herbaltrace.com
    EnableNodeOUs: true
    Template:
      Count: 2
    Users:
      Count: 2
EOF

run_cryptogen generate --config=./crypto-config.yaml --output="${CRYPTO_CONFIG_DIR}"

# Keep MSP tlscacerts aligned with node TLS CA files used at runtime.
cp ${CRYPTO_CONFIG_DIR}/ordererOrganizations/herbaltrace.com/orderers/orderer.herbaltrace.com/tls/ca.crt \
  ${CRYPTO_CONFIG_DIR}/ordererOrganizations/herbaltrace.com/msp/tlscacerts/tlsca.herbaltrace.com-cert.pem

for org in farmers labs processors manufacturers; do
  cp ${CRYPTO_CONFIG_DIR}/peerOrganizations/${org}.herbaltrace.com/peers/peer0.${org}.herbaltrace.com/tls/ca.crt \
    ${CRYPTO_CONFIG_DIR}/peerOrganizations/${org}.herbaltrace.com/msp/tlscacerts/tlsca.${org}.herbaltrace.com-cert.pem
done

# Rename directories to match expected structure
mv ${CRYPTO_CONFIG_DIR}/ordererOrganizations ${CRYPTO_CONFIG_DIR}/ordererOrganizations-temp 2>/dev/null || true
mv ${CRYPTO_CONFIG_DIR}/peerOrganizations ${CRYPTO_CONFIG_DIR}/peerOrganizations-temp 2>/dev/null || true

mkdir -p ${CRYPTO_CONFIG_DIR}/ordererOrganizations/herbaltrace.com
mkdir -p ${CRYPTO_CONFIG_DIR}/peerOrganizations

# Move orderer org
if [ -d "${CRYPTO_CONFIG_DIR}/ordererOrganizations-temp/herbaltrace.com" ]; then
  cp -r ${CRYPTO_CONFIG_DIR}/ordererOrganizations-temp/herbaltrace.com/* ${CRYPTO_CONFIG_DIR}/ordererOrganizations/herbaltrace.com/
  rm -rf ${CRYPTO_CONFIG_DIR}/ordererOrganizations-temp
fi

# Move peer orgs
for org in farmers.herbaltrace.com labs.herbaltrace.com processors.herbaltrace.com manufacturers.herbaltrace.com; do
  if [ -d "${CRYPTO_CONFIG_DIR}/peerOrganizations-temp/${org}" ]; then
    cp -r ${CRYPTO_CONFIG_DIR}/peerOrganizations-temp/${org} ${CRYPTO_CONFIG_DIR}/peerOrganizations/
  fi
done
rm -rf ${CRYPTO_CONFIG_DIR}/peerOrganizations-temp 2>/dev/null || true

echo "Crypto materials generated successfully!"
