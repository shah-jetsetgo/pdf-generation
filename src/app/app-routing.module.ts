import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './adding/sidebar/sidebar.component';
import { FishesComponent } from './user/fishes/fishes.component';
import { PdfFormsComponent } from './gen-quote/pdf-forms/pdf-forms.component';

const routes: Routes = [
  { path: 'sidebar', component:SidebarComponent  },
  { path: 'pdf-doc', component:FishesComponent  },
  { path: 'Quote-form', component:PdfFormsComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
