import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceyscompComponent } from './priceyscomp.component';

describe('PriceyscompComponent', () => {
  let component: PriceyscompComponent;
  let fixture: ComponentFixture<PriceyscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceyscompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceyscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
