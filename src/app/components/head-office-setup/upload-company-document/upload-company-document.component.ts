import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-company-document',
  templateUrl: './upload-company-document.component.html',
  styleUrls: ['./upload-company-document.component.css']
})
export class UploadCompanyDocumentComponent implements OnInit {

  checkbox : boolean = false
  inputChange ($event :any){
    this.checkbox = $event.target.checked
  }
  constructor() { }

  ngOnInit(): void {
  }

}
