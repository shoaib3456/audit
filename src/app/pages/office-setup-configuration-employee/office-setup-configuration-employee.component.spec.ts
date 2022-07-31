import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeSetupConfigurationEmployeeComponent } from './office-setup-configuration-employee.component';

describe('OfficeSetupConfigurationEmployeeComponent', () => {
  let component: OfficeSetupConfigurationEmployeeComponent;
  let fixture: ComponentFixture<OfficeSetupConfigurationEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeSetupConfigurationEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeSetupConfigurationEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
