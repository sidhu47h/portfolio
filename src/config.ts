// EmailJS configuration
// These values are safely injected during the build process
// and are not exposed in the source code
export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

// Helper to check if EmailJS is configured
export const isEmailJsConfigured = (): boolean => {
  return !!(
    emailJsConfig.serviceId &&
    emailJsConfig.templateId &&
    emailJsConfig.publicKey
  );
}; 