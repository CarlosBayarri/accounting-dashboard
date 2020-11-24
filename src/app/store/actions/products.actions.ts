import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const setProducts = createAction('[Auht] setProducts', props<{ products: Product}>());

export const unSetProducts = createAction('[Auht] unSetProducts');