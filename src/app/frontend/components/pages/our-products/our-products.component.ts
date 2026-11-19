import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';

interface Product {
  id: number;
  name: string;
  category: string;
  shortDescription: string;
  image: string;
  features: string[];
  slug: string;
}

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule, RouterLink, BreadcrumbComponent],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss'
})
export class OurProductsComponent {

  currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }
  
  products: Product[] = [
    {
      id: 1,
      name: 'ERP Solutions',
      category: 'Enterprise Management',
      shortDescription:
        'Streamline business operations with integrated enterprise resource planning software designed to improve productivity and decision-making.',
      image: 'Modern_CRM.png',
      features: [
        'Business Process Automation',
        'Inventory & Order Management',
        'Financial Reporting',
        'Real-Time Analytics'
      ],
      slug: 'erp'
    },
    {
      id: 2,
      name: 'CRM Solutions',
      category: 'Customer Management',
      shortDescription:
        'Build stronger customer relationships, manage sales pipelines, and improve customer engagement through intelligent CRM solutions.',
      image: 'Modern_CRM.png',
      features: [
        'Lead & Contact Management',
        'Sales Pipeline Tracking',
        'Customer Communication',
        'Performance Reports'
      ],
      slug: 'crm'
    },
    {
      id: 3,
      name: 'HRMS Solutions',
      category: 'Human Resource Management',
      shortDescription:
        'Simplify HR operations with a centralized platform for employee records, attendance, payroll, and workforce management.',
      image: 'Modern_CRM.png',
      features: [
        'Employee Management',
        'Attendance & Leave Tracking',
        'Payroll Management',
        'Employee Self-Service'
      ],
      slug: 'hrms'
    },
    {
      id: 4,
      name: 'Project Management',
      category: 'Business Productivity',
      shortDescription:
        'Plan projects, coordinate teams, track milestones, and manage workloads with tools designed to keep your business moving forward.',
      image: 'Modern_CRM.png',
      features: [
        'Task & Project Tracking',
        'Team Collaboration',
        'Milestone Management',
        'Progress Reporting'
      ],
      slug: 'project-management'
    },
    {
      id: 5,
      name: 'Business Intelligence',
      category: 'Data & Analytics',
      shortDescription:
        'Turn business data into meaningful insights with interactive dashboards, performance metrics, and comprehensive reports.',
      image: 'Modern_CRM.png',
      features: [
        'Interactive Dashboards',
        'Data Visualization',
        'Business Performance Metrics',
        'Decision Support'
      ],
      slug: 'business-intelligence'
    },
    {
      id: 6,
      name: 'Custom Software',
      category: 'Digital Solutions',
      shortDescription:
        'Get software tailored to your business requirements, workflows, and long-term digital transformation goals.',
      image: 'Modern_CRM.png',
      features: [
        'Custom Application Development',
        'API Integration',
        'Scalable Architecture',
        'Ongoing Technical Support'
      ],
      slug: 'custom-software'
    }
  ];

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}