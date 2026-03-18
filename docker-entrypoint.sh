#!/usr/bin/env sh
set -eu

cd /app

if [ ! -d src ] && [ -d src-init ]; then
  cp -a src-init src
fi

mkdir -p src

if [ ! -f src/index.html ]; then
  cat > src/index.html <<'EOF'
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dockerized Initial Case</title>
  </head>
  <body>
    <main>Dockerized initial case</main>
  </body>
</html>
EOF
fi

exec serve -s dist -l 5173
