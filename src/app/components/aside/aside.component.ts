import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  @Input() showSidebar :boolean = true;

  @Output() changeSidebar = new EventEmitter<boolean>();
  
  toogleSidebar(){
    let newState :boolean = !this.showSidebar
    this.changeSidebar.emit(newState)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
