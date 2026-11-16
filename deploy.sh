#!/bin/bash
# ==============================================================================
# SCRIPT DE DEPLOY INICIAL / COMPLETO (NEXT.JS + PM2 + NGINX)
# Instituto Magister de Ensino - estude.institutomagisterpi.com.br
# ==============================================================================

set -e

CURRENT_DIR="$(pwd)"
TARGET_DIR="/var/www/estude.institutomagisterpi.com.br"
PM2_APP_NAME="magister-landing-page"

echo ">>> [1/6] Garantindo integridade de diretórios e links..."
if [ "$CURRENT_DIR" != "$TARGET_DIR" ]; then
    if [ ! -d "$TARGET_DIR" ]; then
        echo "Criando link simbólico: $TARGET_DIR -> $CURRENT_DIR"
        ln -sf "$CURRENT_DIR" "$TARGET_DIR"
    fi
fi

echo ">>> [2/6] Verificando dependências globais (PM2)..."
if ! command -v pm2 > /dev/null 2>&1; then
    echo "PM2 não encontrado. Instalando PM2 globalmente via npm..."
    npm install -g pm2
fi

echo ">>> [3/6] Instalando dependências de produção do projeto..."
npm ci --prefer-offline --no-audit

echo ">>> [4/6] Compilando build otimizada Next.js 15..."
npm run build

echo ">>> [5/6] Configurando Nginx para estude.institutomagisterpi.com.br..."
if [ -f "deploy/nginx/estude.institutomagisterpi.com.br.conf" ]; then
    cp deploy/nginx/estude.institutomagisterpi.com.br.conf /etc/nginx/sites-available/
    ln -sf /etc/nginx/sites-available/estude.institutomagisterpi.com.br.conf /etc/nginx/sites-enabled/
    nginx -t && systemctl reload nginx
fi

echo ">>> [6/6] Iniciando aplicação no PM2 na porta 3020..."
if pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
    pm2 reload "$PM2_APP_NAME" --update-env
else
    pm2 start ecosystem.config.cjs --env production
fi
pm2 save

echo "================================================================="
echo "✅ DEPLOY CONCLUÍDO COM SUCESSO!"
echo "Porta: 3020 | PM2: $PM2_APP_NAME"
echo "Domínio configurado no Nginx: estude.institutomagisterpi.com.br"
echo "Para ativar o certificado SSL HTTPS (Let's Encrypt), execute:"
echo "certbot --nginx -d estude.institutomagisterpi.com.br"
echo "================================================================="
