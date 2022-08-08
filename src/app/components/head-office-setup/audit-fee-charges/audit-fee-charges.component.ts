import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit-fee-charges',
  templateUrl: './audit-fee-charges.component.html',
  styleUrls: ['./audit-fee-charges.component.css']
})
export class AuditFeeChargesComponent implements OnInit {

  checkbox : number = 0
  isTableShow :boolean = false

  inputChange ($event :any){
    this.checkbox = parseInt($event.target.value)
    if(!this.checkbox ){
      this.isTableShow = false
    }
  }


  tableShow (){
    this.isTableShow = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
