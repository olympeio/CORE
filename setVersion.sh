#!/bin/sh
if [ "$1" = "-h" ]
then
  echo "usage: setVersion [<version> [<framework>]]"
  exit 1
fi
FILES="package.json"
export VERSION=$1
export FW_VERSION=$2
if [ -z "$VERSION" ]
then
  read -p "Core version: " -r VERSION
fi

if [ -z "$FW_VERSION" ]
then
  read -p "Framework version: " -r FW_VERSION
fi

echo "setting versions to:"
echo "    Core: ${VERSION}"
echo "    Framework: ${FW_VERSION}"

export FW_GIT_TAG=$FW_VERSION
export RUNTIME_PREFIX=""
if [[ $FW_VERSION =~ ^[0-9]+.[0-9]+.[0-9]+.*$ ]]
then
  export FW_GIT_TAG="v${FW_VERSION}"
  export RUNTIME_PREFIX="~"
fi

# Core version
for f in $FILES
do
  sed -i '' -e "s/\"version\": \".*\",/\"version\": \"${VERSION}\",/" "$f"
  sed -i '' -e "s/\"@olympeio\/runtime-\(.*\)\": \".*\",/\"@olympeio\/runtime-\\1\": \"${RUNTIME_PREFIX}${FW_VERSION}\",/" "$f"
done

