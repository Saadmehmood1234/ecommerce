"use client";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { User, Mail, Lock } from "lucide-react"; // ✅ Fixed missing Lock import
import { FaGoogle } from "react-icons/fa";
import { signup } from "../../actions/signup.actions";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function SignUpPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("SignUp", values);
    const res = await signup(values);

    if (!res.success) {
      toast.error(res.message || "Error in SignUp");
      return;
    }
    toast.success("SignUp Successfully");
    reset();
    router.push("/");
  };

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
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#A92EDF] to-[#A92EDF] bg-clip-text text-transparent">
                Create Account
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
                <Input
                  label="Full Name"
                  icon={<User className="h-5 w-5 text-[#A92EDF]" />}
                  {...register("name")}
                  error={errors.name ? { message: errors.name.message } : undefined}
                />

                <Input
                  label="Email"
                  icon={<Mail className="h-5 w-5 text-[#A92EDF]" />}
                  {...register("email")}
                  error={errors.email ? { message: errors.email.message } : undefined}
                />

                <Input
                  label="Password"
                  type="password"
                  icon={<Lock className="h-5 w-5 text-[#A92EDF]" />}
                  {...register("password")}
                  error={errors.password ? { message: errors.password.message } : undefined}
                />

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    className="w-full bg-[#A92EDF] hover:bg-[#8e5ea3] text-white font-semibold py-4 rounded-xl transition-all"
                  >
                    Sign Up
                  </Button>
                </motion.div>
              </form>

              <div className="w-full flex items-center space-x-4">
                <div className="flex-1 h-px bg-[#A92EDF]/20" />
                <span className="text-gray-400 text-sm">OR</span>
                <div className="flex-1 h-px bg-[#A92EDF]/20" />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full flex items-center justify-center space-x-2 bg-[#0C1B44] border-2 border-[#A92EDF]/20 text-white py-4 rounded-xl transition-all"
              >
                <FaGoogle className="text-xl" />
                <span>Google</span>
              </motion.button>

              <p className="text-gray-400 text-center">
                Already have an account?{" "}
                <button
                  onClick={() => router.push("/auth/signin")} 
                  className="text-[#A92EDF] hover:text-[#c645ff] cursor-pointer transition-colors"
                >
                  Sign In
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
