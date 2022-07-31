import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxChargesComponent } from './tax-charges.component';

describe('TaxChargesComponent', () => {
  let component: TaxChargesComponent;
  let fixture: ComponentFixture<TaxChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxChargesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
