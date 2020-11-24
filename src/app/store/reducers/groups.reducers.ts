import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Group } from '../../models/group.model';

export interface GroupsState {
    explorerGroups: Group[],
    myGroups: Group[], 
}

export const GroupsInitialState: GroupsState = {
    explorerGroups: [],
    myGroups: []
}

const _GroupsReducer = createReducer(GroupsInitialState,

    on(actions.setGroups, (state, {groups}) => ({ ...state, explorerGroups: [...groups] })),
    on(actions.setMyGroups, (state, {groups}) => ({ ...state, myGroups: [...groups] })),
    on(actions.unSetGroups, (state) => ({ ...state, explorerGroups: []})),
    on(actions.unSetMyGroups, (state) => ({ ...state, myGroups: []})),

);

export function groupsReducer(state, action) {
    return _GroupsReducer(state, action);
}