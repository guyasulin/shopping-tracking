import {  createAction, props } from '@ngrx/store';
import { Item } from '../../models/item.model';

  
export const addItem = createAction(
    '[Item Add Component] Add Item',
    props<{ item: any }>()
  );

export const removeItem = createAction(
  "[Item Components] Remove Item",
  props<{ id: Item }>()
);

