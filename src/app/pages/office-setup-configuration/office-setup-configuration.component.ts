import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-setup-configuration',
  templateUrl: './office-setup-configuration.component.html',
  styleUrls: ['./office-setup-configuration.component.css']
})
export class OfficeSetupConfigurationComponent implements OnInit {

  
  show :boolean = true;
  toogelSidebar(data :boolean){
    this.show = data
  }

  constructor() { }

  ngOnInit(): void {
  }

}
