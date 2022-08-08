import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditFeeChargesComponent } from './audit-fee-charges.component';

describe('AuditFeeChargesComponent', () => {
  let component: AuditFeeChargesComponent;
  let fixture: ComponentFixture<AuditFeeChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditFeeChargesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditFeeChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
