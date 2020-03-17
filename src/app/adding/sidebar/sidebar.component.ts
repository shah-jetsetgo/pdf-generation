import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isCollapsed = false;
  isCollapsed1 = false; 
  isCollapsed2 = false;
  isCollapsed3 = false;
  isCollapsed4 = false;
}
