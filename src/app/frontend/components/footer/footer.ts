import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomainService } from '../../core/domain-service';
import { CommonModule } from '@angular/common';

interface FooterLink {
  label: string;
  href?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly sourceService = inject(DomainService);

  readonly sent = signal(false);
  readonly contactImage = 'Cloudstech _Logo.png';

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]{7,15}$/)]],
    message: ['', Validators.required],
  });

  readonly socials = [
    { name: 'Instagram', href: '/' },
    { name: 'Twitter', href: '/' },
    { name: 'LinkedIn', href: '/' },
    { name: 'Facebook', href: '/' },
  ];

  readonly columns: FooterColumn[] = [
    {
      title: 'Cloudstech',
      links: [
        { label: 'About us', href: '/' },
        { label: 'Corporate Responsibility' },
        { label: 'Investor Relations' }, 
      ],
    },
    {
      title: 'What we do',
      links: [{ label: 'Research & Advisory' }, { label: 'Conferences' }, { label: 'Consulting' }, { label: 'Digital Markets' }],
    },
    {
      title: 'Contact Us',
      links: [
        { label: 'Become a Client' }, 
        { label: 'Technical Support' },
        { label: 'Terms of use', href: '/' },
      ],
    }, 
    {
      title: 'Support',
      links: [
        { label: 'Privacy Policy', href: '/' },
        { label: 'Policies' },
        { label: 'Blog' }, 
      ],
    },
  ];

  invalid(control: 'name' | 'email' | 'phone' | 'message'): boolean {
    const c = this.form.controls[control];
    return c.invalid && (c.touched || c.dirty);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: call your API here, e.g. this.http.post('/api/callback', this.form.getRawValue())
    console.log(this.form.getRawValue());
    this.sent.set(true);
    this.form.reset();
  }
}