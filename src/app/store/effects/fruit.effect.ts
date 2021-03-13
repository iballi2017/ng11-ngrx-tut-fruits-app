import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Fruit } from 'src/app/shared/models/fruit.interface';
import { FruitsService } from 'src/app/shared/services/fruits.service';
import * as FruitActions from 'src/app/store/actions/fruits.action';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class FruitsEffect {
  
    constructor(
        private actions$: Actions,
        private _fruitsService: FruitsService
    ) { }

    @Effect()
    loadFruits$: Observable<Action> = this.actions$.pipe(
        // loadFruits$ = createEffect(() => this.actions$.pipe(
        ofType<FruitActions.GetFruits>(FruitActions.GET_FRUITS),
        // backend call
        mergeMap(() => this._fruitsService.getFruits()
        .pipe(
            map((fruits: Fruit[])=>new FruitActions.GetFruitsSuccess(fruits)),
            catchError(error=>of(new FruitActions.GetFruitsFailure(error)))
        ))
    )
    // ) 

    
    // addFruit$ = createEffect(() => this.actions$.pipe(
    //     ofType(FruitActions.ADD_FRUIT),
    //     // backend call
    //     mergeMap(() => this._fruitsService.addFruit(fruit)
    //     .pipe(
    //         map((fruits: Fruit[])=>new FruitActions.AddFruitSuccess(fruits)),
    //         catchError(error=>of(new FruitActions.AddFruitFailure(error)))
    //     ))
    // ))
    
}
