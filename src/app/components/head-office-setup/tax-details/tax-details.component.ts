import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-details',
  templateUrl: './tax-details.component.html',
  styleUrls: ['./tax-details.component.css']
})
export class TaxDetailsComponent implements OnInit {

  checkbox : number = 1
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
