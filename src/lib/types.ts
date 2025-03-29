export interface User {
    _id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
    image:string
    createdAt: string;
  }
  export type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    discount: number;
    originalPrice: number;
    logoImage: string;
    category: string;
    stock: number;
    features: string[];
    images: string[];
  };