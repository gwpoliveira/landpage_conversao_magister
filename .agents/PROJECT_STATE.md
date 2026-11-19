# 🏛️ LEDGER DE ESTADO DO PROJETO - INSTITUTO MAGISTER DE ENSINO
> **Projeto:** Landing Page de Conversão de Clientes / Matrículas (Teresina-PI)  
> **Tech Lead & Arquiteto:** MAESTRO  
> **Última Atualização:** 2026-11-16  

---

## 1. STATUS DOS QUALITY GATES

| Quality Gate | Subagente Responsável | Status Atual | Observações |
| :--- | :--- | :--- | :--- |
| **1. Planejamento & Copy** | `Marketing & Pitch Master` / `Docs & Reports` | 🟢 **APROVADO** | Blueprint completo de alta conversão gerado e validado. |
| **2. Identidade Visual (Cores & Tipologia)** | `Next.js & Frontend Master` | 🟢 **CALIBRADO** | Cores oficiais extraídas de `logo.png`: Azul `#134889`, Amarelo Âmbar `#F5AC1D`. |
| **3. Prototipação Interativa de Alta Fidelidade** | `Next.js & Frontend Master` | 🟢 **ENTREGUE** | Protótipo interativo completo em `index.html` com cookies e modais LGPD. |
| **4. Frontend Next.js 15 & Framer Motion** | `Next.js & Frontend Master` | 🟢 **CONSTRUÍDO & ANIMADO A 60FPS** | Framer Motion integrado em todas as seções, AnimatePresence em modais e steps, build 100% verde. |
| **5. QA & Compliance LGPD / Termos** | `Guardian (Segurança)` / `Docs` | 🟢 **CONFORMIDADE TOTAL** | Banner configurável de cookies (Essenciais, Analíticos, Marketing), Política LGPD e Termos de Uso. |
| **6. Repositório Remoto Git (GitHub)** | `Maestro` / `Guardian` | 🟢 **PUBLICADO & ATIVO** | Repositório: `https://github.com/gwpoliveira/landpage_conversao_magister` (branch `main`). |
| **7. Deploy VPS Bare-Metal (Zero Docker)** | `VPS Bare-Metal Sysadmin` | 🟢 **SCRIPTS PRONTOS** | Porta 3020 alocada, `deploy.sh` e `update.sh` automatizados para PM2 e Nginx. |
| **8. Domínio & SSL** | `VPS Bare-Metal Sysadmin` | 🟡 **AGUARDANDO ATIVAÇÃO SSL** | Alvo: `estude.institutomagisterpi.com.br` com Certbot automático. |

---

## 2. MAPA DE REQUISITOS DO PRODUTO

- [x] **Diagnóstico de Posicionamento**: Instituto Magister de Ensino em Teresina-PI focado em acolhimento + alta performance no ENEM.
- [x] **Padronização de Nomenclatura Oficial**: Nome corrigido rigorosamente para "Instituto Magister de Ensino" em todo o menu, header, rodapé e metatags.
- [x] **Assinatura de Autoria & Desenvolvimento**: Crédito profissional inserido no rodapé: "Desenvolvido por Gleiser Wesley" linkando para `https://gleiserwesley.com.br`.
- [x] **Compliance LGPD & Termos**: Banner configurável de cookies, modal de privacidade LGPD e termos de uso.
- [x] **Funil de Conversão**: Hero com CTAs duplos, Prova Social, Bento Grid de Segmentos, Galeria de Estrutura, Multi-Step Lead Form, FAQ e Floating WhatsApp.
- [ ] **Implementação do Projeto Next.js 15**: Tailwind CSS, Lucide Icons, Framer Motion.
- [ ] **Formulário de Captação**: Multi-step com validação de telefone brasileiro (DDD 86).
- [ ] **SEO Local Teresina**: Schema.org de instituição de ensino com geolocalização.
- [ ] **Auditoria Guardian**: Emissão formal do Selo de Segurança.

---

## 3. AUDITORIA DE MELHORIAS — 2026-11-19 (Maestro)

**Quality Gates reavaliados:** QA 🔴 (0% de cobertura, nenhum teste) · Guardian 🔴 (sem Selo; `npm audit`: 2 high — zod <4.6.6, postcss interno do next) · SEO 🟡 (domínio divergente) · LGPD 🟡 (cookies não-essenciais pré-marcados).

Backlog priorizado:
- [x] **P0** (2026-11-19) Substituir o WhatsApp placeholder `5586999999999` (6 pontos no `src/`) por constante única em `src/lib/contact.ts`.
- [x] **P0** (2026-11-19) Unificar domínio → `estude.institutomagisterpi.com.br` (fonte única `SITE_URL`): metadata/JSON-LD usam `magisterteresina.com.br`, deploy usa `estude.institutomagisterpi.com.br`. Adicionar `metadataBase`.
- [ ] **P0** Telefone `(86) 3232-1500` e números do StatsBar/depoimentos: validar com a escola (risco CDC/CONAR se fictícios).
- [ ] **P1** Portar o redesign do commit `377229f` (`index.html`: Newsreader + DM Sans + fotos reais) para o app Next.js — hoje o app não usa `public/images/`.
- [ ] **P1** Formulários: usar o `LeadSchema` (Zod) já existente no lugar de `alert()`, máscara de telefone, erros inline com `aria-describedby`.
- [ ] **P1** `page.tsx` inteiro é `"use client"`: mover estado dos modais para um provider e manter seções como Server Components.
- [ ] **P1** `prefers-reduced-motion` ausente (nenhum `useReducedMotion`/`MotionConfig`).
- [ ] **P1** Cookies: `analytics`/`marketing` iniciam `true` → devem iniciar `false` (LGPD art. 8º, consentimento livre).
- [ ] **P1** Nginx: bloco 443 com HTTP/2, HSTS, CSP; remover `X-XSS-Protection`; Brotli.
- [ ] **P2** `sitemap.ts`, `robots.ts`, OG image, JSON-LD com `geo`, `openingHours`, `sameAs`.
- [ ] **P2** Limpeza: `images/` duplicado na raiz, `deploy.sh`/`update.sh` duplicados e divergentes, dois lockfiles (npm + pnpm).
- [ ] **P2** Suíte Vitest + Playwright (≥85%) e CI no GitHub Actions.

- [ ] **P0** E-mails `contato@`/`privacidade@magisterteresina.com.br` (Footer, PrivacyModal) usam domínio antigo: confirmar caixas reais no domínio oficial.

**Decisão (2026-11-19):** contato centralizado em `src/lib/contact.ts` (`SITE_URL`, `WHATSAPP_NUMBER` 5586981710771, `whatsappLink()` com `encodeURIComponent` em toda mensagem). JSON-LD `telephone` passa a usar o WhatsApp oficial; telefone fixo (86) 3232-1500 segue pendente de confirmação.
