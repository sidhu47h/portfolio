export const emailJsConfig = {
  // For static hosting like GitHub Pages, environment variables must be
  // injected at build time, which the GitHub workflow does via .env
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
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