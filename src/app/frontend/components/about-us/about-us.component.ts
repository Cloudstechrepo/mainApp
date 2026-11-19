import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {
  /** Put your photo in /public/images/about-us.jpg (Angular 18+ static folder) */
  readonly image = 'images/about-us.jpg';
  readonly imageAlt = 'D.S.V. Chemicals team meeting';
  iconColor = '#052642';
  readonly titleDark = 'About Our';
  readonly titleAccent = 'Organization';

  readonly paragraphs: string[] = [
    'Cloudstech is an emerging IT and software development company committed to delivering innovative, reliable, and scalable technology solutions to businesses in India and across international markets.',
    'Cloudstech offers a wide range of services, including custom software development, web application development, full-stack development, cloud solutions, API integration, and digital transformation to help businesses streamline operations and achieve their goals.',
    'At Cloudstech, we work closely with our clients to understand their unique business requirements and provide tailored technology solutions that drive efficiency, enhance user experiences, and support long-term business growth.',
  ];

  readonly readMoreLink = '/about';
}
