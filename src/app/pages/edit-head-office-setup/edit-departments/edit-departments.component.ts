import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-departments',
  templateUrl: './edit-departments.component.html',
  styleUrls: ['./edit-departments.component.css']
})
export class EditDepartmentsComponent implements OnInit {

  show :boolean = true;
  toogelSidebar(data :boolean){
    this.show = data
  }
  constructor() { }

  ngOnInit(): void {
  }

}
