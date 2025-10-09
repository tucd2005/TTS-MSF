export interface User {
    id: number;
    email: string;
    password?: string;
  
    fullname?: string;
    phone?: string;
    dob?: string;
    school?: string;
    role?: 'teacher' | 'student'; // dùng literal type
    created_at?: string;
    updated_at?: string;
  }
  