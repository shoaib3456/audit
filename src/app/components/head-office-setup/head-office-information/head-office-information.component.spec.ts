import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfficeInformationComponent } from './head-office-information.component';

describe('HeadOfficeInformationComponent', () => {
  let component: HeadOfficeInformationComponent;
  let fixture: ComponentFixture<HeadOfficeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadOfficeInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadOfficeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
