
import {
  Injectable,
  signal,
  effect,
  PLATFORM_ID,
  inject,
  computed,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly darkMode = signal<boolean>(this.getInitialTheme());

  readonly currentTheme = computed(() =>
    this.darkMode() ? 'dark' : 'light'
  );

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      const isDark = this.darkMode();
      const themeName = isDark ? 'dark' : 'light';

      localStorage.setItem('nbtech_theme', themeName);

      document.body.classList.toggle('dark-theme', isDark);
      document.body.classList.toggle('light-theme', !isDark);

      document.documentElement.setAttribute(
        'data-bs-theme',
        themeName
      );
    });
  }

  private getInitialTheme(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return true;
    }

    const saved =
      localStorage.getItem('nbtech_theme') ??
      localStorage.getItem('theme');

    // Use the saved preference when available.
    if (saved !== null) {
      return saved === 'dark';
    }

    // Default to dark mode for first-time visitors.
    return true;
  }

  toggleTheme(): void {
    this.darkMode.update((prev) => !prev);
  }

  setTheme(isDark: boolean): void {
    this.darkMode.set(isDark);
  }
}
