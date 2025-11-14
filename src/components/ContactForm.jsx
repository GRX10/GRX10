import React, { useState } from 'react';

const ContactForm = ({ isOpen, onClose }) => {
  // Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    organizationName: '',
    organizationEmail: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    organizationName: '',
    organizationEmail: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    organizationName: false,
    organizationEmail: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      return 'Phone number is required';
    }
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');
    
    // Check if phone number has 10-15 digits (international format)
    if (digitsOnly.length < 10) {
      return 'Phone number must be at least 10 digits';
    }
    if (digitsOnly.length > 15) {
      return 'Phone number must be less than 15 digits';
    }
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validateName = (name) => {
    if (!name.trim()) {
      return 'Name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    return '';
  };

  const validateOrganization = (orgName) => {
    if (!orgName.trim()) {
      return 'Organization name is required';
    }
    if (orgName.trim().length < 2) {
      return 'Organization name must be at least 2 characters';
    }
    return '';
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate field as user types (only if already touched)
    if (touched[name]) {
      let error = '';
      switch (name) {
        case 'name':
          error = validateName(value);
          break;
        case 'phone':
          error = validatePhone(value);
          break;
        case 'organizationName':
          error = validateOrganization(value);
          break;
        case 'organizationEmail':
          error = validateEmail(value);
          break;
        default:
          break;
      }
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });

    // Validate on blur
    let error = '';
    switch (name) {
      case 'name':
        error = validateName(formData[name]);
        break;
      case 'phone':
        error = validatePhone(formData[name]);
        break;
      case 'organizationName':
        error = validateOrganization(formData[name]);
        break;
      case 'organizationEmail':
        error = validateEmail(formData[name]);
        break;
      default:
        break;
    }
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    const orgError = validateOrganization(formData.organizationName);
    const emailError = validateEmail(formData.organizationEmail);
    
    // Set all errors
    const newErrors = {
      name: nameError,
      phone: phoneError,
      organizationName: orgError,
      organizationEmail: emailError
    };
    
    setErrors(newErrors);
    
    // Mark all fields as touched
    setTouched({
      name: true,
      phone: true,
      organizationName: true,
      organizationEmail: true
    });
    
    // If any errors, prevent submission
    if (nameError || phoneError || orgError || emailError) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    // Check if Google Script URL is configured
    if (!GOOGLE_SCRIPT_URL) {
      setSubmitMessage({ 
        type: 'error', 
        text: 'Email service not configured. Please check GOOGLE_APPS_SCRIPT_SETUP.md for setup instructions.' 
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Log the data being sent
      console.log('Sending form data:', formData);
      console.log('Google Script URL:', GOOGLE_SCRIPT_URL);

      // Create a hidden iframe to receive the response
      const iframe = document.createElement('iframe');
      iframe.name = 'hiddenFrame';
      iframe.id = 'hiddenFrame';
      iframe.style.display = 'none';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = 'none';
      document.body.appendChild(iframe);
      
      // Create a form element
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_SCRIPT_URL;
      form.target = 'hiddenFrame';
      form.style.display = 'none';
      form.enctype = 'application/x-www-form-urlencoded';
      
      // Add individual form fields (more reliable than JSON)
      const fields = [
        { name: 'name', value: formData.name },
        { name: 'phone', value: formData.phone },
        { name: 'organizationName', value: formData.organizationName },
        { name: 'organizationEmail', value: formData.organizationEmail }
      ];
      
      fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
      });
      
      // Add form to DOM, submit, then remove
      document.body.appendChild(form);
      console.log('Submitting form to:', GOOGLE_SCRIPT_URL);
      console.log('Form fields:', fields);
      
      // Add load listener to iframe to detect when submission completes
      iframe.onload = function() {
        console.log('Form submission completed (iframe loaded)');
      };
      
      iframe.onerror = function() {
        console.error('Form submission error (iframe error)');
      };
      
      form.submit();
      console.log('Form submitted successfully');
      
      // Clean up after submission
      setTimeout(() => {
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 5000);

      // Success
      setSubmitMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
      
      // Reset form after a short delay
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          organizationName: '',
          organizationEmail: ''
        });
        setErrors({
          name: '',
          phone: '',
          organizationName: '',
          organizationEmail: ''
        });
        setTouched({
          name: false,
          phone: false,
          organizationName: false,
          organizationEmail: false
        });
        setSubmitMessage({ type: '', text: '' });
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Form Submission Error:', error);
      
      let errorMessage = 'Failed to send message. Please try again later.';
      if (error.name === 'AbortError') {
        errorMessage = 'Request timed out. Please check your connection and try again.';
      }
      
      setSubmitMessage({ 
        type: 'error', 
        text: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md rounded-2xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        style={{ background: 'linear-gradient(rgb(49, 11, 32) 0%, rgb(30, 30, 50) 100%)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white text-2xl font-bold hover:opacity-80 transition-opacity"
          aria-label="Close form"
        >
          ✕
        </button>
        
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-left">Get in Touch</h3>
        
        <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-white font-semibold mb-2 text-sm">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              onBlur={handleBlur}
              required
              className={`w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                errors.name && touched.name ? 'ring-2 ring-red-500 focus:ring-red-500' : 'focus:ring-white/50'
              }`}
              placeholder="Enter your name"
            />
            {errors.name && touched.name && (
              <p className="mt-2 text-sm text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone Number Field */}
          <div>
            <label htmlFor="phone" className="block text-white font-semibold mb-2 text-sm">
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              onBlur={handleBlur}
              required
              pattern="[\d\s\-\+\(\)]*"
              className={`w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                errors.phone && touched.phone ? 'ring-2 ring-red-500 focus:ring-red-500' : 'focus:ring-white/50'
              }`}
              placeholder="Enter your phone number (e.g., +1234567890)"
            />
            {errors.phone && touched.phone && (
              <p className="mt-2 text-sm text-red-400">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Organization Name Field */}
          <div>
            <label htmlFor="organizationName" className="block text-white font-semibold mb-2 text-sm">
              Organization Name*
            </label>
            <input
              type="text"
              id="organizationName"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleFormChange}
              onBlur={handleBlur}
              required
              className={`w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                errors.organizationName && touched.organizationName ? 'ring-2 ring-red-500 focus:ring-red-500' : 'focus:ring-white/50'
              }`}
              placeholder="Enter your organization name"
            />
            {errors.organizationName && touched.organizationName && (
              <p className="mt-2 text-sm text-red-400">
                {errors.organizationName}
              </p>
            )}
          </div>

          {/* Organization Email Field */}
          <div>
            <label htmlFor="organizationEmail" className="block text-white font-semibold mb-2 text-sm">
              Organization Email*
            </label>
            <input
              type="email"
              id="organizationEmail"
              name="organizationEmail"
              value={formData.organizationEmail}
              onChange={handleFormChange}
              onBlur={handleBlur}
              required
              className={`w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                errors.organizationEmail && touched.organizationEmail ? 'ring-2 ring-red-500 focus:ring-red-500' : 'focus:ring-white/50'
              }`}
              placeholder="Enter your organization email"
            />
            {errors.organizationEmail && touched.organizationEmail && (
              <p className="mt-2 text-sm text-red-400">
                {errors.organizationEmail}
              </p>
            )}
          </div>

          {/* Submit Message */}
          {submitMessage.text && (
            <div className={`mt-4 p-3 rounded-lg text-sm ${
              submitMessage.type === 'success' 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-red-500/20 text-red-400'
            }`}>
              {submitMessage.text}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-white text-[#E1198B] font-bold py-3 px-6 rounded-lg transition-all duration-300 mt-6 ${
              isSubmitting 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-white/90 cursor-pointer'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

