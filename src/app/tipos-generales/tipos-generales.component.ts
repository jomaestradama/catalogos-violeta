import { Component, OnInit } from '@angular/core';
import { CatigesService } from '../catiges.service';
@Component({
  selector: 'app-tipos-generales',
  templateUrl: './tipos-generales.component.html',
  styleUrls: ['./tipos-generales.component.css']
})
export class TiposGeneralesComponent implements OnInit {
  categorias: any= [];
  query: any='';
  algo:any="";
  cont:number=0;
  cont2:number=0;
  cont3:number=0;
selectedInsertOpt: Boolean=false;
  selectedUpdateOpt: Boolean=false;
  selectedDeleteOpt: Boolean=false;
  estaVacio:Boolean=false;
  seEnvio:Boolean=false;
    private id:any="";
  description:any="";

  
  

 constructor(private catigesService:CatigesService){
    this.id= null;
    this.description="";
   
 }

  ngOnInit(){

    this.catigesService.getAllCatiges().subscribe(catiges=>{this.categorias=catiges});
    
 }
  ngOnChanges(){
    this.catigesService.getAllCatiges().subscribe(catiges=>{this.categorias=catiges});
  }

  remove(id:any){
    console.log('Quieres eliminar esto '+id);
    this.catigesService.removeCatige(id).subscribe(()=>{this.categorias=this.categorias});
    window.location.reload();
  }

  public insertar():void{
    
    console.log('Dio Clic en insertar');
    this.selectedInsertOpt=true;
    this.selectedUpdateOpt=false;
    this.selectedDeleteOpt=false;
    
    this.cont=this.cont + 1;
    if(this.cont>1){
      this.selectedInsertOpt=false;
      this.cont=0;
    }

  }

  public modificar():void{
    console.log('Dio Clic en modificar');
      this.selectedUpdateOpt=true;
      this.selectedInsertOpt=false;
      this.selectedDeleteOpt=false;
       this.cont2=this.cont2 + 1;
    if(this.cont2>1){
      this.selectedUpdateOpt=false;
      this.cont2=0;
    }
  }
    public eliminar():void{
      this.selectedDeleteOpt=true;
      this.selectedUpdateOpt=false;
      this.selectedInsertOpt=false;
    console.log('Dio Clic en eliminar');
      this.cont3=this.cont3 + 1;
    if(this.cont3>1){
      this.selectedUpdateOpt=false;
      this.cont3=0;
    }
  }


  closeSuccess(){
    this.seEnvio=false;
  }
  addCatige(id:Number,description:String){
    if(!id||!description){this.estaVacio=true;}else{
      this.estaVacio=false;
       window.location.reload();
    }

     var objeto = {IdTipoGeneral:id,DesTipoGeneral:description};
    if(!id){return;}
    this.catigesService.newCatige(objeto).subscribe(catiges=>{this.categorias=catiges});
    this.id=0;
    this.description="";
    this.seEnvio=true;

    
  }

  

}
