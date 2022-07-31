import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-head-office-information',
  templateUrl: './edit-head-office-information.component.html',
  styleUrls: ['./edit-head-office-information.component.css']
})
export class EditHeadOfficeInformationComponent implements OnInit {

  show :boolean = true;
  toogelSidebar(data :boolean){
    this.show = data
  }

  constructor() { }

  ngOnInit(): void {
  }

}
