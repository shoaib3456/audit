import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-details',
  templateUrl: './tax-details.component.html',
  styleUrls: ['./tax-details.component.css']
})
export class TaxDetailsComponent implements OnInit {

  checkbox : number = 1
  isTableShow :boolean = false
  currentTab : number = 1

  inputChange ($event :any){
    this.checkbox = parseInt($event.target.value)
    if(!this.checkbox ){
      this.isTableShow = false
    }
  }

  changeTab(tab : number){
    this.currentTab = tab
  }


  tableShow (){
    this.isTableShow = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
