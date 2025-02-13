import React from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock, FaCheckCircle } from "react-icons/fa";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const UserRegistration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("User Registered:", data);
  };

  const password = watch("password");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5F4FF] px-4">
      <div className="w-full max-w-2xl flex shadow-lg rounded-lg overflow-hidden">
        <div className="w-2/3 bg-white p-8">
          <h2 className="text-2xl font-bold text-gray-900">Registration</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            {/* Username */}
            <div className="relative">
              <input
                {...register("username", { required: "Username is required" })}
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
              <FaUser className="absolute right-3 top-3 text-gray-500" />
              <p className="text-red-500 text-sm">{errors.username?.message}</p>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email address",
                  },
                })}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
              <FaEnvelope className="absolute right-3 top-3 text-gray-500" />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,15}$/,
                    message:
                      "Must have 1 uppercase, 1 lowercase, 1 number, 1 special character, and be 8-15 chars long",
                  },
                })}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
              <FaLock className="absolute right-3 top-3 text-gray-500" />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
              <FaCheckCircle className="absolute right-3 top-3 text-gray-500" />
              <p className="text-red-500 text-sm">
                {errors.confirmPassword?.message}
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#7494EC] hover:bg-blue-600 text-white py-2 rounded-md transition shadow-md font-medium"
            >
              Register
            </button>
          </form>

          <p className="text-gray-600 text-sm mt-4 text-center">
            Already have an account?{" "}
            <span className="text-[#7494EC] font-semibold hover:underline cursor-pointer">
              Sign in
            </span>
          </p>
        </div>

        <div className="w-1/3 bg-[#7494EC] flex flex-col items-center justify-center text-white p-6">
          <img src="/assets/Logo.png" alt="Logo" className="w-20 h-20 mb-4" />
          <h2 className="text-2xl font-bold">Welcome!</h2>
          <p className="text-sm text-center mt-2">
            Create an account and start your journey with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;