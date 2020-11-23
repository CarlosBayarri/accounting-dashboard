import { createAction, props } from '@ngrx/store';
import { Partner } from '../../models/partner.model';

export const loadPartners = createAction('[Partners] Load partners');

export const loadPartnersSuccess = createAction(
    '[Partners] Load partners Success',
    props<{ partners: Partner[] }>()
);

export const loadPartnersError = createAction(
    '[Partners] Load partners Error',
    props<{ payload: any }>()
);

