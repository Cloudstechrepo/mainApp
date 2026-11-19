import { afterNextRender, Component, computed, effect, ElementRef, input, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from './product.model';
import { MatIcon } from '@angular/material/icon';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1, name: 'HRMS Portal', description: 'Simplify employee management, attendance, payroll, and recruitment.',
    image: 'HRMS_Portal.jpg', icon: 'groups', link: '/products/hrms'
  },
  {
    id: 2, name: 'CRM Portal', description: 'Manage customer relationships, sales pipelines, leads, and business growth.',
    image: 'CRM_Solution.jpg', icon: 'handshake', link: '/products/crm'
  },
  {
    id: 3, name: 'ERP Portal', description: 'Connect inventory, finance, procurement, and business operations.',
    image: 'ERP_Solution.jpg', icon: 'layers', link: '/products/erp'
  },
  {
    id: 4, name: 'Online Interview Portal', description: 'Streamline candidate selection, interview scheduling, and recruitment workflows.',
    image: 'Integrated_Business_Suite.jpg', icon: 'laptop_mac', link: '/products/online-interview'
  },
  
];

@Component({
  selector: 'app-home-products',
  imports: [RouterLink, MatIcon],
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.scss',
})
export class HomeProductsComponent {
  // ---- Dynamic inputs (all optional) ----
  readonly eyebrow = input('Our Products');
  readonly heading = input('Available');
  readonly headingAccent = input('Products');
  readonly subtitle = input('We deliver high-quality products designed for reliability and performance.');
  readonly buttonLabel = input('View Details');

  /** Pass products from a parent. If omitted, the dummy data below is used. */
  readonly products = input<Product[] | null>(null);

  // Used by the template; kept so the HTML works unchanged.
  // Switch these to real values when you connect an API again.
  readonly loading = signal(false);
  readonly error = signal(false);

  readonly items = computed(() => this.products() ?? MOCK_PRODUCTS);
    // ---- Slider ----
  private readonly track = viewChild<ElementRef<HTMLElement>>('track');
  readonly canPrev = signal(false);
  readonly canNext = signal(false);
  
  constructor() {
    afterNextRender(() => this.updateArrows());

    // Re-check arrows whenever the product list changes
    effect(() => {
      this.items();
      setTimeout(() => this.updateArrows());
    });
  }

  /** Enable/disable arrows depending on the scroll position */
  updateArrows(): void {
    const el = this.track()?.nativeElement;
    if (!el) return;
    this.canPrev.set(el.scrollLeft > 4);
    this.canNext.set(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }

  /** Scroll by exactly one card */
  scroll(direction: 1 | -1): void {
    const el = this.track()?.nativeElement;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;

    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
  }


}