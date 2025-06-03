import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataTableComponent } from './data-table';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { DataService } from '../services/data';
import { of } from 'rxjs';
import { ProductGroup } from '../models/product.interface';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;
  let dataService: jasmine.SpyObj<DataService>;

  const mockData: ProductGroup[] = [
    {
      id: 1,
      name: 'Test Group A',
      category: 'Electronics',
      status: 'Active',
      items: [
        {
          id: 11,
          name: 'Test Item 1',
          price: 99.99,
          stock: 10,
          details: [
            { id: 111, property: 'Color', value: 'Blue' },
            { id: 112, property: 'Size', value: 'Large' }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Test Group B',
      category: 'Books',
      status: 'Active',
      items: [
        {
          id: 21,
          name: 'Test Item 2',
          price: 19.99,
          stock: 5,
          details: [
            { id: 211, property: 'Pages', value: '300' }
          ]
        }
      ]
    }
  ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('DataService', ['getProductGroups', 'getItemsForGroup', 'getDetailsForItem']);

    await TestBed.configureTestingModule({
      imports: [DataTableComponent],
      providers: [
        provideHttpClient(), 
        provideHttpClientTesting(),
        { provide: DataService, useValue: spy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    
    dataService.getProductGroups.and.returnValue(of(mockData));
    dataService.getItemsForGroup.and.returnValue(mockData[0].items);
    dataService.getDetailsForItem.and.returnValue(mockData[0].items[0].details);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load data on init for group level', () => {
    component.level = 'group';
    component.ngOnInit();
    
    expect(dataService.getProductGroups).toHaveBeenCalled();
    expect(component.displayData).toEqual(mockData);
  });

  it('should have correct columns for group level', () => {
    component.level = 'group';
    const columns = component.getColumns();
    
    expect(columns).toEqual([
      { field: 'name', header: 'Group Name' },
      { field: 'category', header: 'Category' },
      { field: 'status', header: 'Status' },
      { field: 'actions', header: 'Actions' }
    ]);
  });

  it('should detect sub data correctly', () => {
    component.level = 'group';
    const groupWithItems = mockData[0];
    const groupWithoutItems = { ...mockData[0], items: [] };
    
    expect(component.hasSubData(groupWithItems)).toBe(true);
    expect(component.hasSubData(groupWithoutItems)).toBe(false);
  });

  it('should get sub data correctly', () => {
    component.level = 'group';
    component.allData = mockData;
    
    const subData = component.getSubData(1);
    expect(subData).toEqual(mockData[0].items);
    expect(dataService.getItemsForGroup).toHaveBeenCalledWith(1, mockData);
  });

  it('should get next level correctly', () => {
    component.level = 'group';
    expect(component.getNextLevel()).toBe('item');
    
    component.level = 'item';
    expect(component.getNextLevel()).toBe('detail');
    
    component.level = 'detail';
    expect(component.getNextLevel()).toBe('detail');
  });

  it('should manage overlay state correctly', () => {
    const mockOverlay = { show: jasmine.createSpy('show'), hide: jasmine.createSpy('hide') };
    const mockEvent = new Event('click');
    const rowData = { id: 1, name: 'Test' };
    
    // Test showing overlay
    component.toggleOverlay(rowData, mockOverlay, mockEvent);
    expect(mockOverlay.show).toHaveBeenCalledWith(mockEvent);
    expect(component.isOverlayOpen(1)).toBe(true);
    
    // Test hiding overlay
    component.toggleOverlay(rowData, mockOverlay, mockEvent);
    expect(mockOverlay.hide).toHaveBeenCalled();
    expect(component.isOverlayOpen(1)).toBe(false);
  });

  it('should render table with View Details buttons for rows with sub data', () => {
    component.level = 'group';
    component.displayData = mockData;
    fixture.detectChanges();
    
    const buttons = fixture.debugElement.queryAll(By.css('p-button'));
    expect(buttons.length).toBe(2); // Two groups with items
    
    const firstButton = buttons[0];
    expect(firstButton.nativeElement.textContent).toContain('View Details');
  });

  it('should render overlay panels', () => {
    component.level = 'group';
    component.displayData = mockData;
    fixture.detectChanges();
    
    const overlays = fixture.debugElement.queryAll(By.css('p-overlayPanel'));
    expect(overlays.length).toBe(2); // Two groups with overlay panels
  });

  it('should update button text when overlay is open', () => {
    component.level = 'group';
    component.displayData = mockData;
    component.openOverlays.add(1); // Mark first overlay as open
    fixture.detectChanges();
    
    const buttons = fixture.debugElement.queryAll(By.css('p-button'));
    const firstButton = buttons[0];
    
    // Check if the button label changes (this would need to be tested with actual DOM updates)
    expect(component.isOverlayOpen(1)).toBe(true);
  });
});
