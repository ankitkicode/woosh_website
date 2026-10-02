import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const QUERY_TYPES = [
  'Fare related',
  'Ride related',
  'Report a fraud',
  'Safety concern',
  'Payment or refund',
  'Child Mode',
  'Lost item',
  'App or account issue',
  'Feedback or suggestion',
  'Partnership or media',
  'Other'
];

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

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit number required';
    if (!formData.queryType) newErrors.queryType = 'Please select a query type';
    if (!formData.message.trim()) newErrors.message = 'Please describe your concern';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again.');
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
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Right side pink border accent like in the screenshot */}
            <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-[#E91E63] rounded-l-md" />

            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto" data-lenis-prevent="true">
              {isSuccess ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">Our team will get back to you shortly. Thank you for reaching out.</p>
                  <button onClick={handleReset} className="w-full bg-[#E91E63] text-white py-3.5 rounded-xl font-bold text-[15px] hover:bg-[#D81B60] transition-colors shadow-md">
                    Close
                  </button>
                </div>
              ) : (
                <>
                  {/* Header Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#E91E63] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      CONTACT US
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-2">Contact Team Woosh</h2>
                  <p className="text-gray-500 text-[15px] mb-6 leading-relaxed">Questions, feedback or a problem with a ride? Tell us and we'll get back to you.</p>

               

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">Full name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all placeholder:text-gray-400 bg-white`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">Phone number</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm font-semibold">
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
                          className={`flex-1 min-w-0 border ${errors.phone ? 'border-red-400' : 'border-gray-200'} rounded-r-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all placeholder:text-gray-400 bg-white`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Query Type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">Query type</label>
                      <div className="relative">
                        <select
                          name="queryType"
                          value={formData.queryType}
                          onChange={handleChange}
                          className={`w-full border ${errors.queryType ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all bg-white appearance-none ${!formData.queryType ? 'text-gray-400' : ''}`}
                        >
                          <option value="" disabled hidden>Select a query type</option>
                          {QUERY_TYPES.map(type => (
                            <option key={type} value={type} className="text-gray-800">{type}</option>
                          ))}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                      {errors.queryType && <p className="text-red-500 text-xs mt-1">{errors.queryType}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <div className="flex justify-between items-end mb-1.5">
                        <label className="block text-sm font-semibold text-gray-800">Your message</label>
                        <span className="text-[11px] font-medium text-gray-400">{formData.message.length}/500</span>
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        maxLength={500}
                        rows={4}
                        placeholder="Tell us how we can help."
                        className={`w-full border ${errors.message ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all placeholder:text-gray-400 resize-none bg-white`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#E91E63] hover:bg-[#D81B60] text-white py-3.5 rounded-xl font-bold text-[15px] disabled:opacity-60 transition-all shadow-[0_4px_14px_0_rgba(233,30,99,0.39)] flex items-center justify-center mt-2"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        'Send message'
                      )}
                    </button>
                  </form>

                  {/* Footer text */}
                  <p className="text-center text-xs text-gray-400 mt-5 leading-relaxed font-medium">
                    We'll only use these details to respond to you. See our <Link to="/privacy" className="text-[#E91E63] hover:underline" onClick={handleReset}>Privacy Policy</Link>
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
