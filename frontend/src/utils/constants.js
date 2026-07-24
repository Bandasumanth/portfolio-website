// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
];

// Social Links
export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    url: 'https://github.com/Bandasumanth',
    icon: 'FaGithub',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/sumanth-manu',
    icon: 'FaLinkedin',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com',
    icon: 'FaTwitter',
  },
  {
    label: 'Email',
    url: 'mailto:your-email@gmail.com',
    icon: 'FaEnvelope',
  },
];

// Skills Data
export const SKILLS = {
  frontend: [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 94 },
    { name: 'JavaScript', level: 92 },
    { name: 'React.js', level: 95 },
    { name: 'Redux', level: 88 },
    { name: 'Context API', level: 90 },
    { name: 'React Router', level: 89 },
    { name: 'Tailwind CSS', level: 93 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Material UI', level: 86 },
  ],
  backend: [
    { name: 'Node.js', level: 88 },
    { name: 'Express.js', level: 87 },
    { name: 'REST API', level: 89 },
    { name: 'Authentication', level: 86 },
    { name: 'JWT', level: 85 },
  ],
  database: [
    { name: 'MySQL', level: 87 },
    { name: 'MongoDB', level: 82 },
  ],
  tools: [
    { name: 'Git', level: 92 },
    { name: 'GitHub', level: 91 },
    { name: 'VS Code', level: 94 },
    { name: 'Postman', level: 88 },
    { name: 'Vercel', level: 89 },
    { name: 'Netlify', level: 87 },
  ],
  learning: [
    { name: 'Python', level: 60 },
    { name: 'AI/ML', level: 65 },
    { name: 'LLMs', level: 70 },
  ],
};

// Experience Data
export const EXPERIENCE = [
  {
    id: 1,
    company: 'Glansa Solutions',
    position: 'Software Engineer',
    duration: '3+ Years (Jan 2021 - Present)',
    description: 'Developed scalable React applications, created reusable UI components, integrated REST APIs, and collaborated with cross-functional teams.',
    responsibilities: [
      'Developed scalable React applications',
      'Created reusable UI components',
      'Integrated REST APIs',
      'Optimized application performance',
      'Worked with Node.js backend',
      'Designed MySQL databases',
      'Implemented Authentication',
      'Collaborated using Git',
      'Participated in Agile Scrum',
      'Fixed production issues',
      'Improved user experience',
    ],
    skills: ['React', 'JavaScript', 'Node.js', 'Express', 'MySQL', 'Git', 'Agile'],
  },
];

// Projects Data
export const PROJECTS = [
  {
    id: 1,
    title: 'Hospital Management System',
    description: 'A comprehensive hospital appointment booking and patient management system with doctor scheduling and admin panel.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop',
    category: 'Full Stack',
    features: [
      'User Authentication',
      'Appointment Booking',
      'Patient Dashboard',
      'Admin Panel',
      'Doctor Management',
      'Responsive UI',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    links: {
      live: '#',
      github: 'https://github.com/Bandasumanth',
    },
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce website with product browsing, cart management, and payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
    category: 'Full Stack',
    features: [
      'Product Listing',
      'Shopping Cart',
      'Payment Gateway',
      'Order Tracking',
      'User Reviews',
      'Responsive Design',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Stripe', 'Redux'],
    links: {
      live: '#',
      github: 'https://github.com/Bandasumanth',
    },
  },
  {
    id: 3,
    title: 'Hostel Management System',
    description: 'A hostel management platform for managing rooms, students, fees, and occupancy.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    category: 'Full Stack',
    features: [
      'Room Allocation',
      'Student Management',
      'Fee Management',
      'Dashboard Analytics',
      'Reports Generation',
      'Notifications',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Charts.js'],
    links: {
      live: '#',
      github: 'https://github.com/Bandasumanth',
    },
  },
];

// Services Data
export const SERVICES = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Modern, responsive, and performant web applications using React.',
  },
  {
    id: 2,
    title: 'React Development',
    description: 'Custom React components and state management for scalable solutions.',
  },
  {
    id: 3,
    title: 'REST API Integration',
    description: 'Seamless integration of backend APIs with error handling.',
  },
  {
    id: 4,
    title: 'UI/UX Development',
    description: 'Beautiful, intuitive user interfaces that enhance experience.',
  },
  {
    id: 5,
    title: 'Responsive Design',
    description: 'Mobile-first design for all devices and screen sizes.',
  },
  {
    id: 6,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed and performance.',
  },
];

// Achievements Data
export const ACHIEVEMENTS = [
  { number: '3+', label: 'Years', suffix: 'Experience' },
  { number: '20+', label: 'Projects', suffix: 'Completed' },
  { number: '1000+', label: 'Commits', suffix: 'Git' },
  { number: '100%', label: 'Quality', suffix: 'Focus' },
];

// Contact Information
export const CONTACT_INFO = {
  email: 'your-email@gmail.com',
  phone: '+91-XXXXXXXXXX',
  location: 'Hyderabad, Telangana, India',
};
