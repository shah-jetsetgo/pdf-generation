import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfQuoteComponent } from './pdf-quote/pdf-quote.component';
import { PdfFormsComponent } from './pdf-forms/pdf-forms.component';
import { QuoterecordsComponent } from './quoterecords/quoterecords.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AiportService } from './aiport.service';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  { path: 'Records', component:QuoterecordsComponent  },
  { path: 'PDF-Quote', component:PdfQuoteComponent  },
  { path: 'Quote-form', component:PdfFormsComponent  },
  
];
@NgModule({
  declarations: [PdfQuoteComponent, PdfFormsComponent, QuoterecordsComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TimepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    DataTablesModule
  
  ],
  exports:[ PdfQuoteComponent,
    PdfFormsComponent,
    QuoterecordsComponent
  
     ],
     providers:[
      AiportService
     ]
})
export class GenQuoteModule { }
