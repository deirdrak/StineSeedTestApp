import { TestBed } from '@angular/core/testing';

import { InventoryRequestApiService } from './inventory-request-api.service';

describe('InventoryRequestApiService', () => {
  let service: InventoryRequestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryRequestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
