import { Component, ElementRef, ViewChild, computed, signal } from '@angular/core';

export interface Product {
  name: string;
  image: string;
  link?: string;
}

export interface ProductCategory {
  id: string;
  label: string;
  productsImage: string;
}

@Component({
  selector: 'app-products-section',
  standalone: true,
  templateUrl: './products-section.component.html',
  styleUrl: './products-section.component.scss',
})
export class ProductsSectionComponent {
  @ViewChild('tabList', { static: true }) tabList!: ElementRef<HTMLElement>;

  /** Replace with data from your API/service if needed. */
  readonly categories: ProductCategory[] = [
    {
      id: 'rosin',
      label: 'HRMS Portal',
      productsImage: 'service_1.png',
    },
    {
      id: 'phenolic',
      label: 'CRM Portal',
      productsImage: 'Service_2.png',
    },
    {
      id: 'alkyd',
      label: 'ERP Portal',
      productsImage: 'service_3.jpeg',
    },
    {
      id: 'polyamide',
      label: 'Online Interview Portal',
      productsImage: 'service_4.jpeg',
    }, 
  ];

  readonly activeId = signal<string>('amino');

  readonly activeProducts = computed(
    () => this.categories.find((c) => c.id === this.activeId())?.productsImage ?? []
  );

  select(id: string): void {
    this.activeId.set(id);
  }

  scrollTabs(direction: 1 | -1 = 1): void {
    const el = this.tabList.nativeElement;
    el.scrollBy({ left: direction * el.clientWidth * 0.6, behavior: 'smooth' });
  }
}
