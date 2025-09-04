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
  location: string;
  text: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}