export const emailJsConfig = {
  // For static hosting like GitHub Pages, environment variables must be
  // injected at build time, which the GitHub workflow does via .env
  
  // Service ID from EmailJS (from the integration tab in your EmailJS dashboard)
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  
  // Template ID from EmailJS (from the email templates section)
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  
  // Public Key from EmailJS (from API Keys in your account settings)
  // Note: EmailJS only needs the public key for client-side integration, not a private key
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

// Flag set during build if secrets were missing
const configMissing = import.meta.env.VITE_EMAILJS_CONFIG_MISSING === 'true';

// Debug environment variables in console (without exposing actual values)
console.log('EmailJS Environment Variables:', {
  available: !configMissing,
  serviceIdPresent: Boolean(emailJsConfig.serviceId),
  templateIdPresent: Boolean(emailJsConfig.templateId),
  publicKeyPresent: Boolean(emailJsConfig.publicKey),
  builtWithMissingConfig: configMissing
});

// Helper to check if EmailJS is configured
export const isEmailJsConfigured = (): boolean => {
  // If the build process flagged missing secrets, always return false
  if (configMissing) {
    return false;
  }
  
  // Otherwise check if all required values are present
  return !!(
    emailJsConfig.serviceId &&
    emailJsConfig.templateId &&
    emailJsConfig.publicKey
  );
};