"use client";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

const SignOutButton = () => {
  return (
    <button onClick={() => signOut()} className="flex items-center gap-2 text-white hover:text-red-500 transition-all">
      <LogOut size={20} /> Sign Out
    </button>
  );
};

export default SignOutButton;