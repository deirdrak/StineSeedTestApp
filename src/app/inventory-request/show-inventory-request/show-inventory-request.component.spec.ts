import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInventoryRequestComponent } from './show-inventory-request.component';

describe('ShowInventoryRequestComponent', () => {
  let component: ShowInventoryRequestComponent;
  let fixture: ComponentFixture<ShowInventoryRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInventoryRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInventoryRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
