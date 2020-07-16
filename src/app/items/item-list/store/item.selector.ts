import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  ItemState, itemFeatureKey } from './item.reducer';

export const selectItemState = createFeatureSelector<ItemState>(
    itemFeatureKey
)

export const getItems = createSelector(selectItemState, state => state.items)
