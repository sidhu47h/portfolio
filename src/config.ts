// Direct configuration with hardcoded values
export const emailJsConfig = {
  serviceId: 'service_0qrce9k',
  templateId: 'template_uqf0pjm',
  publicKey: '3bSukOhnnQVjg4lgQ',
};

// Verbose debug - will show in console but won't expose sensitive data to users
console.log('%c[EmailJS Debug]', 'color: blue; font-weight: bold', 
  'Configuration loaded with the following state:', {
    serviceIdLength: emailJsConfig.serviceId?.length || 0,
    templateIdLength: emailJsConfig.templateId?.length || 0,
    publicKeyLength: emailJsConfig.publicKey?.length || 0,
    allKeysPresent: !!(
      emailJsConfig.serviceId &&
      emailJsConfig.templateId &&
      emailJsConfig.publicKey
    )
  }
);

// Debug configuration in console (without exposing actual values)
console.log('EmailJS Configuration:', {
  serviceIdPresent: Boolean(emailJsConfig.serviceId),
  templateIdPresent: Boolean(emailJsConfig.templateId),
  publicKeyPresent: Boolean(emailJsConfig.publicKey)
});

// Helper to check if EmailJS is configured
export const isEmailJsConfigured = (): boolean => {
  // Check if all required values are present
  const configured = !!(
    emailJsConfig.serviceId &&
    emailJsConfig.templateId &&
    emailJsConfig.publicKey
  );
  
  console.log('EmailJS isConfigured check result:', configured);
  return configured;
};