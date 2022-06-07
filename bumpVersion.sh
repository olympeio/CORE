#!/bin/sh
export VERSION=$(jq -rc '.version' ./package.json)
export COMMIT_REF=$(git log -n 1 --pretty=format:"%h")
export TIMESTAMP=$(date +%s)
export PUBLISH_VER="${VERSION}-${COMMIT_REF}-${TIMESTAMP}"

echo "Setting npm packages version to ${PUBLISH_VER}"
sed -i -e "s/\"version\": \".*\",/\"version\": \"${PUBLISH_VER}\",/" package.json
