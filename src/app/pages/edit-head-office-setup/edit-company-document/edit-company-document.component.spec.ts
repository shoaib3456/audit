import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompanyDocumentComponent } from './edit-company-document.component';

describe('EditCompanyDocumentComponent', () => {
  let component: EditCompanyDocumentComponent;
  let fixture: ComponentFixture<EditCompanyDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompanyDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCompanyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
