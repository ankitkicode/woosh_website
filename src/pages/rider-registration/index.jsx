import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, UploadCloud, ShieldCheck, Smartphone, User, FileText, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const STEPS = [
  { id: 1, title: 'Phone Verification', icon: Smartphone },
  { id: 2, title: 'Personal Details', icon: User },
  { id: 3, title: 'Upload Documents', icon: FileText },
  { id: 4, title: 'Vehicle & Selfie', icon: Camera },
  { id: 5, title: 'Safety Checklist', icon: ShieldCheck }
];

export const RiderRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  // Form State
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', dob: '' });
  const [vehicleNumber, setVehicleNumber] = useState('');
  
  const [documents, setDocuments] = useState({
    aadhaar: null,
    pan: null,
    driving_license: null,
    rc_book: null,
    vehicle_insurance: null,
    puc: null,
    police_verification: null,
    selfie_verification: null
  });

  const [checklist, setChecklist] = useState({
    hasHelmet: false,
    hasRaincoat: false,
    hasFirstAid: false,
    hasPhoneMount: false
  });

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 6));
  const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleFileChange = (e, docType) => {
    if (e.target.files && e.target.files[0]) {
      setDocuments(prev => ({ ...prev, [docType]: e.target.files[0] }));
    }
  };

  // --- API CALLS ---
  const API_BASE = import.meta.env.VITE_API_URL;

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

  const submitDocumentsAndSelfie = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('vehicleNumber', vehicleNumber);
      
      Object.keys(documents).forEach(key => {
        if (documents[key]) {
          formData.append(key, documents[key]);
        }
      });

      const res = await fetch(`${API_BASE}/rider/kyc`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      
      if (res.ok) handleNext();
      else alert('Failed to upload documents. Please ensure all required documents are selected.');
    } catch (err) {
      console.error(err);
      alert('Error uploading documents');
    } finally {
      setLoading(false);
    }
  };

  const submitChecklist = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/rider/safety-checklist`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(checklist)
      });
      if (res.ok) handleNext();
      else alert('Failed to submit checklist');
    } catch (err) {
      console.error(err);
      alert('Error submitting checklist');
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

  const DocumentUploadBox = ({ label, type, required = true }) => (
    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-[#E91E63] transition-colors relative bg-gray-50 flex flex-col items-center justify-center min-h-[120px]">
      <input
        type="file"
        accept=".jpg,.jpeg,.png,.pdf,.webp,.heic,.heif"
        onChange={(e) => handleFileChange(e, type)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
        {documents[type] ? (
          <>
            <CheckCircle2 className="w-8 h-8 text-green-500" />
            <span className="text-sm font-medium text-green-700 truncate w-full px-2 max-w-[150px]">{documents[type].name}</span>
          </>
        ) : (
          <>
            <UploadCloud className="w-8 h-8 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">{label} {required && <span className="text-red-500">*</span>}</span>
            <span className="text-xs text-gray-500">Tap to upload</span>
          </>
        )}
      </div>
    </div>
  );

  const Step3Documents = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#2D2D2D]">Upload Documents</h2>
      <p className="text-gray-600">Please upload clear photos or PDFs of your original documents.</p>
      
      <div className="grid grid-cols-2 gap-4">
        {DocumentUploadBox({ label: "Aadhaar Card", type: "aadhaar" })}
        {DocumentUploadBox({ label: "PAN Card", type: "pan" })}
        {DocumentUploadBox({ label: "Driving License", type: "driving_license" })}
        {DocumentUploadBox({ label: "RC Book", type: "rc_book" })}
        {DocumentUploadBox({ label: "Vehicle Insurance", type: "vehicle_insurance" })}
        {DocumentUploadBox({ label: "PUC Certificate", type: "puc" })}
        <div className="col-span-2">
          {DocumentUploadBox({ label: "Police Verification (Optional)", type: "police_verification", required: false })}
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button onClick={handleBack} className="w-1/3 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200">Back</button>
        <button
          onClick={handleNext}
          disabled={!documents.aadhaar || !documents.pan || !documents.driving_license || !documents.rc_book}
          className="w-2/3 bg-[#E91E63] hover:bg-[#D81B60] text-white py-3 rounded-xl font-semibold disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const Step4VehicleSelfie = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#2D2D2D]">Vehicle & Selfie</h2>
      <p className="text-gray-600">Enter your vehicle number and upload a clear selfie.</p>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Registration Number</label>
          <input
            type="text"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
            className="block w-full rounded-xl border-gray-300 focus:border-[#E91E63] focus:ring-[#E91E63] p-3 border font-bold tracking-widest uppercase outline-none"
            placeholder="DL 01 AB 1234"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Selfie Verification</label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#E91E63] transition-colors relative bg-gray-50 flex flex-col items-center justify-center">
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp,.heic,.heif"
              capture="user"
              onChange={(e) => handleFileChange(e, 'selfie_verification')}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center space-y-3 pointer-events-none">
              {documents.selfie_verification ? (
                <>
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                  <span className="text-sm font-medium text-green-700">Selfie Uploaded!</span>
                </>
              ) : (
                <>
                  <Camera className="w-12 h-12 text-gray-400" />
                  <span className="text-base font-medium text-gray-700">Take a Selfie</span>
                  <span className="text-sm text-gray-500">Ensure good lighting and no sunglasses</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button onClick={handleBack} className="w-1/3 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200">Back</button>
          <button
            onClick={submitDocumentsAndSelfie}
            disabled={!vehicleNumber || !documents.selfie_verification || loading}
            className="w-2/3 bg-[#E91E63] hover:bg-[#D81B60] text-white py-3 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading ? 'Uploading...' : 'Submit KYC'}
          </button>
        </div>
      </div>
    </div>
  );

  const Step5Checklist = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#2D2D2D]">Safety Checklist</h2>
      <p className="text-gray-600">Woosh prioritizes safety. Please confirm you have the following gear.</p>
      
      <div className="space-y-4">
        {[
          { id: 'hasHelmet', label: 'I have 2 ISI Certified Helmets (Rider & Pillion)' },
          { id: 'hasRaincoat', label: 'I have a Raincoat available for passengers' },
          { id: 'hasFirstAid', label: 'I have a basic First Aid kit in my vehicle' },
          { id: 'hasPhoneMount', label: 'I have a phone mount installed for safe navigation' }
        ].map((item) => (
          <label key={item.id} className="flex items-start p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                checked={checklist[item.id]}
                onChange={(e) => setChecklist({...checklist, [item.id]: e.target.checked})}
                className="w-5 h-5 text-[#E91E63] rounded border-gray-300 focus:ring-[#E91E63]"
              />
            </div>
            <div className="ml-3 text-sm font-medium text-gray-700">{item.label}</div>
          </label>
        ))}
      </div>

      <button
        onClick={submitChecklist}
        disabled={loading}
        className="w-full bg-[#E91E63] hover:bg-[#D81B60] text-white py-3 rounded-xl font-semibold disabled:opacity-50 transition-colors mt-6"
      >
        {loading ? 'Submitting...' : 'Complete Registration'}
      </button>
    </div>
  );

  const Step6Success = () => (
    <div className="text-center space-y-6 py-8">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-10 h-10 text-green-500" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-[#2D2D2D] mb-2">Application Submitted!</h2>
        <p className="text-gray-600 text-lg">Thank you for registering with Woosh Queens.</p>
      </div>
      <div className="bg-pink-50 rounded-xl p-6 text-left space-y-4">
        <p className="text-[#E91E63] font-semibold">What happens next?</p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-3"><span className="font-bold">1.</span> Our team will verify your KYC documents within 24-48 hours.</li>
          <li className="flex gap-3"><span className="font-bold">2.</span> You will receive an SMS and WhatsApp notification once approved.</li>
          <li className="flex gap-3"><span className="font-bold">3.</span> Download the Woosh Rider app from Play Store to start earning!</li>
        </ul>
      </div>
      <div className="pt-4">
        <a href="https://play.google.com/store/apps/details?id=com.woosh.ride" className="inline-block bg-[#E91E63] hover:bg-[#D81B60] text-white px-8 py-3 rounded-full font-bold">
          Download Rider App
        </a>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: return Step1Auth();
      case 2: return Step2PersonalInfo();
      case 3: return Step3Documents();
      case 4: return Step4VehicleSelfie();
      case 5: return Step5Checklist();
      case 6: return Step6Success();
      default: return Step1Auth();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Simple Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Woosh Queens" className="h-8 object-contain drop-shadow-sm" />
          </Link>
          <span className="font-semibold text-[#E91E63] bg-pink-50 px-4 py-1.5 rounded-full text-sm">Rider Registration</span>
        </div>
      </header>

      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Progress Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm md:sticky md:top-24">
            <h3 className="font-bold text-gray-900 mb-4 md:mb-6 hidden md:block">Registration Progress</h3>
            <div className="flex md:flex-col gap-4 overflow-x-auto pb-2 md:pb-0 hide-scrollbar items-center md:items-stretch">
              {STEPS.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;
                
                return (
                  <div key={step.id} className="flex items-center group shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-[#E91E63] text-white shadow-md' : 
                      isCompleted ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-4 h-4" />}
                    </div>
                    <div className="ml-3 md:ml-4 flex-1">
                      <p className={`text-xs md:text-sm font-medium whitespace-nowrap ${isActive ? 'text-[#E91E63]' : isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                        {step.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 max-w-xl mx-auto w-full">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
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
