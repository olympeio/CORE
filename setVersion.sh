#!/bin/sh
if [ "$1" = "-h" ]
then
  echo "usage: setVersion [<version> [<framework> [dev-tools]]]"
  exit 1
fi
FILES="package.json"
export VERSION=$1
export FW_VERSION=$2
export DEVTOOLS_VERSION=$3
if [ -z "$VERSION" ]
then
  read -p "Core version: " -r VERSION
fi

if [ -z "$FW_VERSION" ]
then
  read -p "Framework version: " -r FW_VERSION
fi

if [ -z "$DEVTOOLS_VERSION" ]
then
  read -p "Dev-Tools version: " -r DEVTOOLS_VERSION
fi

echo "setting versions to:"
echo "    Core: ${VERSION}"
echo "    Framework: ${FW_VERSION}"
echo "    DevTools: ${DEVTOOLS_VERSION}"

# Core version
for f in $FILES
do
  sed -i '' -e "s/\"version\": \".*\",/\"version\": \"$VERSION\",/" "$f"
  sed -i '' -e "s/\"@olympeio\/dev-tools\": \".*\",/\"@olympeio\/dev-tools\": \"$DEVTOOLS_VERSION\",/" "$f"
  sed -i '' -e "s/\"@olympeio\/runtime-\(.*\)\": \".*\",/\"@olympeio\/runtime-\\1\": \"$FW_VERSION\",/" "$f"
done

