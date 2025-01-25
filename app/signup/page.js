"use client"
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast"
import axiosInstance from "@/lib/axiosInstance";
import { useRouter } from 'next/navigation'

const SignUpPage = () => {
    const [step, setStep] = useState(1); // Step 1: Phone, Step 2: OTP
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [userId, setUserId] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [timer, setTimer] = useState(300); // 5 minutes in seconds
    const phoneRegex = /^[0-9]{10}$/;
    const otpRegex = /^[0-9]{6}$/;

    const { toast } = useToast()
    const router = useRouter()

    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        if (phoneRegex.test(phone)) {
            const sendOpt = async () => {
                try {
                    const response = await axiosInstance.post("/send-otp", { phone });
                    if (response.status === 200) {
                        setUserId(response.data.userId)
                        setStep(2)
                    }
                } catch (error) {
                    let errorMessage = error.response.data.message

                    toast({
                        title: errorMessage || "Invalid Phone Number",
                        description: errorMessage ? "" : "Please enter a valid 10-digit phone number.",
                        variant: "destructive",
                    });
                }
            };

            sendOpt();
        }
        else {
            toast({
                title: "Invalid Phone Number",
                description: "Please enter a valid 10-digit phone number.",
                variant: "destructive",
            });
        }
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (otpRegex.test(otp)) {
            const sendOpt = async () => {
                try {
                    const response = await axiosInstance.post("/verify-otp", {
                        phone,
                        otp,
                        userId,
                    });
                    if (response.status === 200) {
                        toast({
                            title: "OTP verified",
                            description: "Create your profile for login.",
                        });
                        setStep(3)
                    }
                } catch (error) {
                    toast({
                        title: "Invalid OTP",
                        description: "Please enter a valid 6-digit OTP.",
                        variant: "destructive",
                    });
                }
            };

            sendOpt();
        }
        else {
            toast({
                title: "Invalid OTP",
                description: "Please enter a valid 6-digit OTP.",
                variant: "destructive",
            });
        }
        setOtp('')
    };

    const handleCreateProfile = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/create-profile", {
                userName: username,
                password,
                userId,
            });
            if (response.status === 201) {
                toast({
                    title: "Sucessfully created profile",
                    description: "Login to access your account",
                });
                router.push('/login')
            }
        } catch (error) {
            let errorMessage = error.response.data.message
            toast({
                title: errorMessage || "Error while creating profile",
                description: errorMessage ? '' : "Please try again later.",
                variant: "destructive",
            });
        }
    };

    const handleResendOtp = async () => {
        try {
            const response = await axiosInstance.post("/send-otp", { phone });
            if (response.status === 200) {
                setTimer(300); // Reset the timer to 5 minutes
                toast({
                    title: "OTP Resent",
                    description: "A new OTP has been sent to your phone.",
                });
            }
        } catch (error) {
            toast({
                title: "Error Resending OTP",
                description: "Please try again later.",
                variant: "destructive",
            });
        }
    };

    useEffect(() => {
        if (step === 2 && timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            // Clear the interval when the component unmounts or when timer reaches 0
            return () => clearInterval(interval);
        } else if (timer === 0) {
            toast({
                title: "OTP Expired",
                description: "Please resend the OTP.",
                variant: "destructive",
            });
        }
    }, [timer, step]);


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60); // Calculate the number of whole minutes
        const secs = seconds % 60; // Calculate the remaining seconds
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`; // Format as MM:SS
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6">
            <Link href='/' className="absolute md:hidden top-3 left-4">
                <ArrowLeft size={23} strokeWidth={0.8} />
            </Link>
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    {step === 3 ? 'Create Profile' : 'Sign Up'}
                </h2>

                {/* Step 1: Phone number input */}
                {step === 1 && (
                    <form onSubmit={handlePhoneSubmit}>
                        <div className="mb-6">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <div className="flex items-center">
                                <div className="p-2 border rounded-md mr-2">+91</div>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    value={phone}
                                    maxLength={10}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mb-4">
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-2 rounded-lg"
                            >
                                Send OTP
                            </button>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                Already have account!
                                <Link href='/login'
                                    className="text-primary ml-2"
                                >
                                    Login
                                </Link>
                            </p>
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
                                placeholder="Enter the OTP sent to your phone"
                                value={otp}
                                maxLength={6}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                                required
                            />
                        </div>

                        <div className="flex justify-center mb-4">
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-2 rounded-lg"
                            >
                                Verify OTP
                            </button>
                        </div>

                        <div className="flex flex-col items-center text-center text-gray-500 font-medium">
                            <p>Otp will expire in: <span className="text-red-400">{formatTime(timer)}</span></p>
                            {timer === 0 && (
                                <p
                                    onClick={handleResendOtp}
                                    className="mt-2 text-primary cursor-pointer"
                                >
                                    Resend OTP
                                </p>
                            )}
                        </div>
                    </form>
                )}

                {step === 3 && (
                    <form onSubmit={handleCreateProfile}>
                        <div className="mb-6">
                            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="text"
                                placeholder="Enter password"
                                value={password}
                                minLength={6}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                                required
                            />
                        </div>

                        <div className="flex justify-center mb-4">
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-2 rounded-lg"
                            >
                                Done
                            </button>
                        </div>
                    </form>
                )}

                {/* Back to Phone Input */}
                {step === 2 && (
                    <div className="text-center pt-4">
                        <p
                            onClick={() => setStep(1)}
                            className="text-sm text-gray-600 cursor-pointer hover:text-primary"
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
