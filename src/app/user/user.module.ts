import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarousalComponent } from './carousal/carousal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FishesComponent } from './fishes/fishes.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddingComponent } from './adding/adding.component';
import { HttpClientModule } from '@angular/common/http';
import { UserservicesService } from './userservices.service';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../adding/sidebar/sidebar.component';



const appRoutes: Routes = [
  { path: 'Sidebar', component: SidebarComponent },
  
];
@NgModule({
  declarations: [CarousalComponent, NavbarComponent, FishesComponent, ProductsComponent, AddingComponent],
  
  
  
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      
    )
  

  ],
  exports:[ FishesComponent,
    NavbarComponent,
    CarousalComponent ,
    ProductsComponent,AddingComponent
     ],
     providers: [UserservicesService]
})
export class UserModule {}
