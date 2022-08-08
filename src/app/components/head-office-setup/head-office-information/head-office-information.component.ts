import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-office-information',
  templateUrl: './head-office-information.component.html',
  styleUrls: ['./head-office-information.component.css']
})
export class HeadOfficeInformationComponent implements OnInit {


  getNumber($event : any){
    console.log($event);
  }

  constructor() {
    
   }

   

  onCountryChange($event : any){
    console.log($event);
  }
  
  

  ngOnInit(): void {
  }

}
