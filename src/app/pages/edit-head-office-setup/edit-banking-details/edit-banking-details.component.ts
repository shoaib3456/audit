import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-banking-details',
  templateUrl: './edit-banking-details.component.html',
  styleUrls: ['./edit-banking-details.component.css']
})
export class EditBankingDetailsComponent implements OnInit {

  show :boolean = true;
  toogelSidebar(data :boolean){
    this.show = data
  }
  constructor() { }

  ngOnInit(): void {
  }

}
