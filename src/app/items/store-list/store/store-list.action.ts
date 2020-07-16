import { createAction, props } from '@ngrx/store';

export const getStores = createAction(
    "[Get Stores]  Get Stores",
  );
  
  export const getStoresSuccess = createAction(
    "[Get Stores Success]  Get Stores Success",
    props<{ stores: any[] }>()
  );