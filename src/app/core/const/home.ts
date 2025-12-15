import { RoutePath } from "../config";

// home page data 
export const homeSlides = [
  {
    bg: "assets/images/s1.jpg",
    title: "Your Trusted Immigration Partner",
    subtitle: "Study, Work & Settle Abroad",
    buttons: [
      { text: "Book Consultation", link: RoutePath.contact, class: "btn btn-secondary" }
      // { text: "Check Eligibility", link: "assessment.html", class: "btn btn-white" }
    ]
  },
  {
    bg: "assets/images/s2.jpg",
    title: "Expert Visa Consultation",
    subtitle: "Navigate Your Immigration Journey with Confidence",
    buttons: [
      { text: "Get Started", link: RoutePath.contact, class: "btn btn-secondary" },
      { text: "Our Services", link: RoutePath.services, class: "btn btn-white" }
    ]
  },
  {
    bg: "assets/images/s3.jpg",
    title: "Success Stories Worldwide",
    subtitle: "Join Thousands Who Achieved Their Dreams",
    buttons: [
      // { text: "Free Assessment", link: "assessment.html", class: "btn btn-secondary" },
      { text: "Learn More", link: RoutePath.about, class: "btn btn-white" }
    ]
  }
];

export const testimonialsList = [
  {
    img: "https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/d8ebb3bdc0e10607398848d84da5be54/f3a16433-596a-4983-add3-3c30873a7fc2/659e304d.jpg",
    text: "Their team guided me at every stage of the PR process. I received my approval faster than expected and the support was outstanding!",
    name: "Rajesh Kumar",
    role: "Canada – PR (Express Entry)"
  },
  {
    img: "https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/d8ebb3bdc0e10607398848d84da5be54/f3a16433-596a-4983-add3-3c30873a7fc2/e642258d.jpg",
    text: "I got my student visa to the UK smoothly. They helped me with SOP, course selection, and even pre-departure guidance.",
    name: "Rahul Sharma",
    role: "United Kingdom – Student Visa"
  },
  {
    img: "https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/d8ebb3bdc0e10607398848d84da5be54/f3a16433-596a-4983-add3-3c30873a7fc2/055775f9.jpg",
    text: "A friend recommended Ar Immigration and now I’m happily working in Dubai! Their job visa filing support was very professional.",
    name: "Nitesh",
    role: "UAE – Work Permit"
  }
];

export const steps = [
  {
    number: "01.",
    title: "Free Assessment",
    text: "Complete our online eligibility assessment to understand your options and chances.",
    icon: "fas fa-clipboard-check",
    bg: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
    align: "end"   // text-end & normal layout
  },
  {
    number: "02.",
    title: "Consultation",
    text: "Meet with our expert consultants to discuss your profile and immigration goals in detail.",
    icon: "fas fa-comments",
    bg: "linear-gradient(135deg, var(--secondary-color), var(--secondary-dark))",
    align: "start" // text-start & reversed layout
  },
  {
    number: "03.",
    title: "Documentation",
    text: "We guide you in gathering and preparing all required documents for your application.",
    icon: "fas fa-file-alt",
    bg: "linear-gradient(135deg, var(--primary-color), var(--primary-light))",
    align: "end"
  },
  {
    number: "04.",
    title: "Application",
    text: "Our team reviews and submits your complete application to immigration authorities.",
    icon: "fas fa-paper-plane",
    bg: "linear-gradient(135deg, var(--secondary-color), var(--primary-color))",
    align: "start"
  },
  {
    number: "05.",
    title: "Success!",
    text: "Receive your visa approval and get ready for your new journey abroad!",
    icon: "fas fa-check-circle",
    bg: "linear-gradient(135deg, #10B981, #059669)",
    align: "end"
  }
];

