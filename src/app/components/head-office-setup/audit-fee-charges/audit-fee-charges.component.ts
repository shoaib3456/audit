import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit-fee-charges',
  templateUrl: './audit-fee-charges.component.html',
  styleUrls: ['./audit-fee-charges.component.css']
})
export class AuditFeeChargesComponent implements OnInit {

  checkbox : number = 0
  currentTab : number = 1
  isTableShow :boolean = false

  changeTab(tab : number){
    this.currentTab = tab
  }

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
