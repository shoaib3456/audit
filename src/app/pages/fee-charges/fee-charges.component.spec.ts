import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeChargesComponent } from './fee-charges.component';

describe('FeeChargesComponent', () => {
  let component: FeeChargesComponent;
  let fixture: ComponentFixture<FeeChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeChargesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
