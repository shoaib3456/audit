import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankingDetailsComponent } from './edit-banking-details.component';

describe('EditBankingDetailsComponent', () => {
  let component: EditBankingDetailsComponent;
  let fixture: ComponentFixture<EditBankingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBankingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBankingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
