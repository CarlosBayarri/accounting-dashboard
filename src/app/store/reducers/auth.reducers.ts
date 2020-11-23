import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { User } from '../../models/user.model';

export interface AuthState {
    user: User; 
}

export const AuthInitialState: AuthState = {
   user: null,
}

const _authReducer = createReducer(AuthInitialState,

    on(actions.setUser, (state, {user}) => ({ ...state, user: {...user}})),
    on(actions.unSetUser, (state) => ({ ...state, user: null})),

);

export function authReducer(state, action) {
    return _authReducer(state, action);
}