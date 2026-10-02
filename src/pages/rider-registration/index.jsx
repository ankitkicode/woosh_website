import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RiderRegistration = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOtpStep, setIsOtpStep] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [cities, setCities] = useState([{ _id: 'bhopal', name: 'Bhopal' }]);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gender: 'Female',
    city: 'Bhopal',
    areas: '',
    age: ''
  });
  const [errors, setErrors] = useState({});

  React.useEffect(() => {
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

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit number required';
    if (!formData.age.trim() || isNaN(formData.age) || Number(formData.age) < 18) newErrors.age = 'Must be 18 or older';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${API_BASE}/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: formData.phone, role: 'rider' })
      });
      if (res.ok) {
        setIsOtpStep(true);
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

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp.trim() || otp.length < 4) {
      setOtpError('Please enter a valid OTP');
      return;
    }

    try {
      setLoading(true);
      setOtpError('');
      const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      // Step 1: Verify OTP
      const verifyRes = await fetch(`${API_BASE}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: formData.phone, otp, role: 'rider' })
      });
      const verifyData = await verifyRes.json();
      
      if (!verifyRes.ok) {
        setOtpError(verifyData?.message || 'Invalid OTP. Please try again.');
        setLoading(false);
        return;
      }

      // Extract token
      const token = verifyData?.data?.token || verifyData?.token;
      
      const authHeaders = {
        'Content-Type': 'application/json',
      };
      if (token) {
        authHeaders['Authorization'] = `Bearer ${token}`;
      }

      // Step 2: Update Profile
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

      setIsOtpStep(false);
      setIsSuccess(true);
      
    } catch (err) {
      console.error(err);
      setOtpError('Network error during verification. Please try again.');
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
    setIsOtpStep(false);
    setOtp('');
    setOtpError('');
    setFormData({ name: '', phone: '', gender: 'Female', city: cities[0]?.name || 'Bhopal', areas: '', age: '' });
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
              ) : isOtpStep ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#E91E63]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">Verify your number</h3>
                  <p className="text-gray-500 mb-6 text-[15px]">We've sent a code to +91 {formData.phone}</p>

                  <form onSubmit={handleVerifyOtp} className="space-y-5">
                    <div>
                      <input
                        type="text"
                        maxLength="6"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                        placeholder="Enter OTP"
                        className={`w-full text-center tracking-widest text-xl font-bold border ${otpError ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-4 text-gray-800 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all bg-gray-50`}
                      />
                      {otpError && <p className="text-red-500 text-xs mt-2 text-left">{otpError}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading || !otp}
                      className="w-full bg-[#E91E63] hover:bg-[#D81B60] text-white py-3.5 rounded-xl font-bold text-[15px] disabled:opacity-60 transition-all shadow-md flex items-center justify-center mt-2"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        'Verify & Complete Registration'
                      )}
                    </button>
                    
                    <button 
                      type="button" 
                      onClick={() => setIsOtpStep(false)}
                      className="text-gray-500 text-sm font-semibold hover:text-[#E91E63] transition-colors mt-6"
                    >
                      Change phone number
                    </button>
                  </form>
                </div>
              ) : (
                <>
                  {/* Header Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#FFF0F5] text-[#E91E63] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      👑 Queen Registration
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-1">Become a Woosh Queen</h2>
                  <p className="text-gray-500 text-[15px] mb-7">Takes under a minute. Our team will call you to complete your registration.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
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

                    {/* Areas */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">Which areas in {formData.city || 'your city'} can you cover?</label>
                      <input
                        type="text"
                        name="areas"
                        value={formData.areas}
                        onChange={handleChange}
                        placeholder="e.g. MP Nagar, Arera Colony, Kolar Road"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] transition-all placeholder:text-gray-400"
                      />
                    </div>

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

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
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
