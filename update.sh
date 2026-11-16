#!/bin/bash
# ==============================================================================
# SCRIPT DE ATUALIZAÇÃO RÁPIDA (ZERO DOWNTIME)
# Instituto Magister de Ensino - estude.institutomagisterpi.com.br
# ==============================================================================

set -e

APP_DIR="/var/www/estude.institutomagisterpi.com.br"
PM2_APP_NAME="magister-landing-page"

if [ -d "$APP_DIR" ]; then
    cd "$APP_DIR"
fi

echo ">>> [1/4] Atualizando código do repositório Git..."
git pull origin main

echo ">>> [2/4] Instalando dependências..."
npm ci --prefer-offline --no-audit

echo ">>> [3/4] Recompilando o Next.js 15..."
npm run build

echo ">>> [4/4] Recarregando no PM2 (Zero Downtime na porta 3020)..."
if pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
    pm2 reload "$PM2_APP_NAME" --update-env
else
    pm2 start ecosystem.config.cjs --env production
fi
pm2 save

echo "================================================================="
echo "✅ ATUALIZAÇÃO CONCLUÍDA COM SUCESSO!"
echo "URL: https://estude.institutomagisterpi.com.br"
echo "================================================================="
