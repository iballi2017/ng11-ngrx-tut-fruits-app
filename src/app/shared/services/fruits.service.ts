import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruit } from 'src/app/shared/models/fruit.interface';
// import { Store } from '@ngrx/store';
// import * as FruitActions from 'src/app/store/actions/fruits.action';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  

  baseUrl = "http://localhost:3300";

  constructor(private _http: HttpClient) { }

  
  getFruits():Observable<Fruit[]>{
    return this._http.get<Fruit[]>(`${this.baseUrl}/fruits`);
  }


  addFruit(fruit:Fruit){
    return this._http.post(`${this.baseUrl}/fruits`, fruit);
  }
}
