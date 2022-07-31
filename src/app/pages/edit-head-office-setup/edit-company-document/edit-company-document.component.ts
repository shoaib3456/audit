import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-company-document',
  templateUrl: './edit-company-document.component.html',
  styleUrls: ['./edit-company-document.component.css']
})
export class EditCompanyDocumentComponent implements OnInit {


  checkbox : boolean = false
  inputChange ($event :any){
    this.checkbox = $event.target.checked
  }

  show :boolean = true;
  toogelSidebar(data :boolean){
    this.show = data
  }
  constructor() { }

  ngOnInit(): void {
  }

}
