import { Fruit } from 'src/app/shared/models/fruit.interface';
import { FruitsService } from 'src/app/shared/services/fruits.service';
import * as FruitActions from '../actions/fruits.action';
import * as fromRoot from 'src/app/store/appState';


export interface FruitState {
    fruits: Fruit[],
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState{
    fruits: FruitState
}

const initialState: FruitState = {
    fruits: [
        // {
        //     "id": "283",
        //     "name": "apples",
        //     "category": "Simple Fruits",
        //     "price": 1.43
        // }
    ],
    loading: false,
    loaded: false,
    error: ""
}

export function fruitReducer(state = initialState, action: FruitActions.Actions) {

    switch (action.type) {
        case FruitActions.GET_FRUITS:
            return { ...state, loading: true }

        case FruitActions.GET_FRUITS_SUCCESS:
            return { ...state, loading: false, loaded: true, fruits: [action.payload]  }

        case FruitActions.GET_FRUITS_FAILURE:
            return { ...state, loading: false, loaded: false, error: action.payload }

        case FruitActions.ADD_FRUIT:

            return {
                /* returning the initial state before making changes to the state */
                ...state,
                fruits: [
                    /* returning the initial list of fruits in the array before adding the payload (new fruit) */
                    ...state.fruits, action.payload]
            }

        default:
            return state
    }

}