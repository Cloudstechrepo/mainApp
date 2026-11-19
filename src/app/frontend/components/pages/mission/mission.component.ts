import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';

interface Breadcrumb {
  label: string;
  route?: string;
}

interface MissionValue {
  number: string;
  title: string;
  description: string;
  icon: 'quality' | 'innovation' | 'collaboration' | 'integrity';
}

interface MissionStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss'
})
export class MissionComponent {
  currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }

  banner = {
    title: 'Mission',
    subtitle:
      'Delivering meaningful technology solutions that empower businesses and create lasting value.'
  };

 
  mission = {
    label: 'OUR MISSION',
    heading: 'Transforming Ideas Into Meaningful Digital Solutions',
    description:
      'Our mission is to empower businesses with innovative, reliable, and scalable technology solutions that simplify complex challenges and support sustainable growth.',
    secondaryDescription:
      'We combine technical expertise, creative thinking, and a customer-first approach to deliver digital experiences that make a measurable difference.',
    image: 'pexels-proudlyswazi-36718824.jpg',
    imageAlt: 'A team of technology professionals collaborating on a project'
  };

  values: MissionValue[] = [
    {
      number: '01',
      title: 'Quality Excellence',
      description:
        'We focus on quality, reliability, and attention to detail to deliver dependable digital products and services.',
      icon: 'quality'
    },
    {
      number: '02',
      title: 'Continuous Innovation',
      description:
        'We embrace modern technologies and fresh ideas to solve business problems and create better experiences.',
      icon: 'innovation'
    },
    {
      number: '03',
      title: 'Strong Collaboration',
      description:
        'We work closely with our clients and teams to understand requirements and achieve shared objectives.',
      icon: 'collaboration'
    },
    {
      number: '04',
      title: 'Trust & Integrity',
      description:
        'We believe in transparency, accountability, and building long-term relationships through responsible work.',
      icon: 'integrity'
    }
  ];

  steps: MissionStep[] = [
    {
      number: '01',
      title: 'Understand',
      description:
        'Understand business goals, customer needs, and the challenges that need to be solved.'
    },
    {
      number: '02',
      title: 'Strategize',
      description:
        'Define the right technology approach, project scope, and implementation roadmap.'
    },
    {
      number: '03',
      title: 'Build',
      description:
        'Develop secure, scalable, and user-friendly solutions using modern technologies.'
    },
    {
      number: '04',
      title: 'Deliver & Improve',
      description:
        'Deliver business value, evaluate results, and continuously improve the solution.'
    }
  ];
}