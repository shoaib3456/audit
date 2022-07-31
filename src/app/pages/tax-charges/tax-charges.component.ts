import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-charges',
  templateUrl: './tax-charges.component.html',
  styleUrls: ['./tax-charges.component.css']
})
export class TaxChargesComponent implements OnInit {

  show :boolean = true;
  toogelSidebar(data :boolean){
    this.show = data
  }

  constructor() { }

  ngOnInit(): void {
  }

}
