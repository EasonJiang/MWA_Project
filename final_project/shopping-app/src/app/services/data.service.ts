import {Injectable} from '@angular/core'
import { Component,OnInit} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class DataServices {
  constructor(private _http:Http){}
  getAllCategory(){
    return this._http.get("/api").map(res => res);
  }

  getAllProductsByCategoryId(id:Number):Observable<any>{
    return this._http.get("/api/"+id).map(res => res);
  }
  getAllProducts():Observable<any>{
    return this._http.get("/api/all").map(res => res);
  }

  saveSales(model):Observable<any>{
    console.log(JSON.stringify(model));
    return this._http.post("/api/save",(req,res)=>{
      console.log('---body:'+req.body);
    }).map(res => res);
  }
}
