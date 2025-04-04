import { motion } from 'framer-motion';
import { useState, useRef, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import type { Contact } from '../types/portfolio';

interface ContactProps {
  title: string;
  formFields: Contact['formFields'];
}

const Contact = ({ title, formFields }: ContactProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Initialize EmailJS
  useEffect(() => {
    // Debug: Log if environment variables are defined (without revealing their values)
    console.log('EmailJS env vars defined?', {
      serviceId: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    });
    
    // Ensure EmailJS is initialized only once when the component mounts
    try {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (publicKey) {
        emailjs.init(publicKey);
        console.log('EmailJS initialized successfully');
      } else {
        console.warn('EmailJS public key is not defined in environment variables');
      }
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }, []);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check if environment variables are defined
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is missing. Please check your environment variables.');
      setSubmitStatus({
        success: false,
        message: 'Email service is not properly configured. Please contact me directly via email.'
      });
      setIsSubmitting(false);
      return;
    }

    // Safely attempt to send the email
    try {
      emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitStatus({
            success: true,
            message: 'Message sent successfully! I will get back to you soon.'
          });
          form.current?.reset();
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          setSubmitStatus({
            success: false,
            message: 'Failed to send message. Please try again or contact me directly.'
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } catch (error) {
      console.error('Exception while sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'An unexpected error occurred. Please try again later or contact me directly.'
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-20 bg-gray-50 dark:bg-[#121212] transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-black dark:text-white"
        >
          {title}
        </motion.h2>
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            {submitStatus && (
              <div 
                className={`mb-6 p-4 rounded-md ${
                  submitStatus.success 
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100' 
                    : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {formFields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={4}
                      required={field.required}
                      className="mt-1 py-3 px-4 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-black dark:focus:border-white focus:ring-black dark:focus:ring-white bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      className="mt-1 py-3 px-4 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-black dark:focus:border-white focus:ring-black dark:focus:ring-white bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ease-in-out ${
                  isSubmitting 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:bg-gray-800 dark:hover:bg-gray-200'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 