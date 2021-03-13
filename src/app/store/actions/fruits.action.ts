import { Action } from '@ngrx/store';
import { Fruit } from 'src/app/shared/models/fruit.interface';




/* GET FRUITS */
export const GET_FRUITS = '[FRUIT] Get Fruits';
export const GET_FRUITS_SUCCESS = '[FRUIT] Get Fruits successfully';
export const GET_FRUITS_FAILURE = '[FRUIT] Get Fruits failed';

export class GetFruits implements Action {
    readonly type = GET_FRUITS
}
export class GetFruitsSuccess implements Action {
    readonly type = GET_FRUITS_SUCCESS
    constructor(public payload: Fruit[]){}
}
export class GetFruitsFailure implements Action {
    readonly type = GET_FRUITS_FAILURE
    constructor(public payload: string){}
}


/* ADD FRUITS*/
export const ADD_FRUIT = '[FRUIT] Add Fruit';
export const ADD_FRUIT_SUCCESS = '[FRUIT] Add Fruit successfully';
export const ADD_FRUIT_FAILURE = '[FRUIT] Add Fruit failed';

export class AddFruit implements Action {
    readonly type = ADD_FRUIT
    constructor(public payload: Fruit){}
}
export class AddFruitSuccess implements Action {
    readonly type = ADD_FRUIT_SUCCESS
    constructor(public payload: Fruit[]){}
}
export class AddFruitFailure implements Action {
    readonly type = ADD_FRUIT_FAILURE
    constructor(public payload: string){}
}

export type Actions = GetFruits | GetFruitsSuccess | GetFruitsFailure | AddFruit