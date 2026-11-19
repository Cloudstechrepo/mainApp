import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header'; 
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-frontend-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    FooterComponent
  ],
  templateUrl: './frontend-layout.component.html'
})
export class FrontendLayoutComponent {

}