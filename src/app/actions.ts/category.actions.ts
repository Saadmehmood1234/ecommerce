"use server"
import { dbConnect } from "@/lib/dbConnect";
import { Category } from "@/model/Category";

export const getCategory = async () => {
  try {
    await dbConnect();
    const categoryData = await Category.find();
    if (!categoryData) {
      return {
        success: false,
        message: "No Data available in category",
        status: 400,
      };
    }
    return {
      sucess: true,
      message: "Category Fetched Successfully",
      data: categoryData.map((category) => ({
        title: category.title,
        logoImage: category.logoImage,
      })),
      status: 200,
    };
  } catch (error: any) {
    return {
      success: false,
      message: "Server error in getting the Category",
      status: 500,
    };
  }
};
