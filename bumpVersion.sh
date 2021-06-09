#!/bin/sh
export PACKAGE='@olympeio/core'
export VERSION=$(jq -rc '.version' ./package.json)
export COMMIT_REF=$(git log -n 1 --pretty=format:"%h")
export PUBLISH_VER="${VERSION}-${COMMIT_REF}"

echo "Setting npm packages version to ${PUBLISH_VER}"
sed -i -e "s/\"version\": \".*\",/\"version\": \"${PUBLISH_VER}\",/" package.json


