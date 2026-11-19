import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';

interface Breadcrumb {
  label: string;
  route?: string;
}

interface VisionValue {
  number: string;
  title: string;
  description: string;
  icon: 'innovation' | 'growth' | 'customer';
}

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent {
  currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }

  banner = {
    title: 'Vision',
    subtitle:
      'Empowering businesses through technology, innovation, and digital transformation.'
  };

  vision = {
    label: 'OUR VISION',
    heading: 'Building a Smarter, More Connected Digital Future',
    description:
      'Our vision is to become a trusted technology partner for businesses worldwide by delivering innovative, reliable, and scalable digital solutions.',
    secondaryDescription:
      'We aim to simplify complex business challenges through modern technology, creative thinking, and a commitment to continuous improvement.',
    image: 'pexels-rickyesquivel-1674817.jpg',
    imageAlt: 'Technology professionals collaborating on digital solutions'
  };

  values: VisionValue[] = [
    {
      number: '01',
      title: 'Innovation First',
      description:
        'We embrace emerging technologies and creative ideas to develop meaningful digital solutions that help businesses move forward.',
      icon: 'innovation'
    },
    {
      number: '02',
      title: 'Sustainable Growth',
      description:
        'We build scalable, future-ready solutions that help organizations improve efficiency and achieve long-term success.',
      icon: 'growth'
    },
    {
      number: '03',
      title: 'Customer Success',
      description:
        'We focus on understanding business needs, building lasting partnerships, and delivering solutions that create real value.',
      icon: 'customer'
    }
  ];

  goals = [
    {
      title: 'Digital Transformation',
      description:
        'Help businesses modernize their processes with intelligent digital solutions.'
    },
    {
      title: 'Technology Excellence',
      description:
        'Deliver secure, scalable, and high-quality applications using modern technologies.'
    },
    {
      title: 'Global Partnerships',
      description:
        'Build trusted relationships with clients and partners across industries and markets.'
    },
    {
      title: 'Continuous Innovation',
      description:
        'Continuously learn, improve, and adapt to the changing technology landscape.'
    }
  ];
}