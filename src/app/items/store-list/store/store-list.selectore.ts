import { createFeatureSelector, createSelector } from '@ngrx/store'
import { StoreState, storelistFeatureKey } from './store-list.reducer'

export const selectItemState = createFeatureSelector<StoreState>(
    storelistFeatureKey
)


export const getCurrntStores = createSelector(selectItemState, state => state.stores)