import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';

interface JobOpening {
  id: number;
  title: string; 
  location: string;
  experience: string;
  employmentType: string;
  description: string;
  skills: string[];
}

interface HiringStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
   currentUrl: string;
  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }
 
  banner = {
    title: 'Build Your Career With Us',
    subtitle:
      'Join a team that embraces innovation, encourages growth, and turns great ideas into meaningful technology solutions.'
  };

  breadcrumbs = [
    { label: 'Home', route: '/' },
    { label: 'Careers' }
  ];

  careerIntro = {
    label: 'YOUR NEXT OPPORTUNITY',
    heading: 'Grow Your Skills. Make an Impact. Build the Future.',
    description:
      'At NPTech Solution, we believe great technology begins with great people. We value curiosity, collaboration, and a passion for solving real-world business challenges.',
    secondaryDescription:
      'Whether you are an experienced professional or starting your technology career, explore opportunities to learn, contribute, and grow with our team.',
    image: 'assets/images/career-team.jpg',
    imageAlt: 'Technology professionals collaborating in a modern workplace'
  };


  jobs: JobOpening[] = [
    {
      id: 1,
      title: 'Senior Angular Developer', 
      location: 'India',
      experience: '5+ Years',
      employmentType: 'Full-time',
      description:
        'Build responsive web applications using Angular, TypeScript, RxJS, and modern frontend development practices.',
      skills: ['Angular', 'TypeScript', 'RxJS', 'REST APIs']
    },
    {
      id: 2,
      title: '.NET Developer', 
      location: 'India',
      experience: '3+ Years',
      employmentType: 'Full-time',
      description:
        'Develop reliable backend services and APIs using .NET, Entity Framework Core, and SQL Server.',
      skills: ['.NET Core', 'C#', 'SQL Server', 'Web API']
    },
    {
      id: 3,
      title: 'Full Stack Developer', 
      location: 'India',
      experience: '3+ Years',
      employmentType: 'Full-time',
      description:
        'Build end-to-end web solutions by collaborating across frontend, backend, and database development.',
      skills: ['Angular', '.NET', 'SQL', 'REST APIs']
    }
  ];

  hiringSteps: HiringStep[] = [
    {
      number: '01',
      title: 'Apply Online',
      description:
        'Share your resume and tell us about your skills and experience.'
    },
    {
      number: '02',
      title: 'Initial Discussion',
      description:
        'Discuss your background, career goals, and the opportunity.'
    },
    {
      number: '03',
      title: 'Technical Interview',
      description:
        'Demonstrate your technical knowledge and problem-solving skills.'
    },
    {
      number: '04',
      title: 'Selection & Onboarding',
      description:
        'Successful candidates move forward to the offer and onboarding process.'
    }
  ];

  get totalOpenings(): number {
    return this.jobs.length;
  }
}