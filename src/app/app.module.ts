import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CatigesService }from './catiges.service';
import { TiposGeneralesComponent } from './tipos-generales/tipos-generales.component';
import{ DataTableModule} from 'angular2-datatable';
import { GeneralesComponent } from './generales/generales.component';
import { TipoEstatusComponent } from './tipo-estatus/tipo-estatus.component';
import { EstatusComponent } from './estatus/estatus.component'
const appRoutes: Routes = [
  { path: 'catige',
    component: TiposGeneralesComponent,
    data: { title: 'Tipos no Generales' } },
   { path: 'cagene', component: GeneralesComponent },
   { path:'caties',component:TipoEstatusComponent},
   { path:'caesta',component:EstatusComponent}
];

@NgModule({
  declarations: [
    
    AppComponent,
    TiposGeneralesComponent,
    GeneralesComponent,
    TipoEstatusComponent,
    EstatusComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    DataTableModule
   
  ],
  providers: [CatigesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
