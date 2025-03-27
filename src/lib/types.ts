export interface User {
    _id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
    image:string
    createdAt: string;
  }