import React, { useState } from 'react';
import { X } from 'lucide-react';

export const ReportFraud = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    organization: '',
    city: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Return null if modal is not open
  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Valid 10-digit mobile number is required';
    if (!formData.organization.trim()) newErrors.organization = 'This field is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API Call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      mobile: '',
      organization: '',
      city: '',
      message: ''
    });
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm font-sans" onClick={onClose}>
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Prevent clicking inside from closing
      >
        
        {/* Header */}
        <div className="bg-[#E91E63] px-6 py-5 flex justify-between items-center shrink-0">
          <h2 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
            Report a potential fraud
          </h2>
          <button 
            onClick={onClose} 
            className="text-white/80 hover:text-white transition-colors bg-black/10 hover:bg-black/20 p-2 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto" data-lenis-prevent="true">
          {isSuccess ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 max-w-lg text-center mx-auto my-8">
              <h2 className="text-2xl font-bold mb-3">Report Submitted</h2>
              <p className="text-[15px] leading-relaxed">
                Thank you for bringing this to our attention. Our trust and safety team will investigate this matter immediately and reach out if further information is required.
              </p>
              <button 
                onClick={handleReset} 
                className="mt-6 bg-[#E91E63] hover:bg-[#D81B60] text-white px-8 py-2.5 rounded-lg font-medium transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
              
              {/* Form Section */}
              <div className="flex-1 w-full">
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      className={`w-full border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-lg px-4 py-3 text-gray-700 text-[15px] focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.name}</p>}
                  </div>

                  <div>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address" 
                      className={`w-full border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-lg px-4 py-3 text-gray-700 text-[15px] focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.email}</p>}
                  </div>

                  <div>
                    <input 
                      type="text" 
                      name="mobile"
                      maxLength="10"
                      value={formData.mobile}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        handleChange({ target: { name: 'mobile', value: val } });
                      }}
                      placeholder="Mobile Number" 
                      className={`w-full border ${errors.mobile ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-lg px-4 py-3 text-gray-700 text-[15px] focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all`}
                    />
                    {errors.mobile && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.mobile}</p>}
                  </div>

                  <div>
                    <input 
                      type="text" 
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Name of the person / organization against whom concern is being raised" 
                      className={`w-full border ${errors.organization ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-lg px-4 py-3 text-gray-700 text-[15px] focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all`}
                    />
                    {errors.organization && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.organization}</p>}
                  </div>

                  <div>
                    <input 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City" 
                      className={`w-full border ${errors.city ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-lg px-4 py-3 text-gray-700 text-[15px] focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all`}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.city}</p>}
                  </div>

                  <div>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message" 
                      rows={4}
                      className={`w-full border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-lg px-4 py-3 text-gray-700 text-[15px] focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#E91E63] hover:bg-[#D81B60] text-white px-10 py-3 rounded-lg font-semibold disabled:opacity-70 transition-all shadow-md hover:shadow-lg flex items-center justify-center min-w-[160px]"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        'Submit Report'
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Disclaimer Sidebar */}
              <div className="w-full md:w-[280px] lg:w-[320px] shrink-0">
                <div className="border border-gray-100 shadow-sm rounded-xl p-6 bg-[#FAFAFA]">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Disclaimer</h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    Please use this form only for reporting potential frauds. For order or other general queries, please{' '}
                    <a href="mailto:support@wooshride.in" className="text-[#E91E63] font-medium hover:underline">contact us here</a>.
                  </p>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportFraud;
