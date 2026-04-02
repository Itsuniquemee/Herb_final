#!/bin/bash

set -e

TOOLS_IMAGE="hyperledger/fabric-tools:2.5"

# Navigate to network directory and set proper paths
cd "$(dirname "$0")/.."
export FABRIC_CFG_PATH=${PWD}/configtx
export CHANNEL_NAME=${1:-"herbaltrace-channel"}

run_configtxgen() {
	if command -v configtxgen >/dev/null 2>&1; then
		configtxgen "$@"
		return
	fi

	echo "configtxgen binary not found locally. Using ${TOOLS_IMAGE} container..."
	docker run --rm -v "${PWD}:${PWD}" -w "${PWD}" -e FABRIC_CFG_PATH="${FABRIC_CFG_PATH}" "${TOOLS_IMAGE}" configtxgen "$@"
}

mkdir -p channel-artifacts

echo "Generating genesis block..."
run_configtxgen -profile HerbalTraceOrdererGenesis -channelID system-channel -outputBlock ./channel-artifacts/genesis.block

echo "Generating channel creation transaction..."
run_configtxgen -profile HerbalTraceChannel -outputCreateChannelTx ./channel-artifacts/${CHANNEL_NAME}.tx -channelID ${CHANNEL_NAME}

echo "Generating anchor peer updates..."
run_configtxgen -profile HerbalTraceChannel -outputAnchorPeersUpdate ./channel-artifacts/FarmersCoopMSPanchors.tx -channelID ${CHANNEL_NAME} -asOrg FarmersCoopMSP
run_configtxgen -profile HerbalTraceChannel -outputAnchorPeersUpdate ./channel-artifacts/TestingLabsMSPanchors.tx -channelID ${CHANNEL_NAME} -asOrg TestingLabsMSP
run_configtxgen -profile HerbalTraceChannel -outputAnchorPeersUpdate ./channel-artifacts/ProcessorsMSPanchors.tx -channelID ${CHANNEL_NAME} -asOrg ProcessorsMSP
run_configtxgen -profile HerbalTraceChannel -outputAnchorPeersUpdate ./channel-artifacts/ManufacturersMSPanchors.tx -channelID ${CHANNEL_NAME} -asOrg ManufacturersMSP

echo "Genesis block and channel artifacts generated successfully!"
