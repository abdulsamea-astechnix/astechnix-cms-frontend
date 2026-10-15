export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ?? "",
} as const;
