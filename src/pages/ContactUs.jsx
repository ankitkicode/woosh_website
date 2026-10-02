import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactUs = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    queryType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const queryOptions = [
    "Fare related",
    "Ride related",
    "Report a fraud",
    "Safety concern",
    "Payment or refund",
    "Child Mode",
    "Lost item",
    "App or account issue",
    "Feedback or suggestion",
    "Partnership or media",
    "Other"
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit number required';
    if (!formData.queryType.trim()) newErrors.queryType = 'Please select a query type';
    if (!formData.message.trim()) newErrors.message = 'Please provide details';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({ name: '', phone: '', queryType: '', message: '' });
    setErrors({});
    if (onClose) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm font-sans"
          onClick={handleReset}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-[460px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-5 right-5 z-10 text-gray-400 hover:text-gray-600 transition-colors p-1 bg-gray-50 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto" data-lenis-prevent="true">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">Message Sent</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Thank you for reaching out to Team Woosh. We'll look into this and get back to you shortly.</p>
                  <button onClick={handleReset} className="w-full bg-[#E91E63] text-white py-3.5 rounded-xl font-bold text-[15px] hover:bg-[#D81B60] transition-colors shadow-md">
                    Done
                  </button>
                </div>
              ) : (
                <>
                  {/* Header Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#FFF0F5] text-[#E91E63] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      Contact Us
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-[1.65rem] font-extrabold text-[#1A1A2E] mb-2 tracking-tight">Contact Team Woosh</h2>
                  <p className="text-gray-500 text-[15px] mb-5 leading-relaxed pr-6">Questions, feedback or a problem with a ride? Tell us and we'll get back to you.</p>

                  {/* Emergency Banner */}
                  <div className="bg-[#FFF5F5] border border-red-100 rounded-xl p-3 mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                    <p className="text-[13px] text-red-700 font-medium">
                      Unsafe right now? Press <strong className="font-bold">SOS</strong> in the app or call <strong className="font-bold">112</strong>.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">Full name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3.5 text-[15px] text-[#1A1A2E] focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all placeholder:text-gray-400`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">Phone number</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-[15px] font-semibold">
                          +91
                        </span>
                        <input
                          type="text"
                          name="phone"
                          maxLength="10"
                          value={formData.phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '');
                            handleChange({ target: { name: 'phone', value: val } });
                          }}
                          placeholder="10-digit mobile number"
                          className={`flex-1 w-full border ${errors.phone ? 'border-red-400' : 'border-gray-200'} rounded-r-xl px-4 py-3.5 text-[15px] text-[#1A1A2E] focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all placeholder:text-gray-400`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Query Type Dropdown */}
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-800 mb-1.5">Query type</label>
                      <div className="relative">
                        <select
                          name="queryType"
                          value={formData.queryType}
                          onChange={handleChange}
                          className={`w-full border ${errors.queryType ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3.5 text-[15px] ${formData.queryType ? 'text-[#1A1A2E]' : 'text-gray-400'} focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all appearance-none bg-white`}
                        >
                          <option value="" disabled>Select a query type</option>
                          {queryOptions.map(option => (
                            <option key={option} value={option} className="text-[#1A1A2E]">{option}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                      {errors.queryType && <p className="text-red-500 text-xs mt-1">{errors.queryType}</p>}
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-[13px] font-semibold text-gray-800">Your message</label>
                        <span className="text-[11px] text-gray-400 font-medium">{formData.message.length}/500</span>
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => {
                          if (e.target.value.length <= 500) handleChange(e);
                        }}
                        rows={4}
                        placeholder="Tell us how we can help."
                        className={`w-full border ${errors.message ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3.5 text-[15px] text-[#1A1A2E] focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all resize-none placeholder:text-gray-400`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#E91E63] hover:bg-[#D81B60] text-white py-4 rounded-xl font-bold text-[15px] disabled:opacity-60 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                      >
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          'Send message'
                        )}
                      </button>
                    </div>
                  </form>

                  {/* Footer text */}
                  <p className="text-center text-[11px] text-gray-400 mt-5 leading-relaxed font-medium">
                    We'll only use these details to respond to you. See our{" "}
                    <Link to="/privacy" className="text-[#E91E63] hover:underline" onClick={handleReset}>Privacy Policy</Link>
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactUs;
