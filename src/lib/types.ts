export interface SchoolCycle {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  highlights: string[];
  iconName: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  rating: number;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
