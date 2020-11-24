import { createAction, props } from '@ngrx/store';
import { Group } from '../../models/group.model';

export const setGroups = createAction('[Auht] setGroups', props<{ groups: Group[]}>());

export const unSetGroups = createAction('[Auht] unSetGroups');