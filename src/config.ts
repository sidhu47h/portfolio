// Direct configuration with hardcoded values
export const emailJsConfig = {
  serviceId: 'service_0qrce9k',
  templateId: 'template_uqf0pjm',
  publicKey: '3bSukOhnnQVjg4lgQ',
};

// Debug configuration in console (without exposing actual values)
console.log('EmailJS Configuration:', {
  serviceIdPresent: Boolean(emailJsConfig.serviceId),
  templateIdPresent: Boolean(emailJsConfig.templateId),
  publicKeyPresent: Boolean(emailJsConfig.publicKey)
});

// Helper to check if EmailJS is configured
export const isEmailJsConfigured = (): boolean => {
  // Check if all required values are present
  return !!(
    emailJsConfig.serviceId &&
    emailJsConfig.templateId &&
    emailJsConfig.publicKey
  );
};