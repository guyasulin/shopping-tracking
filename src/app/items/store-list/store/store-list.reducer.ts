import {  createReducer, Action, on } from '@ngrx/store';
import * as StoreActions from "../store/store-list.action";
import { Item } from '../../models/item.model';

export const storelistFeatureKey = 'storelist';

export interface StoreState{
   stores: Item[];
  }

 export const initialState = {
    stores: []
  }

  export const storeReducers = createReducer(
    initialState,
    on(StoreActions.getStores, (state, action) => {
        return {
          ...state,
        } 
      }),

      on(StoreActions.getStoresSuccess, (state, action) => {
        return {
          ...state,
          stores: action.stores
        } 
      }),
 
);


  export function reducer(state: StoreState | undefined, action: Action) {
    return storeReducers(state, action)
  }

