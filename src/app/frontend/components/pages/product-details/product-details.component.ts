import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';
import { NotFound } from '../../../shared/not-found/not-found';

interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

interface ProductBenefit {
  title: string;
  description: string;
}

interface Product {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  badge: string;
  features: ProductFeature[];
  benefits: ProductBenefit[];
  highlights: string[];
  useCases: string[];
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule, 
    BreadcrumbComponent,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  currentUrl: string = '';

  constructor() {
    this.currentUrl = this.router.url;
  }

}