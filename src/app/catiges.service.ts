import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs} from '@angular/http';
import {Response, Headers, Request, RequestMethod,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class CatigesService {

  constructor(private http:Http) {

   }
   getAllCatiges(){
     return this.http.get('http://localhost:3000/api/categorias')
      .map(res=>res.json());

   }
   removeCatige(id:any): Observable<any>{
    let headers = new Headers();
let body={
  _id:id
}
 return this.http.delete('http://localhost:3000/api/catige/'+id, new RequestOptions({
   headers: headers,
   body: body
}))
    .map(res=>res.json());
   }

  public newCatige(catige: any): Observable<any>{
    console.log(catige);
        var url = 'http://localhost:3000/api/catige';
       return this.http.post(url,catige)
            .map(res => res.json());
    }
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

}
