import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RiderSupport = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    query: ''
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit number required';
    if (!formData.query.trim()) newErrors.query = 'Please describe your concern';
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
    setFormData({ name: '', phone: '', query: '' });
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
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors p-1"
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
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">Request Sent!</h3>
                  <p className="text-gray-600 mb-6">Our rider support team will call you back shortly. Thank you for reaching out.</p>
                  <button onClick={handleReset} className="bg-[#E91E63] text-white py-3 px-8 rounded-xl font-semibold hover:bg-[#D81B60] transition-colors">
                    Close
                  </button>
                </div>
              ) : (
                <>
                  {/* Header Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#FFF0F5] text-[#E91E63] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      🛡️ Rider Support
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-1">How can we help, Queen?</h2>
                  <p className="text-gray-500 text-[15px] mb-5">Payouts, documents, the app or anything else. Tell us and our rider team will call you back.</p>

                  {/* Emergency Banner */}
                  <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <div className="w-5 h-5 shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </div>
                    <p className="text-sm text-red-700 font-medium leading-relaxed">
                      In an emergency, press <strong>SOS</strong> in the app or call <strong>112</strong>. Don't wait for a callback.
                    </p>
                  </div>

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
                        className={`w-full border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all placeholder:text-gray-400`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Registered Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">Registered phone number</label>
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
                          className={`flex-1 w-full border ${errors.phone ? 'border-red-400' : 'border-gray-200'} rounded-r-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all placeholder:text-gray-400`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Query */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-sm font-semibold text-gray-800">Your query or concern</label>
                        <span className="text-xs text-gray-400">{formData.query.length}/500</span>
                      </div>
                      <textarea
                        name="query"
                        value={formData.query}
                        onChange={(e) => {
                          if (e.target.value.length <= 500) handleChange(e);
                        }}
                        rows={4}
                        placeholder="e.g. My last payout hasn't arrived, or I need help updating my documents"
                        className={`w-full border ${errors.query ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all resize-none placeholder:text-gray-400`}
                      />
                      {errors.query && <p className="text-red-500 text-xs mt-1">{errors.query}</p>}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#E91E63] hover:bg-[#D81B60] text-white py-3.5 rounded-xl font-bold text-[15px] disabled:opacity-60 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        'Send to rider support'
                      )}
                    </button>
                  </form>

                  {/* Footer text */}
                  <p className="text-center text-xs text-gray-400 mt-5 leading-relaxed">
                    We'll only use these details to resolve your request. See our{" "}
                    <Link to="/privacy" className="text-[#E91E63] font-medium hover:underline" onClick={handleReset}>Privacy Policy</Link>.
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

export default RiderSupport;
