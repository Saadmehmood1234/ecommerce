"use server";
import { authOptions } from "../../auth";
import { getServerSession } from "next-auth";

import { revalidatePath } from "next/cache";
import { DarkUser } from "@/model/User";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/dbConnect";

export const signup = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    await dbConnect();
    console.log("My data", data);
    console.log("SAad Mehmood", data.email, data.name, data.password);
    if (!data.name || !data.email || !data.password) {
      return { success: false, message: "All fields are required" };
    }

    const { name, email, password } = data;
    console.log("User email:", email, "User name:", name);

    const existingUser = await DarkUser.findOne({ email });
    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    const profilePicture = `https://avatar.iran.liara.run/public/boy?username=${encodeURIComponent(
      name
    )}`;

    const hashedPassword = await bcrypt.hash(password, 10);
    await DarkUser.create({
      name,
      email,
      image: profilePicture,
      password: hashedPassword,
      profilePicture,
    });

    return { success: true, message: "Account created successfully" };
  } catch (error: any) {
    console.error("Signup error:", error);
    return { success: false, message: "Server error, please try again" };
  }
};



export async function updateProfile(data: { name: string; email: string }) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  // Here you would typically call your API or database to update the user
  // For demonstration, we'll just simulate an API call
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you would do something like:
    // const response = await fetch('/api/users/update', {
    //   method: 'PUT',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    // if (!response.ok) throw new Error('Update failed');

    revalidatePath("/profile");
    return { success: true, message: "Profile updated successfully" };
  } catch (error) {
    console.error("Update error:", error);
    return { success: false, message: "Failed to update profile" };
  }
}
