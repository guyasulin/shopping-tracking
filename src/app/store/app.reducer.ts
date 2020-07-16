import * as fromItem from '../items/item-list/store/item.reducer'
import * as fromStore from '../items/store-list/store/store-list.reducer'
import * as fromReceived from '../items/received/store/received.reducer'
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    items: fromItem.ItemState;
    stores: fromStore.StoreState;
    received: fromReceived.ReceviedState
}

export const appReducer: ActionReducerMap<AppState> = {
    items: fromItem.itemReducers,
    stores: fromStore.storeReducers,
    received: fromReceived._receviedReducers
  };