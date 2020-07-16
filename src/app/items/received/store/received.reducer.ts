import { Item } from '../../models/item.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as receivedAction from '../store/received.action';

export const receivedFeatureKey = 'items';

export interface ReceviedState{
	received: Item[]
}

export const initialState = {
	received: []
};

export const _receviedReducers = createReducer(
  initialState,  
  on(receivedAction.getReceived, (state, action) => {
	return state;
}),
	on(receivedAction.addItemTorecevied, (state, action) => {
		const newReceviedState = [...state.received];
		newReceviedState.push(action.item)
		return {
			...state,
			received: newReceviedState
		}
	}),
);

export function receviedReducer(state: ReceviedState | undefined, action: Action) {
	return _receviedReducers(state, action);
}
