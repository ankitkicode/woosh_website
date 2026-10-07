import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RiderRegistration = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // OTP States
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  
  const [cities, setCities] = useState([{ _id: 'bhopal', name: 'Bhopal' }]);
  const [token, setToken] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gender: 'female',
    city: 'Bhopal',
    areas: [],
    age: ''
  });
  const [errors, setErrors] = useState({});
  const [isAreaDropdownOpen, setIsAreaDropdownOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const fetchCities = async () => {
        try {
          const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
          const res = await fetch(`${API_BASE}/cities`);
          const data = await res.json();
          if (data && data.success && Array.isArray(data.data) && data.data.length > 0) {
            setCities(data.data);
            setFormData(prev => ({ ...prev, city: data.data[0].name }));
          }
        } catch (err) {
          console.error("Failed to fetch cities", err);
        }
      };
      fetchCities();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleReset = () => {
    setIsSuccess(false);
    setIsOtpSent(false);
    setIsPhoneVerified(false);
    setOtp('');
    setOtpError('');
    setToken('');
    setFormData({ name: '', phone: '', gender: 'female', city: cities[0]?.name || 'Bhopal', areas: [], age: '' });
    setErrors({});
    if (onClose) onClose();
  };

  const handleSendOtp = async (e) => {
    e?.preventDefault();
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      setErrors({ phone: 'Valid 10-digit number required' });
      return;
    }

    try {
      setOtpLoading(true);
      const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${API_BASE}/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: formData.phone, role: 'rider' })
      });
      if (res.ok) {
        setIsOtpSent(true);
        setOtpError('');
        if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
      } else {
        setOtpError('Failed to send OTP');
      }
    } catch (err) {
      console.error(err);
      setOtpError('Network error');
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e?.preventDefault();
    if (!otp.trim() || otp.length < 4) {
      setOtpError('Enter a valid OTP');
      return;
    }

    try {
      setOtpLoading(true);
      setOtpError('');
      const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      const verifyRes = await fetch(`${API_BASE}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: formData.phone, otp, role: 'rider' })
      });
      const verifyData = await verifyRes.json();
      
      if (!verifyRes.ok) {
        setOtpError(verifyData?.message || 'Invalid OTP');
        setOtpLoading(false);
        return;
      }

      const receivedToken = verifyData?.data?.accessToken || verifyData?.accessToken;
      setToken(receivedToken);
      setIsPhoneVerified(true);
      setIsOtpSent(false); // hide OTP input since verified
      
    } catch (err) {
      console.error(err);
      setOtpError('Network error');
    } finally {
      setOtpLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!isPhoneVerified) newErrors.phone = 'Please verify your phone number first';
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.age.trim() || isNaN(formData.age) || Number(formData.age) < 18) newErrors.age = 'Must be 18 or older';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const authHeaders = {
        'Content-Type': 'application/json',
      };
      if (token) authHeaders['Authorization'] = `Bearer ${token}`;

      const profileEndpoint = `${API_BASE}/rider/profile`; 
      const profileRes = await fetch(profileEndpoint, {
        method: 'PUT',
        headers: authHeaders,
        body: JSON.stringify({
          name: formData.name,
          gender: formData.gender,
          city: formData.city,
          areas: formData.areas,
          age: Number(formData.age)
        })
      });

      if (profileRes.status === 404) {
         await fetch(`${API_BASE}/rider/profile`, {
           method: 'POST',
           headers: authHeaders,
           body: JSON.stringify({
             name: formData.name,
             gender: formData.gender,
             city: formData.city,
             areas: formData.areas,
             age: Number(formData.age)
           })
         });
      }

      setIsSuccess(true);
      
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
  
  const handleAreaToggle = (area) => {
    setFormData(prev => {
      const isSelected = prev.areas.includes(area);
      if (isSelected) {
        return { ...prev, areas: [] };
      } else {
        return { ...prev, areas: [area] };
      }
    });
    // Close dropdown automatically after selecting since it's single select
    setIsAreaDropdownOpen(false);
  };

  const selectedCityData = cities.find(c => c.name === formData.city);
  const availableAreas = selectedCityData?.areas || [];

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
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
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
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">Basic Registration Complete!</h3>
                  <p className="text-gray-600 mb-6">Thank you for starting your journey with Woosh Queens.</p>
                  
                  <div className="bg-pink-50 rounded-xl p-5 text-left mb-6">
                    <h4 className="font-bold text-[#E91E63] text-sm mb-3">Next Steps</h4>
                    <ol className="text-sm text-gray-700 space-y-3 list-decimal pl-4">
                      <li>Download the <strong>Woosh Captain</strong> app from the Google Play Store.</li>
                      <li>Log in using your registered mobile number (+91 {formData.phone}).</li>
                      <li>Upload your KYC documents and vehicle details directly in the app to complete verification.</li>
                    </ol>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a href="https://play.google.com/store/apps/details?id=com.woosh.ride" target="_blank" rel="noopener noreferrer" className="bg-[#1A1A2E] text-white py-3.5 rounded-xl font-bold text-[15px] text-center hover:bg-black transition-colors">
                      Download App
                    </a>
                    <button onClick={handleReset} className="text-gray-500 font-medium hover:text-gray-700 transition-colors py-2">
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#FFF0F5] text-[#E91E63] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      👑 Queen Registration
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-1">Become a Woosh Queen</h2>
                  <p className="text-gray-500 text-[15px] mb-7">Takes under a minute. Our team will call you to complete your registration.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1.5">Full name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="As on your driving licence"
                          className={`w-full border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all placeholder:text-gray-400`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1.5">Phone number</label>
                        <div className="flex shadow-sm rounded-xl">
                          <span className="inline-flex items-center px-3 sm:px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm font-semibold">
                            +91
                          </span>
                          <input
                            type="text"
                            name="phone"
                            maxLength="10"
                            disabled={isPhoneVerified}
                            value={formData.phone}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, '');
                              handleChange({ target: { name: 'phone', value: val } });
                              if (isOtpSent) setIsOtpSent(false);
                            }}
                            placeholder="10-digit mobile number"
                            className={`flex-1 min-w-0 border ${errors.phone ? 'border-red-400' : 'border-gray-200'} ${isPhoneVerified ? 'bg-gray-50' : 'border-r-0'} px-3 sm:px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all placeholder:text-gray-400`}
                          />
                          {isPhoneVerified ? (
                            <div className="flex items-center justify-center px-4 border border-l-0 border-gray-200 rounded-r-xl bg-green-50 text-green-600">
                              <CheckCircle2 className="w-5 h-5" />
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={handleSendOtp}
                              disabled={otpLoading || !formData.phone || formData.phone.length < 10}
                              className="px-4 bg-[#E91E63] hover:bg-[#D81B60] text-white font-semibold text-[13px] rounded-r-xl transition-colors whitespace-nowrap disabled:opacity-60"
                            >
                              {otpLoading && !isOtpSent ? '...' : isOtpSent ? 'Resend' : 'Send OTP'}
                            </button>
                          )}
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        
                        {/* Inline OTP Input */}
                        <AnimatePresence>
                          {isOtpSent && !isPhoneVerified && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0, marginTop: 0 }} 
                              animate={{ opacity: 1, height: 'auto', marginTop: 12 }} 
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="flex shadow-sm rounded-xl mt-1.5">
                                <input
                                  type="text"
                                  maxLength="6"
                                  value={otp}
                                  onChange={(e) => {
                                    setOtp(e.target.value.replace(/\D/g, ''));
                                    setOtpError('');
                                  }}
                                  placeholder="Enter 6-digit code"
                                  className={`flex-1 w-full border ${otpError ? 'border-red-400' : 'border-gray-200'} border-r-0 rounded-l-xl px-4 py-2.5 text-sm tracking-widest font-semibold text-gray-800 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all`}
                                />
                                <button
                                  type="button"
                                  onClick={handleVerifyOtp}
                                disabled={otpLoading || !otp || otp.length < 4}
                                className="px-6 bg-[#1A1A2E] hover:bg-black text-white font-semibold text-sm rounded-r-xl transition-colors whitespace-nowrap disabled:opacity-60"
                              >
                                {otpLoading ? '...' : 'Verify'}
                              </button>
                            </div>
                            {otpError && <p className="text-red-500 text-xs mt-1">{otpError}</p>}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Gender */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1.5">Gender</label>
                        <div className="relative">
                          <input
                            type="text"
                            value="Female"
                            disabled
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-800 bg-gray-50 cursor-not-allowed"
                          />
                          <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" /></svg>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Woosh Queens is a women-only rider community.</p>
                      </div>

                      {/* City */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1.5">City</label>
                        <div className="relative">
                          <select
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all bg-white appearance-none"
                          >
                            {cities.map((city) => (
                              <option key={city._id || city.name} value={city.name}>
                                {city.name}
                              </option>
                            ))}
                          </select>
                          <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Currently onboarding in {formData.city || 'selected cities'} only.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Age */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1.5">Age</label>
                        <input
                          type="text"
                          name="age"
                          value={formData.age}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '');
                            handleChange({ target: { name: 'age', value: val } });
                          }}
                          maxLength="2"
                          placeholder="Your age in years"
                          className={`w-full border ${errors.age ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all placeholder:text-gray-400`}
                        />
                        {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                      </div>

                      {/* Areas */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1.5">Covered Areas</label>
                        
                        <div className="relative">
                          <div
                            className={`w-full border ${availableAreas.length === 0 ? 'bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200' : 'bg-white cursor-pointer hover:border-[#E91E63] border-gray-200'} rounded-xl px-4 py-3 text-[15px] flex justify-between items-center transition-all`}
                            onClick={() => availableAreas.length > 0 && setIsAreaDropdownOpen(!isAreaDropdownOpen)}
                          >
                            <span className={`truncate pr-2 ${availableAreas.length === 0 ? 'text-gray-400' : 'text-gray-700 font-medium'}`}>
                              {availableAreas.length === 0 
                                ? 'No areas configured' 
                                : formData.areas.length > 0 
                                  ? formData.areas.join(', ') 
                                  : 'Select areas'}
                            </span>
                            <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
                          </div>
                          
                          <AnimatePresence>
                            {isAreaDropdownOpen && availableAreas.length > 0 && (
                              <motion.div 
                                initial={{ opacity: 0, y: -5 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-50 top-full mt-1 left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-xl max-h-[160px] overflow-y-auto"
                              >
                                {availableAreas.map(area => {
                                  const isSelected = formData.areas.includes(area);
                                  return (
                                    <label key={area} className="flex items-center px-4 py-2.5 hover:bg-pink-50 cursor-pointer transition-colors border-b border-gray-50 last:border-0">
                                      <input 
                                        type="radio"
                                        name="selected_area"
                                        checked={isSelected}
                                        onChange={() => handleAreaToggle(area)}
                                        className="mr-3 w-4 h-4 text-[#E91E63] border-gray-300 focus:ring-[#E91E63]"
                                      />
                                      <span className={`text-sm ${isSelected ? 'font-semibold text-[#E91E63]' : 'text-gray-700'}`}>{area}</span>
                                    </label>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading || !isPhoneVerified}
                      className="w-full bg-[#E91E63] hover:bg-[#D81B60] text-white py-3.5 rounded-xl font-bold text-[15px] disabled:opacity-60 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        'Register as a Queen'
                      )}
                    </button>
                  </form>

                  {/* Footer text */}
                  <p className="text-center text-xs text-gray-400 mt-5 leading-relaxed">
                    By registering, you agree to be contacted by Woosh about riding.{" "}
                    See our <Link to="/privacy" className="text-[#E91E63] font-medium hover:underline" onClick={handleReset}>Privacy Policy</Link>.
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

export default RiderRegistration;
