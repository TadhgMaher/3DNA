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
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Joseph',
    location: 'Co. Kilkenny',
    text: 'Dylan has produced an outstanding model of our home based on the planning application drawings. The model is of great quality and detail. The model captured some of the main design aspects of the project.'
  },
  {
    id: '2',
    name: 'Niamh',
    location: 'Co. Waterford',
    text: 'Best thing we got in the house was this amazing 3D Model of our home. Super work Dylan, has the pride of place in our living room. My model is one of my praised possessions. One of the nicest personalized items we own. We love showing it off pride of place on display in our new home.'
  },
  {
    id: '3',
    name: 'Bríd',
    location: 'Co. Cork',
    text: 'The quality of the product and attention to detail is exceptional. Dylan was extremely responsive and was very helpful making some changes not on the original drawing in to the design.'
  },
  {
    id: '4',
    name: 'Seán',
    location: 'Co. Dublin',
    text: 'We commissioned Dylan to create a 3D model of our extension plans and we were blown away by the result. The level of detail and accuracy helped us visualize exactly how our new space would look. Absolutely brilliant work.'
  },
  {
    id: '5',
    name: 'Emma',
    location: 'Co. Galway',
    text: 'Dylan created a stunning architectural model of our dream home design. The craftsmanship is incredible and it really brings the plans to life. We show it to everyone who visits - it is a true conversation piece and work of art.'
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