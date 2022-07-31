import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-setup-configuration-employee',
  templateUrl: './office-setup-configuration-employee.component.html',
  styleUrls: ['./office-setup-configuration-employee.component.css']
})
export class OfficeSetupConfigurationEmployeeComponent implements OnInit {


  show :boolean = true;
  toogelSidebar(data :boolean){
    this.show = data
  }

  constructor() { }

  ngOnInit(): void {
  }

}
