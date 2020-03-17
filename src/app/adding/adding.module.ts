import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports:[ 
    SidebarComponent 
     ]
    
})
export class AddingModule {SidebarComponent }
