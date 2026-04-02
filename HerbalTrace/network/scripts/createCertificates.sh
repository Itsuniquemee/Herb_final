#!/bin/bash

# Generate crypto material using cryptogen tool
# This script creates all certificates and keys for the network

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NETWORK_DIR="$SCRIPT_DIR/.."
CRYPTOGEN_IMAGE="hyperledger/fabric-tools:2.5"

echo "Generating certificates using cryptogen tool"

run_cryptogen() {
  if command -v cryptogen >/dev/null 2>&1; then
    cryptogen "$@"
    return
  fi

  echo "cryptogen binary not found locally. Using ${CRYPTOGEN_IMAGE} container..."
  docker run --rm -v "${NETWORK_DIR}:${NETWORK_DIR}" -w "${NETWORK_DIR}" "${CRYPTOGEN_IMAGE}" cryptogen "$@"
}

# Create cryptogen config
cat > "$NETWORK_DIR/crypto-config.yaml" << EOF
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
      Count: 3

  - Name: TestingLabs
    Domain: labs.herbaltrace.com
    EnableNodeOUs: true
    Template:
      Count: 2
    Users:
      Count: 3

  - Name: Processors
    Domain: processors.herbaltrace.com
    EnableNodeOUs: true
    Template:
      Count: 2
    Users:
      Count: 3

  - Name: Manufacturers
    Domain: manufacturers.herbaltrace.com
    EnableNodeOUs: true
    Template:
      Count: 2
    Users:
      Count: 3
EOF

# Generate crypto material
run_cryptogen generate --config="$NETWORK_DIR/crypto-config.yaml" --output="$NETWORK_DIR/organizations"

# Keep MSP tlscacerts aligned with node TLS CA files used at runtime.
cp "$NETWORK_DIR/organizations/ordererOrganizations/herbaltrace.com/orderers/orderer.herbaltrace.com/tls/ca.crt" \
  "$NETWORK_DIR/organizations/ordererOrganizations/herbaltrace.com/msp/tlscacerts/tlsca.herbaltrace.com-cert.pem"

for ORG in farmers labs processors manufacturers; do
  cp "$NETWORK_DIR/organizations/peerOrganizations/${ORG}.herbaltrace.com/peers/peer0.${ORG}.herbaltrace.com/tls/ca.crt" \
    "$NETWORK_DIR/organizations/peerOrganizations/${ORG}.herbaltrace.com/msp/tlscacerts/tlsca.${ORG}.herbaltrace.com-cert.pem"
done

echo "Certificates generated successfully!"
