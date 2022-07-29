import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-management',
  templateUrl: './office-management.component.html',
  styleUrls: ['./office-management.component.css']
})
export class OfficeManagementComponent implements OnInit {

  show :boolean = true;
  toogelSidebar(data :boolean){
    this.show = data
  }
  constructor() { }

  ngOnInit(): void {
  }

}
