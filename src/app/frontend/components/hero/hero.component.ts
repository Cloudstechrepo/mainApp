import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

interface Slide {
  eyebrow: string;
  title: string;
  lead?: string;
  text: string;
  image: string;
  cta?: { label: string; href: string };
}

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private timer?: ReturnType<typeof setInterval>;
  private readonly intervalMs = 5000;

  readonly current = signal(0);
  readonly menuOpen = signal(false);
  
  private readonly img = 'https://cloudstrats.ai/static/assets/images/ourservice/';

  readonly slides: Slide[] = [ 
    {
      eyebrow: 'Our Services',
      title: 'Artificial Intelligence',
      text: 'Artificial Intelligence Frameworks for Discovering, Innovating, and Optimizing',
      image: 'pexels-cesar-13990694.jpg',
      cta: { label: 'Know More', href: '/' },
    },
    {
      eyebrow: 'Our Services',
      title: 'Analytics',
      text: 'Our ecosystem is built on strong foundations of data and analytics strategy and insights',
      image: 'pexels-werner-pfennig-6950015.jpg',
      cta: { label: 'Know More', href: '/' },
    },
    {
      eyebrow: 'Our Services',
      title: 'Automation',
      text: 'Safe corporate automation in conjunction with process intelligence to increase efficiency',
      image: 'pexels-silverkblack-36733421.jpg',
      cta: { label: 'Know More', href: '/' },
    }
  ];

  ngOnInit(): void {
    this.play();
    this.destroyRef.onDestroy(() => this.pause());
  }

  play(): void {
    this.pause();
    this.timer = setInterval(() => this.next(), this.intervalMs);
  }

  pause(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  next(): void {
    this.current.update((i) => (i + 1) % this.slides.length);
  }

  prev(): void {
    this.current.update((i) => (i - 1 + this.slides.length) % this.slides.length);
  }

  goTo(index: number): void {
    this.current.set(index);
  }
}
