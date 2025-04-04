export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

// Debug environment variables in console
console.log('EmailJS Environment Variables Available:', {
  serviceId: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY
});

// Helper to check if EmailJS is configured
export const isEmailJsConfigured = (): boolean => {
  return !!(
    emailJsConfig.serviceId &&
    emailJsConfig.templateId &&
    emailJsConfig.publicKey
  );
};