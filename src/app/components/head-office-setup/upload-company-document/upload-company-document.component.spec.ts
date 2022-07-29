import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCompanyDocumentComponent } from './upload-company-document.component';

describe('UploadCompanyDocumentComponent', () => {
  let component: UploadCompanyDocumentComponent;
  let fixture: ComponentFixture<UploadCompanyDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCompanyDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCompanyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
