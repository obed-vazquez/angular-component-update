import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data';
import { ProductGroup, ProductItem, ProductDetail } from '../models/product.interface';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, OverlayPanelModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss'
})
export class DataTableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() level: string = 'group'; // 'group', 'item', or 'detail'
  @Input() parentId: number | null = null;

  allData: ProductGroup[] = [];
  displayData: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    if (this.level === 'group' && this.data.length === 0) {
      // Load initial data for root level
      this.dataService.getProductGroups().subscribe(data => {
        this.allData = data;
        this.displayData = data;
        this.data = data;
      });
    } else {
      this.displayData = this.data;
    }
  }

  getSubData(id: number): any[] {
    if (this.level === 'group') {
      return this.dataService.getItemsForGroup(id, this.allData);
    } else if (this.level === 'item') {
      return this.dataService.getDetailsForItem(id, this.data as ProductItem[]);
    }
    return [];
  }

  getNextLevel(): string {
    if (this.level === 'group') return 'item';
    if (this.level === 'item') return 'detail';
    return 'detail';
  }

  getColumns(): any[] {
    if (this.level === 'group') {
      return [
        { field: 'name', header: 'Group Name' },
        { field: 'category', header: 'Category' },
        { field: 'status', header: 'Status' },
        { field: 'actions', header: 'Actions' }
      ];
    } else if (this.level === 'item') {
      return [
        { field: 'name', header: 'Item Name' },
        { field: 'price', header: 'Price' },
        { field: 'stock', header: 'Stock' },
        { field: 'actions', header: 'Actions' }
      ];
    } else {
      return [
        { field: 'property', header: 'Property' },
        { field: 'value', header: 'Value' }
      ];
    }
  }

  hasSubData(rowData: any): boolean {
    if (this.level === 'group') {
      return rowData.items && rowData.items.length > 0;
    } else if (this.level === 'item') {
      return rowData.details && rowData.details.length > 0;
    }
    return false;
  }
}
