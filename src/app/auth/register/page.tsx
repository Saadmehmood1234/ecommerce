"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <section className="flex w-full justify-center items-center py-20 bg-gradient-to-tr from-[#0E091C] via-[#1F133D] to-[#0B1027] min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col items-center px-8 sm:px-6 lg:px-8"
      >
        <div className="relative w-full max-w-md">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-tr from-[#500150] via-[#42026d] to-[#031877] rounded-full blur-3xl opacity-30" />
          <motion.div
            className="bg-[#0C1B44]/90 backdrop-blur-sm border-2 border-[#A92EDF]/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-[#500150] via-[#42026d] to-[#031877] rounded-full blur-2xl opacity-20" />

            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#A92EDF] to-purple-500 bg-clip-text text-transparent">
                {isSignIn ? "Welcome Back" : "Create Account"}
              </h2>

              <form className="w-full space-y-6">
                {!isSignIn && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-4 bg-[#0C1B44] border-2 border-[#A92EDF]/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#A92EDF] transition-all"
                    />
                  </motion.div>
                )}

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 bg-[#0C1B44] border-2 border-[#A92EDF]/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#A92EDF] transition-all"
                  />
                </div>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-4 bg-[#0C1B44] border-2 border-[#A92EDF]/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#A92EDF] transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#A92EDF] hover:bg-[#8e5ea3] text-white font-semibold py-4 rounded-xl transition-all"
                >
                  {isSignIn ? "Sign In" : "Sign Up"}
                </motion.button>
              </form>

              <div className="w-full flex items-center space-x-4">
                <div className="flex-1 h-px bg-[#A92EDF]/20" />
                <span className="text-gray-400 text-sm">OR</span>
                <div className="flex-1 h-px bg-[#A92EDF]/20" />
              </div>

              <div className="flex space-x-4 w-full">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full flex items-center justify-center space-x-2 bg-[#0C1B44] border-2 border-[#A92EDF]/20 text-white py-4 rounded-xl transition-all"
                >
                  <FaGoogle className="text-xl" />
                  <span>Google</span>
                </motion.button>
              </div>

              <p className="text-gray-400 text-center">
                {isSignIn
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <button
                  onClick={() => setIsSignIn(!isSignIn)}
                  className="text-[#A92EDF] hover:text-[#c645ff] cursor-pointer transition-colors"
                >
                  {isSignIn ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AuthPage;
