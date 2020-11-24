import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './store/reducers';

export interface AppState {
   ui: reducers.UiState,
   user: reducers.AuthState,
   groups: reducers.GroupsState,
   products: reducers.ProductsState
}

export const appReducers: ActionReducerMap<AppState> = {
   ui: reducers.uiReducer,
   user: reducers.authReducer,
   groups: reducers.groupsReducer,
   products: reducers.productsReducer
}