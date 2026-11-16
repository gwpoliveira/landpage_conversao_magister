#!/bin/bash
# ==============================================================================
# SCRIPT DE DEPLOY ZERO-DOWNTIME (NEXT.JS + PM2 + NGINX)
# Instituto Magister de Ensino - estude.institutomagisterpi.com.br
# ==============================================================================

set -e

APP_DIR="/var/www/estude.institutomagisterpi.com.br"
PM2_APP_NAME="magister-landing-page"

echo ">>> [1/5] Entrando no diretório da aplicação: $APP_DIR"
cd "$APP_DIR"

echo ">>> [2/5] Atualizando código do repositório Git..."
git fetch origin main
git reset --hard origin/main

echo ">>> [3/5] Instalando dependências de produção..."
npm ci --prefer-offline --no-audit

echo ">>> [4/5] Compilando build otimizada do Next.js 15..."
npm run build

echo ">>> [5/5] Recarregando aplicação no PM2 (Zero Downtime)..."
if pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
    pm2 reload "$PM2_APP_NAME" --update-env
else
    pm2 start ecosystem.config.cjs --env production
    pm2 save
fi

echo "================================================================="
echo "✅ DEPLOY CONCLUÍDO COM SUCESSO!"
echo "Aplicação rodando na porta 3020 sob o PM2."
echo "URL: https://estude.institutomagisterpi.com.br"
echo "================================================================="
