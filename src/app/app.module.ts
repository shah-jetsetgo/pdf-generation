import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AddingModule } from './adding/adding.module';
import { GenQuoteModule } from './gen-quote/gen-quote.module';
import { FormMasterModule } from './form-master/form-master.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    UserModule,
    AddingModule,
    ReactiveFormsModule,
    GenQuoteModule,
    FormMasterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
