export interface Program {
  id: string;
  title: string;
  targetAudience: string;
  age: string;
  description: string;
  features: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
  image?: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ScheduleItem {
  day: string;
  slots: {
    time: string;
    batch: string;
    level: string;
  }[];
}

export interface NavItem {
  label: string;
  id: string;
}