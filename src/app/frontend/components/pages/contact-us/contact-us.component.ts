import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';

interface Breadcrumb {
  label: string;
  route?: string;
}

interface ContactInfo {
  title: string;
  value: string;
  description: string;
  icon: 'location' | 'phone' | 'email' | 'clock';
  link?: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, BreadcrumbComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit, OnDestroy {
  currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }

  ngOnInit(): void {
     
  }

 
  banner = {
    title: 'Contact Us',
    subtitle: 'We would love to hear from you. Let’s start a conversation.'
  };

  breadcrumbs: Breadcrumb[] = [
    { label: 'Home', route: '/' },
    { label: 'Contact Us' }
  ];

  contactInfo: ContactInfo[] = [
    {
      title: 'Our Office',
      value: 'India',
      description: 'Connect with our team for business enquiries.',
      icon: 'location'
    },
    {
      title: 'Call Us',
      value: '+91 XXXXX XXXXX',
      description: 'Monday – Friday, 9:00 AM – 6:00 PM',
      icon: 'phone',
      link: 'tel:+91XXXXXXXXXX'
    },
    {
      title: 'Email Us',
      value: 'info@yourcompany.com',
      description: 'Send us your questions anytime.',
      icon: 'email',
      link: 'mailto:info@yourcompany.com'
    },
    {
      title: 'Business Hours',
      value: 'Mon – Fri',
      description: '9:00 AM – 6:00 PM IST',
      icon: 'clock'
    }
  ];

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  };

  submitted = false;

  onSubmit(): void {
    if (
      !this.formData.name.trim() ||
      !this.formData.email.trim() ||
      !this.formData.subject.trim() ||
      !this.formData.message.trim()
    ) {
      return;
    }

    // Connect this method to your backend API to submit the enquiry.
    console.log('Contact form data:', this.formData);

    this.submitted = true;

    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }

  ngOnDestroy(): void {
    
  }


}