import { Achievement, NavItem, Program, ScheduleItem, Testimonial } from "./types";
import { Award, User, Clock, Calendar, Users, Shield } from "lucide-react";

export const CONTACT_INFO = {
  phone: "+919751961591",
  displayPhone: "+91 97519 61591",
  email: "ckntaekwondo2016@gmail.com",
  address: "4TH STOP, AVM COMPLEX, NO-B-19, Nehruji St, Thiru Nagar, Tamil Nadu 625006",
  locations: [
    {
      name: "Thirunagar (Main)",
      address: "4TH STOP, AVM COMPLEX, NO-B-19, Nehruji St, Thiru Nagar, Tamil Nadu 625006",
      mapUrl: "https://maps.google.com/maps?q=4TH+STOP,+AVM+COMPLEX,+NO-B-19,+Nehruji+St,+Thiru+Nagar,+Tamil+Nadu+625006&t=&z=15&ie=UTF8&iwloc=&output=embed"
    }
  ],
  mapsUrl: "https://maps.google.com/maps?q=4TH+STOP,+AVM+COMPLEX,+NO-B-19,+Nehruji+St,+Thiru+Nagar,+Tamil+Nadu+625006&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Coach", id: "coach" },
  { label: "Classes", id: "programs" },
  { label: "Appointment", id: "appointment" },
  { label: "Gallery", id: "gallery" },
  { label: "Events", id: "events" },
  { label: "Contact", id: "contact" },
];

export const PROGRAMS: Program[] = [
  {
    id: "kids",
    title: "Kids Taekwondo",
    targetAudience: "Children (5-12 Years)",
    age: "5-12 Years",
    description: "Focus on discipline, confidence, and physical fitness in a safe environment.",
    features: ["Discipline & Respect", "Physical Fitness", "Safe Training", "After-school Slots"],
  },
  {
    id: "adults",
    title: "Adult Fitness & Defense",
    targetAudience: "Adults & Professionals",
    age: "13+ Years",
    description: "Stress relief, fitness, and practical self-defense techniques for the real world.",
    features: ["Self-Defense", "Weight Management", "Stress Relief", "Flexible Timings"],
  },
  {
    id: "competition",
    title: "Competition Training",
    targetAudience: "Aspiring Athletes",
    age: "All Ages",
    description: "Intensive training for district, state, and international championships.",
    features: ["Sparring (Kyorugi)", "Poomse Training", "Advanced Techniques", "Medal Focus"],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "malaysia-2024",
    title: "Malaysia Championship 2024",
    description: "Gold Medal (V. Kedara - Poomse), Silver Medals (J. Varun Karthik & S. Sai Vikunth Baghuleyan).",
    date: "July 2024",
    highlight: true,
  },
  {
    id: "district-2024",
    title: "43rd District Awards",
    description: "Multiple winners at the District Awards & Championship.",
    date: "Jan 2024",
  },
  {
    id: "university",
    title: "NMS Sermathaivasan College",
    description: "Overall 2nd Place in University Tournament.",
    date: "2023",
  },
  {
    id: "school-gold",
    title: "School Games Gold",
    description: "S.K. Nithin (TVS School) secured Gold Medal.",
    date: "2023",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Priya S.",
    role: "Parent of 8-year-old",
    content: "Since joining Taekwondo Madurai, my son's focus has improved tremendously. The discipline Master Nagaraj instills is amazing.",
    rating: 5,
  },
  {
    id: "2",
    name: "Karthik R.",
    role: "Working Professional",
    content: "Great workout and stress buster after work. The self-defense techniques are practical and effective.",
    rating: 5,
  },
  {
    id: "3",
    name: "Lakshmi M.",
    role: "Competition Student",
    content: "The advanced training helped me win my first district medal. The coach is very dedicated.",
    rating: 5,
  },
];

export const SCHEDULE: ScheduleItem[] = [
  {
    day: "Monday - Friday",
    slots: [
      { time: "05:30 PM - 06:30 PM", batch: "Kids Batch 1", level: "Beginner/Inter" },
      { time: "06:30 PM - 07:30 PM", batch: "Kids Batch 2", level: "Intermediate" },
      { time: "07:30 PM - 08:30 PM", batch: "Adults/Teens", level: "All Levels" },
    ],
  },
  {
    day: "Saturday",
    slots: [
      { time: "05:00 PM - 07:00 PM", batch: "Sparring / Special Class", level: "Advanced" },
    ],
  },
  {
    day: "Sunday",
    slots: [
      { time: "07:00 AM - 09:00 AM", batch: "Fitness & Conditioning", level: "All Levels" },
    ],
  },
];

export const CORE_VALUES = [
  { icon: Shield, label: "Discipline" },
  { icon: Award, label: "Excellence" },
  { icon: User, label: "Respect" },
  { icon: Users, label: "Leadership" },
];

export const COURSES = [
  "Abroad Championship Training Course",
  "Self Defence for Kids",
  "Self Defence for Women",
  "Instructor Course Training",
  "Club Affiliation",
  "Black Belt Certificate Course (Kukkiwon)",
  "District, State, National Championship Course",
];

export const FAQS = [
  {
    question: "What are the class timings?",
    answer: "We offer flexible timings! Kids Batches (Mon-Fri) are 5:30 PM - 7:30 PM. Adults & Teens train 7:30 PM - 8:30 PM. We also have Weekend Special classes and Morning Fitness sessions on Sundays (7:00 AM - 9:00 AM).",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a free trial class for new students so you can experience our training before enrolling. Contact us to book your slot!",
  },
  {
    question: "Where is Taekwondo Madurai located?",
    answer: "We are at C-249, Kamarajar Street, Thirunagar, Madurai - 625 006. It's a prime location easy to find on Google Maps.",
  },
  {
    question: "Who is the head coach?",
    answer: "Our Master is Channa K. Nagaraj (International Referee & Black Belt). He is the General Secretary of the Taekwondo Sports Association of Madurai District and has trained Gold Medalists in the Malaysia Championship 2024.",
  },
  {
    question: "What is the starting age?",
    answer: "We start training from age 5! Our 'Kids Taekwondo' program (5-12 years) focuses on discipline and fitness, while we have separate advanced training for teens and adults.",
  },
  {
    question: "Is Taekwondo Madurai affiliated?",
    answer: "Absolutely. We are affiliated with the Taekwondo Association of Tamilnadu, India Taekwondo, and World Taekwondo. We provide authentic Black Belt certification (Kukkiwon).",
  },
  {
    question: "What courses do you offer?",
    answer: "Beyond regular classes, we offer specialized courses: Self Defence for Women, Instructor Course Training, Abroad Championship Training, and Black Belt Certificate Courses.",
  },
];