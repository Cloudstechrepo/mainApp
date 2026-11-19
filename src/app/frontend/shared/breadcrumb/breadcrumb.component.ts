import { Component, Input, OnChanges } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnChanges {

  @Input() currentUrl = '';

  pageTitle = '';

  ngOnChanges(): void {
    console.log('BreadcrumbComponent: ngOnChanges called with currentUrl:', this.currentUrl);
    this.generateTitle();
  }

  private generateTitle(): void {
    const segments = this.currentUrl
      .split('?')[0]
      .split('#')[0]
      .split('/')
      .filter(Boolean);
    const lastSegment = segments.at(-1) ?? '';
    this.pageTitle = lastSegment
      ? decodeURIComponent(lastSegment)
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      : 'Home';
  }

}  // END Testing