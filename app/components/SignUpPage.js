"use client"
import { useState } from "react";

const SignUpPage = () => {
    const [step, setStep] = useState(1); // Step 1: Phone, Step 2: OTP
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");

    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        // Simulate sending OTP to the phone
        console.log(`Sending OTP to: ${phone}`);
        setStep(2); // Go to OTP verification step
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        // Simulate OTP verification
        console.log(`Verifying OTP: ${otp}`);
        // Proceed to the next step (such as password creation, etc.)
        alert("OTP verified successfully!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6">
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Sign Up
                </h2>

                {/* Step 1: Phone number input */}
                {step === 1 && (
                    <form onSubmit={handlePhoneSubmit}>
                        <div className="mb-6">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                                required
                            />
                        </div>

                        <div className="flex justify-center mb-4">
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
                            >
                                Send OTP
                            </button>
                        </div>
                    </form>
                )}

                {/* Step 2: OTP input */}
                {step === 2 && (
                    <form onSubmit={handleOtpSubmit}>
                        <div className="mb-6">
                            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                                Enter OTP
                            </label>
                            <input
                                type="text"
                                id="otp"
                                placeholder="Enter the OTP sent to your phone"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                                required
                            />
                        </div>

                        <div className="flex justify-center mb-4">
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
                            >
                                Verify OTP
                            </button>
                        </div>
                    </form>
                )}

                {/* Back to Phone Input */}
                {step === 2 && (
                    <div className="text-center">
                        <p
                            onClick={() => setStep(1)}
                            className="text-sm text-gray-600 cursor-pointer hover:text-green-500"
                        >
                            Back to phone number
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignUpPage;
