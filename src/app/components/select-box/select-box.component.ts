import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {

  value :string = "Select" 
  @Input() options:string ="[]";


  inputChange($event:any){
    let input_value = $event.target.value;
    let innerNodeElement  = $event.target.parentElement.querySelectorAll('.ws-search-able-list span');
    innerNodeElement.forEach((element:any) => {
      if(element.innerText.toLowerCase().indexOf(input_value.toLowerCase()) == 0 ){
        element.style.display="block"
      }else{
        element.style.display="none"
      }
    });
  }

  changeValue($event : any){
      this.value = $event.target.innerText;
      console.log(this.options);
    }
    constructor() {
    }
    
    ngOnInit(): void {
      if(typeof this.options == 'string'){
        this.options = JSON.parse(this.options)
      }
  }

}
