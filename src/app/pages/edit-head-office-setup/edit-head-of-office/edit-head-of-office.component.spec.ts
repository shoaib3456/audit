import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeadOfOfficeComponent } from './edit-head-of-office.component';

describe('EditHeadOfOfficeComponent', () => {
  let component: EditHeadOfOfficeComponent;
  let fixture: ComponentFixture<EditHeadOfOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHeadOfOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHeadOfOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
