import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Smartphone, User, X } from 'lucide-react';

const STEPS = [
  { id: 1, title: 'Phone Verification', icon: Smartphone },
  { id: 2, title: 'Personal Details', icon: User }
];

export const RiderRegistration = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  // Form State
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', dob: '' });
  
  if (!isOpen) return null;

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  
  const handleReset = () => {
    setCurrentStep(1);
    setPhone('');
    setOtp('');
    setOtpSent(false);
    setPersonalInfo({ name: '', email: '', dob: '' });
    if (onClose) onClose();
  };

  // --- API CALLS ---
  const API_BASE = import.meta.env.VITE_API_URL || '';

  const sendOTP = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: phone, role: 'rider' })
      });
      if (res.ok) setOtpSent(true);
      else alert('Failed to send OTP');
    } catch (err) {
      console.error(err);
      alert('Error sending OTP');
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: phone, otp, role: 'rider', deviceId: 'web-registration' })
      });
      const data = await res.json();
      if (res.ok && data.data?.accessToken) {
        setToken(data.data.accessToken);
        handleNext();
      } else {
        alert('Invalid OTP');
      }
    } catch (err) {
      console.error(err);
      alert('Error verifying OTP');
    } finally {
      setLoading(false);
    }
  };

  const submitPersonalInfo = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/rider/profile`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(personalInfo)
      });
      if (res.ok) handleNext();
      else alert('Failed to save profile');
    } catch (err) {
      console.error(err);
      alert('Error saving profile');
    } finally {
      setLoading(false);
    }
  };

  // --- STEP COMPONENTS ---
  const Step1Auth = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#2D2D2D]">Phone Verification</h2>
      <p className="text-gray-600">Enter your mobile number to get started.</p>
      
      {!otpSent ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-500 font-medium">
                +91
              </span>
              <input
                type="text"
                maxLength="10"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                className="flex-1 block w-full rounded-none rounded-r-xl border-gray-300 focus:border-[#E91E63] focus:ring-[#E91E63] text-lg p-3 border outline-none"
                placeholder="Enter 10 digit number"
              />
            </div>
          </div>
          <button
            onClick={sendOTP}
            disabled={phone.length !== 10 || loading}
            className="w-full bg-[#E91E63] hover:bg-[#D81B60] text-white py-3 rounded-xl font-semibold disabled:opacity-50 transition-colors"
          >
            {loading ? 'Sending...' : 'Send OTP'}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP sent to +91 {phone}</label>
            <input
              type="text"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              className="block w-full rounded-xl border-gray-300 focus:border-[#E91E63] focus:ring-[#E91E63] text-center text-2xl tracking-[0.5em] p-3 border outline-none"
              placeholder="••••••"
            />
          </div>
          <button
            onClick={verifyOTP}
            disabled={otp.length !== 6 || loading}
            className="w-full bg-[#E91E63] hover:bg-[#D81B60] text-white py-3 rounded-xl font-semibold disabled:opacity-50 transition-colors"
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
          <button onClick={() => setOtpSent(false)} className="w-full text-[#E91E63] text-sm font-medium hover:underline">
            Change mobile number
          </button>
        </div>
      )}
    </div>
  );

  const Step2PersonalInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#2D2D2D]">Personal Details</h2>
      <p className="text-gray-600">Tell us a bit about yourself. Note: Woosh is exclusively for women riders.</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name (As per Aadhaar)</label>
          <input
            type="text"
            value={personalInfo.name}
            onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
            className="block w-full rounded-xl border-gray-300 focus:border-[#E91E63] focus:ring-[#E91E63] p-3 border outline-none"
            placeholder="E.g. Priya Sharma"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            value={personalInfo.email}
            onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
            className="block w-full rounded-xl border-gray-300 focus:border-[#E91E63] focus:ring-[#E91E63] p-3 border outline-none"
            placeholder="priya@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
          <input
            type="date"
            value={personalInfo.dob}
            onChange={(e) => setPersonalInfo({...personalInfo, dob: e.target.value})}
            className="block w-full rounded-xl border-gray-300 focus:border-[#E91E63] focus:ring-[#E91E63] p-3 border outline-none"
          />
        </div>
        <button
          onClick={submitPersonalInfo}
          disabled={!personalInfo.name || !personalInfo.email || !personalInfo.dob || loading}
          className="w-full bg-[#E91E63] hover:bg-[#D81B60] text-white py-3 rounded-xl font-semibold disabled:opacity-50 transition-colors mt-6"
        >
          {loading ? 'Saving...' : 'Save & Continue'}
        </button>
      </div>
    </div>
  );

  const Step3Success = () => (
    <div className="text-center space-y-6 py-4">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-10 h-10 text-green-500" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-[#2D2D2D] mb-2">Basic Registration Complete!</h2>
        <p className="text-gray-600 text-lg">Thank you for starting your journey with Woosh Queens.</p>
      </div>
      <div className="bg-pink-50 rounded-xl p-6 text-left space-y-4 border border-pink-100">
        <p className="text-[#E91E63] font-semibold text-lg">Next Steps</p>
        <ul className="space-y-3 text-[15px] text-gray-700">
          <li className="flex gap-3">
            <span className="font-bold text-[#E91E63]">1.</span> 
            <span>Download the <span className="font-semibold">Woosh Captain</span> app from the Google Play Store.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-[#E91E63]">2.</span> 
            <span>Log in using your registered mobile number (+91 {phone}).</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-[#E91E63]">3.</span> 
            <span>Upload your KYC documents and vehicle details directly in the app to complete verification.</span>
          </li>
        </ul>
      </div>
      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://play.google.com/store/apps/details?id=com.woosh.ride" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
          Download App
        </a>
        <button onClick={handleReset} className="border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
          Close
        </button>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: return Step1Auth();
      case 2: return Step2PersonalInfo();
      case 3: return Step3Success();
      default: return Step1Auth();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm font-sans" onClick={handleReset}>
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#E91E63] px-6 py-5 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
              Captain Registration
            </h2>
          </div>
          <button 
            onClick={handleReset} 
            className="text-white/80 hover:text-white transition-colors bg-black/10 hover:bg-black/20 p-2 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row overflow-hidden flex-1">
          {/* Progress Sidebar */}
          <div className="w-full md:w-64 shrink-0 bg-gray-50 border-r border-gray-100 p-6 md:overflow-y-auto">
            <h3 className="font-bold text-gray-900 mb-6 hidden md:block">Registration Progress</h3>
            <div className="flex md:flex-col gap-6 overflow-x-auto pb-4 md:pb-0 hide-scrollbar items-center md:items-stretch">
              {STEPS.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;
                
                return (
                  <div key={step.id} className="flex items-center group shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-[#E91E63] text-white shadow-md' : 
                      isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-4 h-4" />}
                    </div>
                    <div className="ml-3 md:ml-4 flex-1">
                      <p className={`text-sm font-medium whitespace-nowrap ${isActive ? 'text-[#E91E63]' : isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                        {step.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-6 md:p-10 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="max-w-md mx-auto w-full"
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderRegistration;
