import { Component, OnInit } from '@angular/core';
import { CatigesService } from './catiges.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
//import{ DataTableModule} from 'angular2-datatable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'Coleccion Tipos Generales';
  Opcion: Number=0;
  selectedInsertOpt: Boolean=false;
  selectedUpdateOpt: Boolean=false;
  selectedDeleteOpt: Boolean=false;
  estaVacio:Boolean=false;
  seEnvio:Boolean=false;
  categorias: any= [];
  body:any;
  private id:any="";
  description:any="";
  form: FormGroup;

  public catige: any = {
    IdTipoGeneral: this.id,
     DesTipoGeneral: this.description
    
  };
  constructor(private catigesService:CatigesService){
    this.id= null;
    this.description="";
  }
  onSubmit(){
    console.log
    ('onsubmit si');
    //this.newCatige(this.catige);
  }


  ngOnInit(){
    this.catigesService.getAllCatiges().subscribe(catiges=>{this.categorias=catiges});

  }


}
