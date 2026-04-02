#!/bin/bash

set -e

CHANNEL_NAME=${1:-"herbaltrace-channel"}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Creating channel: ${CHANNEL_NAME}"
"${SCRIPT_DIR}/create-channel-v2.sh" "${CHANNEL_NAME}"
