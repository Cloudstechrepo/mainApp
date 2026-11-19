import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/theme.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly theme = inject(ThemeService);

  readonly scrolled = signal(false);
  readonly mobileOpen = signal(false);

  readonly navLinks = [ 
    { label: 'About Us', href: '/about-us' },
    { label: 'Vision', href: '/vision' },
    { label: 'Mission', href: '/mission' },
    { label: 'Our Products', href: '/our-products' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contactus' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    if (typeof window !== 'undefined') {
      this.scrolled.set(window.scrollY > 30);
    }
  }

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }
}
