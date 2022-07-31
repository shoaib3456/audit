import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeSetupConfigurationComponent } from './office-setup-configuration.component';

describe('OfficeSetupConfigurationComponent', () => {
  let component: OfficeSetupConfigurationComponent;
  let fixture: ComponentFixture<OfficeSetupConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeSetupConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeSetupConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
