#!/bin/sh
export PACKAGE='@olympeio/core'
export VERSION=$(jq -rc '.version' ./package.json)
export BASE=$(npm view "$PACKAGE" versions | sed -e 's/,/\n/g' | grep "${VERSION}\." | sed -e "s/^.*${VERSION}\.\([0-9][0-9]*\).*$/\1/" | sort -n | tail -1)
if [ -z "${BASE}" ];
then
  INC=0
else
  INC=$((BASE + 1))
fi
export PUBLISH_VER="${VERSION}.${INC}"

echo "Setting npm packages version to ${PUBLISH_VER}"
sed -i -e "s/\"version\": \".*\",/\"version\": \"${PUBLISH_VER}\",/" package.json


