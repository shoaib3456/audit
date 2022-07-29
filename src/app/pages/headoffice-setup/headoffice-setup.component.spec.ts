import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadofficeSetupComponent } from './headoffice-setup.component';

describe('HeadofficeSetupComponent', () => {
  let component: HeadofficeSetupComponent;
  let fixture: ComponentFixture<HeadofficeSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadofficeSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadofficeSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
