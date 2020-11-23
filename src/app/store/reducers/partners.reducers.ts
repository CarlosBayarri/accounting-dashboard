import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Partner } from '../../models/partner.model';
import { loadPartnersError } from '../actions/partner.actions';
import { AppState } from 'src/app/app.reducer';

export interface PartnersState {
    partners  : Partner[],
    loaded : boolean,
    loading: boolean,
    error  : any
}

export interface AppStatePartners extends AppState {
    partners: PartnersState
}

export const partnersInitialState: PartnersState = {
    partners  : [],
    loaded : false,
    loading: false,
    error  : null
}

const _partnersReducer = createReducer(partnersInitialState,

    on( actions.loadPartners, state => ({ ...state, loading: true })),
    
    
    on( actions.loadPartnersSuccess, (state, { partners }) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        users: [ ...partners ] 
    })),

    on( loadPartnersError, (state, { payload }) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),




);

export function partnersReducer(state, action) {
    return _partnersReducer(state, action);
}