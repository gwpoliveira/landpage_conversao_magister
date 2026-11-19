/**
 * Fonte única dos dados de contato e do domínio oficial.
 * Qualquer número, e-mail ou URL exibido no site deve vir daqui.
 */

export const SITE_URL = "https://estude.institutomagisterpi.com.br" as const;

/** WhatsApp oficial da secretaria, formato E.164 sem o "+" (exigido pelo wa.me). */
export const WHATSAPP_NUMBER = "5586981710771" as const;
export const WHATSAPP_DISPLAY = "(86) 98171-0771" as const;
export const WHATSAPP_E164 = "+55-86-98171-0771" as const;

/** Monta o link wa.me com a mensagem codificada com segurança. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  navbar: "Olá, gostaria de informações sobre as matrículas do Instituto Magister.",
  hero: "Olá, quero conversar com um orientador do Instituto Magister de Ensino.",
  floating:
    "Olá, estou na página do Instituto Magister e gostaria de falar com o atendimento.",
} as const;
