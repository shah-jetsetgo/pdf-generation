import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterformComponent } from './masterform/masterform.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'pratices', component:MasterformComponent },
  
];
@NgModule({
  declarations: [MasterformComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[ MasterformComponent 
   
  ]
})
export class FormMasterModule { }
