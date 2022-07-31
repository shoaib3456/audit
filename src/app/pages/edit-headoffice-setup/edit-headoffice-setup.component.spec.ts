import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeadofficeSetupComponent } from './edit-headoffice-setup.component';

describe('EditHeadofficeSetupComponent', () => {
  let component: EditHeadofficeSetupComponent;
  let fixture: ComponentFixture<EditHeadofficeSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHeadofficeSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHeadofficeSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
