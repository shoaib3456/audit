import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-head-of-office',
  templateUrl: './edit-head-of-office.component.html',
  styleUrls: ['./edit-head-of-office.component.css']
})
export class EditHeadOfOfficeComponent implements OnInit {

  show :boolean = true;
  toogelSidebar(data :boolean){
    this.show = data
  }

  constructor() { }

  ngOnInit(): void {
  }

}
