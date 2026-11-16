import { z } from "zod";

export const LeadSchema = z.object({
  nomeResponsavel: z
    .string({ required_error: "Nome é obrigatório" })
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome muito longo"),
  whatsapp: z
    .string({ required_error: "WhatsApp é obrigatório" })
    .regex(/^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/, "Número de WhatsApp inválido (use DDD + 9 dígitos)"),
  email: z
    .string()
    .email("E-mail com formato inválido")
    .optional()
    .or(z.literal("")),
  nomeAluno: z.string().max(100).optional(),
  cicloPretendido: z.enum([
    "Educação Infantil (2 a 5 anos)",
    "Ensino Fundamental I (1º ao 5º ano)",
    "Ensino Fundamental II (6º ao 9º ano)",
    "Ensino Médio & Pré-Vestibular",
    "Turno Integral",
  ], { required_error: "Selecione o ciclo pretendido" }),
  turno: z.enum(["Manhã", "Tarde", "Integral"]).default("Manhã"),
  tipoAtendimento: z.enum(["visita_presencial", "whatsapp_online"]).default("visita_presencial"),
});

export type LeadInput = z.infer<typeof LeadSchema>;
