import { Component } from '@angular/core';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent {
    services = [
      {
        title: "Canada PR",
        delay: 0,
        icon: "fas fa-flag",
        bgColor: "linear-gradient(135deg, #FF0000, #CC0000)",
        description:
          "Express Entry, Provincial Nominee Programs, and family sponsorship options for Canadian Permanent Residence.",
        link: "service-detail.html"
      },
      {
        title: "Australia PR",
        delay: 100,
        icon: "fas fa-plane-departure",
        bgColor: "linear-gradient(135deg, #0052CC, #003D99)",
        description:
          "Skilled migration pathways including points-based system and employer sponsorship for Australian residency.",
        link: "service-detail.html"
      },
      {
        title: "UK Skilled Visa",
        delay: 200,
        icon: "fas fa-briefcase",
        bgColor: "linear-gradient(135deg, #C8102E, #8B0A1F)",
        description:
          "Tier 2 Work Visa, Global Talent Visa, and other skilled worker routes to live and work in the UK.",
        link: "service-detail.html"
      },
      {
        title: "USA Student Visa",
        delay: 0,
        icon: "fas fa-graduation-cap",
        bgColor: "linear-gradient(135deg, #B22234, #7C1629)",
        description:
          "F-1 Student Visa assistance for undergraduate, graduate, and professional programs in the United States.",
        link: "service-detail.html"
      },
      {
        title: "Schengen Tourist Visa",
        delay: 100,
        icon: "fas fa-passport",
        bgColor: "linear-gradient(135deg, #003399, #002266)",
        description:
          "Visit 26 European countries with a single visa. Tourism, business, and family visit applications.",
        link: "service-detail.html"
      },
      {
        title: "Work Visa Programs",
        delay: 200,
        icon: "fas fa-suitcase",
        bgColor: "linear-gradient(135deg, var(--secondary-color), var(--secondary-dark))",
        description:
          "Employment-based visas for various countries including job search assistance and employer connections.",
        link: "service-detail.html"
      }
    ];

}
