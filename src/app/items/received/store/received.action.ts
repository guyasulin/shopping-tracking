import { createAction, props } from '@ngrx/store';
import { Item } from '../../models/item.model';


export const getReceived  = createAction(
  '[Received List Component] Get Received ',
);

export const addItemTorecevied = createAction(
    '[Add Item To Recevied Component] Add Item To Recevied',
    props<{ item: Item }>()
  );
