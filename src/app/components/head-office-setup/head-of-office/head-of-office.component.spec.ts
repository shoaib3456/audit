import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfOfficeComponent } from './head-of-office.component';

describe('HeadOfOfficeComponent', () => {
  let component: HeadOfOfficeComponent;
  let fixture: ComponentFixture<HeadOfOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadOfOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadOfOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
