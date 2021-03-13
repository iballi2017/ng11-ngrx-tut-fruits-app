import { Component, OnInit } from '@angular/core';
import { Fruit, FruitCategory } from 'src/app/shared/models/fruit.interface';
import { FruitsService } from 'src/app/shared/services/fruits.service';
import { Store } from '@ngrx/store';
import * as FruitActions from 'src/app/store/actions/fruits.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/appState';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fruitList!: Fruit[];
  fruits: any;
  fruitForm!: FormGroup;
  fruitCategories: FruitCategory[] = [
    { name: "Achene", value: "Achene"},
    { name: "Berry", value: "Berry"},
    { name: "Caryopsis", value: "Caryopsis"},
    { name: "Drupe", value: "Drupe"},
    { name: "Legume", value: "Legume"},
    { name: "Nut", value: "Nut"}
  ]
  

  constructor(private _fruitsSvc: FruitsService, private _store: Store<AppState>, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.handleGetFruits();

    /* */
    this._store.dispatch(new FruitActions.GetFruits())
    this._store.subscribe((state:any)=>
    {
      console.log(state);
      console.log(state.fruits.fruits);
      console.log(new Array(state.fruits.fruits)[0]);
      console.log(Array.isArray(state.fruits.fruits));
      console.log(typeof(state.fruits.fruits))
      this.fruits = state.fruits.fruits[0]
    }
    );


    this.fruitForm = this._formBuilder.group({
      id: new Date().toLocaleTimeString(),
      name: ["", Validators.required],
      price: ["", Validators.required],
      category: ["", Validators.required]
    })

  }

  handleGetFruits(){
    this._fruitsSvc.getFruits().subscribe((response:any)=>{
      console.log(response)
      this.fruitList = response;
      console.log(this.fruitList.length)
    })
  }

  handleAddFruit(){
    console.log(this.fruitForm.value);
    this._store.dispatch(new FruitActions.AddFruit(this.fruitForm.value));
  }
}
