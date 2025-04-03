"use client";

import { User } from "next-auth";
import { useState } from "react";
import { updateProfile } from "@/app/actions/signup.actions";
import { motion } from "framer-motion";

interface UserProfileProps {
  user: User;
}

export default function UserProfile({ user }: UserProfileProps) {
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    image: user.image || "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormData(prev => ({ ...prev, image: event.target!.result as string }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updateProfile(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full justify-center items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-[#0C1B44] rounded-3xl px-8 py-12 shadow-xl hover:shadow-2xl transition-shadow border-2 border-[#A92EDF]"
      >
        <div className="flex flex-col items-center">
          <motion.div 
            className="relative -mt-24 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="rounded-full w-40 h-40 bg-gradient-to-tr from-[#500150] via-[#42026d] to-[#031877] border-8 border-blue-100 shadow-lg overflow-hidden">
              {formData.image ? (
                <img
                  src={formData.image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold bg-indigo-800">
                  {user.name?.charAt(0).toUpperCase() || "U"}
                </div>
              )}
            </div>
            {isEditing && (
              <motion.label
                className="absolute bottom-0 right-0 bg-[#A92EDF] text-white p-2 rounded-full cursor-pointer shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </motion.label>
            )}
          </motion.div>

          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            {isEditing ? "Edit Profile" : "Your Profile"}
          </h2>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="w-full space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#1A2C5F] text-white rounded-lg px-4 py-3 border border-[#A92EDF] focus:ring-2 focus:ring-[#A92EDF] focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#1A2C5F] text-white rounded-lg px-4 py-3 border border-[#A92EDF] focus:ring-2 focus:ring-[#A92EDF] focus:outline-none cursor-not-allowed"
                    required
                    disabled
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 pt-4">
                <motion.button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 border border-[#A92EDF] rounded-full text-sm font-medium text-white bg-transparent hover:bg-[#A92EDF]/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
                <motion.button  
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#A92EDF] to-[#A92EDF] hover:from-[#A92EDF]/90 hover:to-[#A92EDF]/90"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </span>
                  ) : "Save Changes"}
                </motion.button>
              </div>
            </form>
          ) : (
            <div className="w-full space-y-6">
              <div className="space-y-4">
                <div className="py-3 border-b border-[#1A2C5F]">
                  <dt className="text-sm font-medium text-gray-400">Name</dt>
                  <dd className="mt-1 text-lg text-white">{user.name}</dd>
                </div>
                <div className="py-3 border-b border-[#1A2C5F]">
                  <dt className="text-sm font-medium text-gray-400">Email</dt>
                  <dd className="mt-1 text-lg text-white">{user.email}</dd>
                </div>
              </div>
              
              <div className="flex justify-center pt-6">
                <motion.button
                  onClick={() => setIsEditing(true)}
                  className="px-8 py-3 rounded-full text-lg font-medium text-white bg-gradient-to-r from-[#A92EDF] to-[#A92EDF] hover:from-[#A92EDF]/90 hover:to-[#A92EDF]/90"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Edit Profile
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}