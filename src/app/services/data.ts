import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductGroup, ProductItem, ProductDetail } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProductGroups(): Observable<ProductGroup[]> {
    return this.http.get<ProductGroup[]>('assets/sample-data.json');
  }

  getItemsForGroup(groupId: number, data: ProductGroup[]): ProductItem[] {
    const group = data.find(g => g.id === groupId);
    return group ? group.items : [];
  }

  getDetailsForItem(itemId: number, items: ProductItem[]): ProductDetail[] {
    const item = items.find(i => i.id === itemId);
    return item ? item.details : [];
  }
}
