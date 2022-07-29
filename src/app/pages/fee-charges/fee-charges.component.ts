import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-charges',
  templateUrl: './fee-charges.component.html',
  styleUrls: ['./fee-charges.component.css']
})
export class FeeChargesComponent implements OnInit {

  show :boolean = true;
  toogelSidebar(data :boolean){
    this.show = data
  }

  constructor() { 
  }
  
  ngOnInit(): void {
  }

}
