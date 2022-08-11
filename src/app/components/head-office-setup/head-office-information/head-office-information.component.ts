import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-office-information',
  templateUrl: './head-office-information.component.html',
  styleUrls: ['./head-office-information.component.css']
})
export class HeadOfficeInformationComponent implements OnInit {

  radio : String = ""

  getNumber($event : any){
    console.log($event);
  }

  inputChange ($event :any){
    this.radio = $event.target.value
  }

  constructor() {
    
  }

  onCountryChange($event : any){
    console.log($event);
  }
  
  

  ngOnInit(): void {
  }

}
