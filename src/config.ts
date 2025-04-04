export const emailJsConfig = {
  // For static hosting like GitHub Pages, environment variables must be
  // injected at build time, which the GitHub workflow does via .env
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

// Debug environment variables in console (without exposing actual values)
console.log('EmailJS Environment Variables Available:', {
  serviceId: Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID),
  templateId: Boolean(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
  publicKey: Boolean(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
});

// Helper to check if EmailJS is configured
export const isEmailJsConfigured = (): boolean => {
  return !!(
    emailJsConfig.serviceId &&
    emailJsConfig.templateId &&
    emailJsConfig.publicKey
  );
};