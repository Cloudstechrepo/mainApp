import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { HeroComponent } from '../hero/hero.component';
import { HomeProductsComponent } from '../home-products/home-products.component';

@Component({
  imports: [HeroComponent, AboutUsComponent, HomeProductsComponent],
  selector: 'app-landing-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage {}
