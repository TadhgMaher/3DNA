import { Project, Testimonial, Award } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Residential Complex',
    category: 'Residential',
    description: 'A contemporary 50-unit residential development featuring sustainable design principles and community-focused amenities.',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    year: '2024',
    location: 'Downtown District'
  },
  {
    id: '2',
    title: 'Corporate Headquarters',
    category: 'Commercial',
    description: 'A 12-story glass and steel office building designed for maximum natural light and energy efficiency.',
    images: [
      'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    year: '2023',
    location: 'Business District'
  },
  {
    id: '3',
    title: 'Cultural Arts Center',
    category: 'Cultural',
    description: 'A community arts center featuring exhibition spaces, performance halls, and artist studios.',
    images: [
      'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2034842/pexels-photo-2034842.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    year: '2023',
    location: 'Arts Quarter'
  },
  {
    id: '4',
    title: 'Sustainable Housing Project',
    category: 'Residential',
    description: 'An eco-friendly housing development with solar panels, rainwater harvesting, and green roofs.',
    images: [
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    year: '2024',
    location: 'Green Valley'
  },
  {
    id: '5',
    title: 'Innovation Hub',
    category: 'Commercial',
    description: 'A tech campus designed to foster collaboration and innovation with flexible workspace solutions.',
    images: [
      'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    year: '2024',
    location: 'Tech Park'
  },
  {
    id: '6',
    title: 'Historic Renovation',
    category: 'Restoration',
    description: 'Careful restoration of a 19th-century building while adding modern amenities and accessibility features.',
    images: [
      'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2034842/pexels-photo-2034842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    year: '2023',
    location: 'Historic District'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'Urban Development Corp',
    text: 'Working with 3DNA was an exceptional experience. Their attention to detail and innovative approach transformed our vision into reality.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'Green Living Solutions',
    text: 'The sustainable design solutions provided by 3DNA exceeded our expectations. Truly forward-thinking architecture.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    company: 'Cultural Foundation',
    text: 'Our arts center has become a landmark in the community. 3DNA perfectly balanced functionality with artistic vision.',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export const awards: Award[] = [
  {
    id: '1',
    title: 'Excellence in Sustainable Design',
    organization: 'Green Architecture Institute',
    year: '2024'
  },
  {
    id: '2',
    title: 'Innovation in Urban Planning',
    organization: 'National Architecture Association',
    year: '2023'
  },
  {
    id: '3',
    title: 'Community Impact Award',
    organization: 'City Planning Commission',
    year: '2023'
  },
  {
    id: '4',
    title: 'Emerging Architect of the Year',
    organization: 'Design Excellence Awards',
    year: '2022'
  }
];