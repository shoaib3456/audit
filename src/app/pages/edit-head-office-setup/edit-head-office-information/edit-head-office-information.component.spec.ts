import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeadOfficeInformationComponent } from './edit-head-office-information.component';

describe('EditHeadOfficeInformationComponent', () => {
  let component: EditHeadOfficeInformationComponent;
  let fixture: ComponentFixture<EditHeadOfficeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHeadOfficeInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHeadOfficeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
