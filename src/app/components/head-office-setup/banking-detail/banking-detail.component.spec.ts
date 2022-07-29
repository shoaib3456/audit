import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingDetailComponent } from './banking-detail.component';

describe('BankingDetailComponent', () => {
  let component: BankingDetailComponent;
  let fixture: ComponentFixture<BankingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
