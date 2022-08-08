import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking-detail',
  templateUrl: './banking-detail.component.html',
  styleUrls: ['./banking-detail.component.css']
})
export class BankingDetailComponent implements OnInit {


  isTableShow :boolean = false

  tableShow (){
    this.isTableShow = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
