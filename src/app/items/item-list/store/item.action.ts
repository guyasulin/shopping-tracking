import {  createAction, props } from '@ngrx/store';
import { Item } from '../../models/item.model';

  
export const addItem = createAction(
    '[Add Item] Add Item',
    props<{ item: any }>()
  );

export const removeItem = createAction(
  "[Remove Item] Remove Item",
  props<{ id: Item }>()
);

