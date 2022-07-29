import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headoffice-setup',
  templateUrl: './headoffice-setup.component.html',
  styleUrls: ['./headoffice-setup.component.css']
})
export class HeadofficeSetupComponent implements OnInit {

  currentTab : number = 1
  
  next(){
    if(this.currentTab < 5){
      this.currentTab +=1
    }
  }
  previous(){
    if(this.currentTab > 1){
      this.currentTab -=1
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
