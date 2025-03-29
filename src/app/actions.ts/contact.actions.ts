"use server";
import { dbConnect } from "@/lib/dbConnect";
import { Contact } from "@/model/Contact";
interface ContactData {
  name: string;
  email: string;
  message: string;
  subject: string;
}
export const contactUs = async (data: ContactData) => {
  try {
    await dbConnect();
    console.log("Received Contact Data:", data);

    const contactModel = await Contact.create(data);
    console.log("After Creation", contactModel);
    return {
      success: true,
      message: "Contact data saved successfully",
      status: 200,
    };
  } catch (error: any) {
    console.error("Error in contactUs:", error);
    return { success: false, message: "Server Error", status: 500 };
  }
};
