import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-edit',
  templateUrl: './sidebar-edit.component.html',
  styleUrls: ['./sidebar-edit.component.css']
})
export class SidebarEditComponent implements OnInit {

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
