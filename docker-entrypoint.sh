#!/usr/bin/env sh
set -eu

cd /app

mkdir -p src
mkdir -p src/public

echo "Building Angular app from src/"
node ./scripts/build.js src

echo "Serving built Angular app on port 5173"
exec serve -s /app/src/dist/angular -l 5173
