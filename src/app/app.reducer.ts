import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './store/reducers';

export interface AppState {
   ui: reducers.UiState,
   user: reducers.AuthState,
}

export const appReducers: ActionReducerMap<AppState> = {
   ui: reducers.uiReducer,
   user: reducers.authReducer,
}