import React, { useState } from 'react';

const ContactUs = () => {
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      return 'Phone number is required';
    }
    const digitsOnly = phone.replace(/\D/g, '');
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    if (touched[name]) {
      if (name === 'phone') {
        setErrors(prev => ({ ...prev, [name]: validatePhone(value) }));
      } else if (name === 'email') {
        setErrors(prev => ({ ...prev, [name]: validateEmail(value) }));
      } else if ((name === 'firstName' || name === 'lastName') && !value.trim()) {
        setErrors(prev => ({ ...prev, [name]: 'This field is required' }));
      } else if ((name === 'firstName' || name === 'lastName') && value.trim()) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      } else {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    if (name === 'phone') {
      setErrors(prev => ({ ...prev, [name]: validatePhone(value) }));
    } else if (name === 'email') {
      setErrors(prev => ({ ...prev, [name]: validateEmail(value) }));
    } else if ((name === 'firstName' || name === 'lastName') && !value.trim()) {
      setErrors(prev => ({ ...prev, [name]: 'This field is required' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    // Mark all fields as touched
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      message: true
    });

    // Validate all fields
    const newErrors = {
      firstName: !formData.firstName.trim() ? 'This field is required' : '',
      lastName: !formData.lastName.trim() ? 'This field is required' : '',
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: ''
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');

    if (hasErrors) {
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
      
      // Add individual form fields
      const fields = [
        { name: 'firstName', value: formData.firstName },
        { name: 'lastName', value: formData.lastName },
        { name: 'email', value: formData.email },
        { name: 'phone', value: formData.phone },
        { name: 'message', value: formData.message }
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
      form.submit();
      
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
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        setTouched({
          firstName: false,
          lastName: false,
          email: false,
          phone: false,
          message: false
        });
        setErrors({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        setSubmitMessage({ type: '', text: '' });
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Google Maps embed URL for MKB Tower, Indiranagar, Bengaluru
  const address = "MKB Tower, 3rd floor, 2nd Cross Road, Appareddy Palya Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008";
  const encodedAddress = encodeURIComponent(address);
  // Using Google Maps search embed (works without API key)
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <section className="bg-dark-bg text-text-white pt-32 pb-20 px-5 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Form */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold gradient-text mb-10">Get in touch</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  First Name<span className="text-[#E1198B]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full bg-white border-2 border-white text-black py-2 px-4 rounded-lg focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                    placeholder=""
                    style={{ color: '#000000' }}
                  />
                </div>
                {touched.firstName && errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Last Name<span className="text-[#E1198B]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full bg-white border-2 border-white text-black py-2 px-4 rounded-lg focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                    placeholder=""
                    style={{ color: '#000000' }}
                  />
                </div>
                {touched.lastName && errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Your email<span className="text-[#E1198B]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full bg-white border-2 border-white text-black py-2 px-4 rounded-lg focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                    placeholder=""
                    style={{ color: '#000000' }}
                  />
                </div>
                {touched.email && errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Phone Number<span className="text-[#E1198B]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full bg-white border-2 border-white text-black py-2 px-4 rounded-lg focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
                    placeholder=""
                    style={{ color: '#000000' }}
                  />
                </div>
                {touched.phone && errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="4"
                    className="w-full bg-white border-2 border-white text-black py-2 px-4 rounded-lg focus:outline-none focus:border-white transition-colors resize-none placeholder:text-gray-500"
                    placeholder=""
                    style={{ color: '#000000' }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#E1198B] text-white px-8 py-3 rounded-full font-semibold text-base cursor-pointer transition-all duration-300 hover:bg-[#c4177a] disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {/* Submit Message */}
              {submitMessage.text && (
                <div className={`mt-4 ${submitMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Call Us */}
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">Call Us</h2>
              <a href="tel:+919502573308" className="text-white text-lg hover:underline">
                +91 9502573308
              </a>
            </div>

            {/* Visit Us */}
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">Visit Us</h2>
              <p className="text-white text-lg leading-relaxed">
                MKB Tower, 3rd floor, 2nd Cross Road, Appareddy Palya Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008
              </p>
            </div>

            {/* Google Map */}
            <div className="mt-8">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0, filter: 'grayscale(100%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GRX10 Office Location - MKB Tower, Indiranagar, Bengaluru"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

