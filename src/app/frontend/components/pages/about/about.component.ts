import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

interface AboutHighlight {
  id: number;
  title: string;
}

interface AboutService {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface AboutPageData {
  banner: {
    label: string;
    title: string;
    highlightedTitle: string;
    description: string;
  };
  introduction: {
    label: string;
    title: string;
    highlightedTitle: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    badgeTitle: string;
    badgeDescription: string;
    highlights: AboutHighlight[];
  };
  services: {
    label: string;
    title: string;
    highlightedTitle: string;
    description: string;
    items: AboutService[];
  };
  cta: {
    label: string;
    title: string;
    highlightedTitle: string;
    description: string;
    buttonText: string;
    buttonRoute: string;
  };
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  aboutData: AboutPageData = {
    banner: {
      label: 'WHO WE ARE',
      title: 'About',
      highlightedTitle: 'Us',
      description:
        'Empowering businesses through innovative technology, intelligent solutions, and digital transformation.'
    },

    introduction: {
      label: 'ABOUT CLOUDSTECH',
      title: 'Transforming Ideas Into',
      highlightedTitle: 'Digital Solutions',
      paragraphs: [
        'NPTech Solution helps businesses solve real-world challenges through modern technology and reliable software solutions.',
        'We simplify business processes, improve operational efficiency, and support organizations as they adapt to an increasingly digital world.',
        ],
      image: 'pexels-kampus-8463151.jpg',
      imageAlt: 'NPTech Solution team working on technology solutions',
      badgeTitle: 'Technology',
      badgeDescription: 'Driven by Innovation',
      highlights: [
        { id: 1, title: 'Business-Focused Solutions' },
        { id: 2, title: 'Modern Technology' },
        { id: 3, title: 'Scalable Applications' },
        { id: 4, title: 'Customer-Centric Approach' }
      ]
    },

    services: {
      label: 'WHAT WE DO',
      title: 'Technology That',
      highlightedTitle: 'Digital Business Forward',
      description:
        'We help organizations improve their digital capabilities through practical, reliable, and scalable technology.',
      items: [
        {
          id: 1,
          title: 'Software Development',
          description:
            'Custom web applications designed around business requirements, workflows, and operational goals.',
          icon: 'software'
        },
        {
          id: 2,
          title: 'Digital Transformation',
          description:
            'Modern digital experiences that help businesses streamline processes and adapt to changing needs.',
          icon: 'digital'
        },
        {
          id: 3,
          title: 'Business Solutions',
          description:
            'Technology solutions that support business visibility, productivity, and informed decision-making.',
          icon: 'business'
        }
      ]
    },

    cta: {
      label: 'LET’S WORK TOGETHER',
      title: 'Have a Project in Mind?',
      highlightedTitle: 'Let’s Build It Together.',
      description:
        'Connect with our team to discuss your requirements and explore the right technology solution for your business.',
      buttonText: 'Contact Us',
      buttonRoute: '/contact-us'
    }
  };
}