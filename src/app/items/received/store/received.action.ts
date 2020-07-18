import { createAction, props } from '@ngrx/store';
import { Item } from '../../models/item.model';


export const getReceived  = createAction(
  '[Received List ] Get Received ',
);

export const addItemTorecevied = createAction(
    '[Add Item To Recevied ] Add Item To Recevied',
    props<{ item: Item }>()
  );
