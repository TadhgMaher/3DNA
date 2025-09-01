export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  year: string;
  location: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  image: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
}

export interface ContactFormData {
  type: 'Partner' | 'Customer' | '';
  name: string;
  email: string;
  phone: string;
  message: string;
}