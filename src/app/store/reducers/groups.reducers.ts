import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Group } from '../../models/group.model';

export interface GroupsState {
    groups: Group[]; 
}

export const GroupsInitialState: GroupsState = {
    groups: [],
}

const _GroupsReducer = createReducer(GroupsInitialState,

    on(actions.setGroups, (state, {groups}) => ({ ...state, groups: [...groups] })),
    on(actions.unSetGroups, (state) => ({ ...state, groups: []})),

);

export function groupsReducer(state, action) {
    return _GroupsReducer(state, action);
}