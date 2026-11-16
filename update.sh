#!/bin/bash
# ==============================================================================
# SCRIPT DE ATUALIZAÇÃO RÁPIDA (ZERO DOWNTIME)
# Instituto Magister de Ensino - estude.institutomagisterpi.com.br
# ==============================================================================

set -e

PM2_APP_NAME="magister-landing-page"

echo ">>> [1/5] Verificando PM2..."
if ! command -v pm2 > /dev/null 2>&1; then
    echo "Instalando PM2 globalmente via npm..."
    npm install -g pm2
fi

echo ">>> [2/5] Atualizando código do repositório Git..."
git pull origin main

echo ">>> [3/5] Instalando dependências..."
npm ci --prefer-offline --no-audit

echo ">>> [4/5] Recompilando o Next.js 15..."
npm run build

echo ">>> [5/5] Recarregando no PM2 (Zero Downtime na porta 3020)..."
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
