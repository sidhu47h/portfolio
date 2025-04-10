import { motion } from 'framer-motion';
import { useState, useRef, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import type { Contact } from '../types/portfolio';
import { emailJsConfig, isEmailJsConfigured } from '../config';

interface ContactProps {
  title: string;
  formFields: Contact['formFields'];
  email?: string;
}

const Contact = ({ title, formFields, email = 'contact@example.com' }: ContactProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [isConfigured, setIsConfigured] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    console.log('Contact component mounted, initializing EmailJS');
    
    // Log the actual config values (without exposing them fully)
    console.log('EmailJS config being used:', {
      serviceIdFirstChar: emailJsConfig.serviceId?.charAt(0) || 'missing',
      templateIdFirstChar: emailJsConfig.templateId?.charAt(0) || 'missing',
      publicKeyFirstChar: emailJsConfig.publicKey?.charAt(0) || 'missing'
    });
    
    const configured = isEmailJsConfigured();
    setIsConfigured(configured);
    
    // Log configuration status without exposing values
    console.log('EmailJS configured:', configured);
    
    if (!configured) {
      console.warn('EmailJS configuration is missing. Contact form functionality will be limited.');
    }
    
    // Ensure EmailJS is initialized only once when the component mounts
    try {
      if (emailJsConfig.publicKey) {
        emailjs.init(emailJsConfig.publicKey);
        console.log('EmailJS initialized successfully with public key');
      } else {
        console.warn('EmailJS public key is not defined');
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

    // Check if EmailJS is configured
    if (!isConfigured) {
      console.error('EmailJS is not configured. Please check your environment variables.');
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
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        form.current,
        emailJsConfig.publicKey
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
    <section id="contact" className="w-full py-20 bg-gray-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-black"
        >
          {title}
        </motion.h2>
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-lg shadow-lg p-8"
          >
            {!isConfigured && (
              <div className="mb-6 p-4 rounded-md bg-yellow-100 text-yellow-800">
                <p className="font-medium">Contact form is currently unavailable.</p>
                <p className="mt-1">Please reach out via email directly at: <a href={`mailto:${email}`} className="underline">{email}</a></p>
              </div>
            )}
            
            {submitStatus && (
              <div 
                className={`mb-6 p-4 rounded-md ${
                  submitStatus.success 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {formFields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={4}
                      required={field.required}
                      className="mt-1 py-3 px-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black bg-gray-50 text-black"
                      disabled={!isConfigured || isSubmitting}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      className="mt-1 py-3 px-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black bg-gray-50 text-black"
                      disabled={!isConfigured || isSubmitting}
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                disabled={!isConfigured || isSubmitting}
                className={`w-full bg-black text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ease-in-out ${
                  !isConfigured || isSubmitting 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:bg-gray-800'
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