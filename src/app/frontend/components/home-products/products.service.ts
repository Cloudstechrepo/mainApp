import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly http = inject(HttpClient);

  /** Change to your real endpoint */
  private readonly url = '/api/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
