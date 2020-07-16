import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ReceviedState, receivedFeatureKey,  } from './received.reducer'

export const selectItemState = createFeatureSelector<ReceviedState>(
    receivedFeatureKey
)


export const getRecevied = createSelector(selectItemState, state => state.received)