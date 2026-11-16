#!/bin/bash
# ==============================================================================
# SCRIPT DE DEPLOY INICIAL / COMPLETO (NEXT.JS + PM2 + NGINX)
# Instituto Magister de Ensino - estude.institutomagisterpi.com.br
# ==============================================================================

set -e

APP_DIR="/var/www/estude.institutomagisterpi.com.br"
PM2_APP_NAME="magister-landing-page"

echo ">>> [1/5] Verificando diretório: $APP_DIR"
if [ -d "$APP_DIR" ]; then
    cd "$APP_DIR"
fi

echo ">>> [2/5] Instalando dependências de produção..."
npm ci --prefer-offline --no-audit

echo ">>> [3/5] Compilando build otimizada Next.js 15..."
npm run build

echo ">>> [4/5] Configurando Nginx para estude.institutomagisterpi.com.br..."
if [ -f "deploy/nginx/estude.institutomagisterpi.com.br.conf" ]; then
    sudo cp deploy/nginx/estude.institutomagisterpi.com.br.conf /etc/nginx/sites-available/
    sudo ln -sf /etc/nginx/sites-available/estude.institutomagisterpi.com.br.conf /etc/nginx/sites-enabled/
    sudo nginx -t && sudo systemctl reload nginx || echo "Aviso: Nginx requer permissões sudo para reload."
fi

echo ">>> [5/5] Iniciando / Recarregando no PM2 na porta 3020..."
if pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
    pm2 reload "$PM2_APP_NAME" --update-env
else
    pm2 start ecosystem.config.cjs --env production
fi
pm2 save

echo "================================================================="
echo "✅ DEPLOY CONCLUÍDO COM SUCESSO!"
echo "Porta: 3020 | PM2: $PM2_APP_NAME"
echo "Domínio: http://estude.institutomagisterpi.com.br"
echo "Para ativar o SSL HTTPS, execute:"
echo "sudo certbot --nginx -d estude.institutomagisterpi.com.br"
echo "================================================================="
