import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() showSidebar :boolean = true;

  @Output() changeSidebar = new EventEmitter<boolean>();

  toogleSidebar(){
    let newState :boolean = !this.showSidebar
    this.changeSidebar.emit(newState)
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
