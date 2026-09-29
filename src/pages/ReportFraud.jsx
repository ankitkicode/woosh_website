import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export const ReportFraud = () => {
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

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Red Banner Header */}
      <div className="bg-[#E91E63] w-full py-16 md:py-24 px-4 flex justify-center items-center">
        <h1 className="text-white text-3xl md:text-5xl font-light tracking-wide text-center">
          Report a potential fraud
        </h1>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 py-8 md:py-12">
        <div className="mb-8 pl-1">
          <Link to="/" className="inline-flex items-center text-[#E91E63] hover:text-[#D81B60] transition-colors text-sm font-medium">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Contact
          </Link>
        </div>

        {isSuccess ? (
          <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 max-w-2xl text-center mx-auto">
            <h2 className="text-2xl font-bold mb-2">Report Submitted Successfully</h2>
            <p>Thank you for bringing this to our attention. Our trust and safety team will investigate this matter immediately and reach out if further information is required.</p>
            <button onClick={() => window.location.href = '/'} className="mt-6 bg-[#E91E63] hover:bg-[#D81B60] text-white px-6 py-2 rounded-md font-medium">
              Go to Homepage
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            
            {/* Form Section */}
            <div className="flex-1 w-full max-w-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-md p-4 text-gray-700 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-all`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 pl-1">{errors.name}</p>}
                </div>

                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address" 
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-md p-4 text-gray-700 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-all`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 pl-1">{errors.email}</p>}
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
                    className={`w-full border ${errors.mobile ? 'border-red-500' : 'border-gray-200'} rounded-md p-4 text-gray-700 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-all`}
                  />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1 pl-1">{errors.mobile}</p>}
                </div>

                <div>
                  <input 
                    type="text" 
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Name of the person / organization against whom concern is being raised" 
                    className={`w-full border ${errors.organization ? 'border-red-500' : 'border-gray-200'} rounded-md p-4 text-gray-700 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-all`}
                  />
                  {errors.organization && <p className="text-red-500 text-xs mt-1 pl-1">{errors.organization}</p>}
                </div>

                <div>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City" 
                    className={`w-full border ${errors.city ? 'border-red-500' : 'border-gray-200'} rounded-md p-4 text-gray-700 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-all`}
                  />
                  {errors.city && <p className="text-red-500 text-xs mt-1 pl-1">{errors.city}</p>}
                </div>

                <div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message" 
                    rows={5}
                    className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-md p-4 text-gray-700 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-all resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 pl-1">{errors.message}</p>}
                </div>

                <div className="pt-2 max-w-xl">
                  <p className="text-gray-500 text-xs md:text-sm mb-6 leading-relaxed">
                    This reporting channel is used to provide an opportunity to report your concerns related to suspected fraud, corruption or other irregularities related to Woosh Queens. Please note that this channel should not be used to report other general queries or concerns.
                  </p>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-md font-medium disabled:opacity-50 transition-colors"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>

            {/* Disclaimer Sidebar */}
            <div className="w-full md:w-[320px] shrink-0 mt-4 md:mt-0">
              <div className="border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.06)] rounded-xl p-6 bg-white md:sticky md:top-24">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Disclaimer</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Please use this form only for reporting potential frauds. For order or other general queries{' '}
                  <a href="mailto:support@wooshride.in" className="text-[#FF7A7A] hover:text-red-400 transition-colors">contact us here</a>.
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default ReportFraud;
