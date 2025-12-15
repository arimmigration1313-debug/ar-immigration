import { Component } from '@angular/core';
import { ServiceComponent } from '../../core/shaired/service/service.component';
import { RoutePath } from '../../core/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  link = RoutePath;
  // immigrationServices = [
  // {
  //   title: "Study Visa",
  //   delay: 0,
  //   icon: "fas fa-graduation-cap",
  //   bgColor: "linear-gradient(135deg, #3B82F6, #2563EB)",
  //   description:
  //     "Student visa assistance for top universities worldwide. F-1, Tier 4, and other student permits.",
  //   link: "service-detail.html"
  // },
  // {
  //   title: "Work Visa",
  //   delay: 100,
  //   icon: "fas fa-briefcase",
  //   bgColor: "linear-gradient(135deg, #10B981, #059669)",
  //   description:
  //     "Employment-based visas including H-1B, Tier 2, and skilled worker programs globally.",
  //   link: "service-detail.html"
  // },
  // {
  //   title: "Visitor Visa",
  //   delay: 200,
  //   icon: "fas fa-plane",
  //   bgColor: "linear-gradient(135deg, #F59E0B, #D97706)",
  //   description:
  //     "Tourist and visitor visas for leisure, business trips, and family visits worldwide.",
  //   link: "service-detail.html"
  // },
  // {
  //   title: "Skilled Immigration",
  //   delay: 300,
  //   icon: "fas fa-award",
  //   bgColor: "linear-gradient(135deg, var(--primary-color), var(--primary-dark))",
  //   description:
  //     "Points-based immigration programs like Express Entry Canada, SkillSelect Australia.",
  //   link: "service-detail.html"
  // },
  // {
  //   title: "Business Immigration",
  //   delay: 0,
  //   icon: "fas fa-chart-line",
  //   bgColor: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
  //   description:
  //     "Entrepreneur and investor visa programs for business owners and investors.",
  //   link: "service-detail.html"
  // },
  // {
  //   title: "IELTS Coaching",
  //   delay: 100,
  //   icon: "fas fa-book-open",
  //   bgColor: "linear-gradient(135deg, #EC4899, #DB2777)",
  //   description:
  //     "Expert IELTS preparation with proven strategies to achieve your target band score.",
  //   link: "service-detail.html"
  // },
  // {
  //   title: "Job Assistance",
  //   delay: 200,
  //   icon: "fas fa-user-tie",
  //   bgColor: "linear-gradient(135deg, #14B8A6, #0D9488)",
  //   description:
  //     "Career support, resume building, and job placement services in your destination country.",
  //   link: "service-detail.html"
  // },
  // {
  //   title: "PR Consultancy",
  //   delay: 300,
  //   icon: "fas fa-home",
  //   bgColor: "linear-gradient(135deg, var(--secondary-color), var(--secondary-dark))",
  //   description:
  //     "Permanent Residence applications for Canada, Australia, New Zealand, and more.",
  //   link: "service-detail.html"
  // }
  // ];

  features = [
  {
    title: "Personalized Approach",
    delay: 0,
    icon: "fas fa-users",
    bgColor: "linear-gradient(135deg, var(--primary-color), var(--primary-light))",
    description:
      "Every client receives tailored solutions based on their unique profile and goals.",
    iconSize: "36px",
    boxSize: "80px"
  },
  {
    title: "Fast Processing",
    delay: 100,
    icon: "fas fa-clock",
    bgColor: "linear-gradient(135deg, var(--secondary-color), var(--secondary-dark))",
    description:
      "We expedite your applications with our streamlined processes and expert handling.",
    iconSize: "36px",
    boxSize: "80px"
  },
  {
    title: "24/7 Support",
    delay: 200,
    icon: "fas fa-headset",
    bgColor: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
    description:
      "Round-the-clock assistance from our dedicated team throughout your journey.",
    iconSize: "36px",
    boxSize: "80px"
  }
  ];

  constructor(private router:Router){

  }

  openPage(link:string){
    this.router.navigate([link])
  }


}
