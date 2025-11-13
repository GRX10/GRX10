import React, { useState } from 'react';

const ContactForm = ({ isOpen, onClose }) => {
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

  const handleFormSubmit = (e) => {
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
    
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    onClose();
    // Reset form
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-[#E1198B] font-bold py-3 px-6 rounded-lg hover:bg-white/90 transition-all duration-300 mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

