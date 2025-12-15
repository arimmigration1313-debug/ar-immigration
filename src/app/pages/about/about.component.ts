import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
missions = [
  {
    title: "Our Mission",
    delay: 0,
    icon: "fas fa-bullseye",
    bgColor: "linear-gradient(135deg, var(--primary-color), var(--primary-light))",
    description:
      "To provide comprehensive, ethical, and personalized immigration services that empower our clients to achieve their global aspirations with confidence and peace of mind."
  },
  {
    title: "Our Vision",
    delay: 100,
    icon: "fas fa-eye",
    bgColor: "linear-gradient(135deg, var(--secondary-color), var(--secondary-light))",
    description:
      "To be the world's most trusted immigration consultancy, recognized for our expertise, integrity, and commitment to client success across all immigration pathways."
  },
  {
    title: "Our Values",
    delay: 200,
    icon: "fas fa-heart",
    bgColor: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
    description:
      "Integrity, Excellence, Transparency, Client-Centricity, and Innovation. These core values guide every decision we make and every service we provide."
  }
]

teamMembers = [
  {
    name: "Michael Chen",
    img: "https://i.pravatar.cc/200?img=12",
    delay: 0,
    role: "CEO & Lead Consultant",
    description: "Certified RCIC, 15+ years experience"
  },
  {
    name: "Sarah Williams",
    img: "https://i.pravatar.cc/200?img=5",
    delay: 100,
    role: "Senior Immigration Lawyer",
    description: "Specialized in Canadian Immigration"
  },
  {
    name: "David Kumar",
    img: "https://i.pravatar.cc/200?img=33",
    delay: 200,
    role: "Australian Visa Specialist",
    description: "MARA Registered Agent"
  },
  {
    name: "Emily Brown",
    img: "https://i.pravatar.cc/200?img=47",
    delay: 300,
    role: "UK & Europe Expert",
    description: "OISC Level 3 Advisor"
  },
  {
    name: "James Anderson",
    img: "https://i.pravatar.cc/200?img=68",
    delay: 0,
    role: "Student Visa Coordinator",
    description: "10+ years in education sector"
  },
  {
    name: "Priya Sharma",
    img: "https://i.pravatar.cc/200?img=20",
    delay: 100,
    role: "Documentation Specialist",
    description: "Expert in visa documentation"
  },
  {
    name: "Robert Lee",
    img: "https://i.pravatar.cc/200?img=60",
    delay: 200,
    role: "PR Application Manager",
    description: "Permanent Residence specialist"
  },
  {
    name: "Lisa Thompson",
    img: "https://i.pravatar.cc/200?img=9",
    delay: 300,
    role: "Client Relations Manager",
    description: "Dedicated to client satisfaction"
  }
];


accreditations = [
  {
    title: "RCIC Certified",
    delay: 0,
    icon: "fas fa-certificate",
    color: "var(--primary-color)",
    description: "Regulated Canadian Immigration Consultant"
  },
  {
    title: "MARA Registered",
    delay: 100,
    icon: "fas fa-stamp",
    color: "var(--secondary-color)",
    description: "Migration Agents Registration Authority"
  },
  {
    title: "OISC Level 3",
    delay: 200,
    icon: "fas fa-shield-alt",
    color: "var(--primary-color)",
    description: "Office of the Immigration Services Commissioner"
  },
  {
    title: "University Partners",
    delay: 300,
    icon: "fas fa-handshake",
    color: "var(--secondary-color)",
    description: "Official representatives for 100+ institutions"
  }
];


}
