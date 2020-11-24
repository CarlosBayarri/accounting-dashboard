import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const setProducts = createAction('[Auht] setProducts', props<{ products: Product[]}>());
export const setMyProducts = createAction('[Auht] setMyProducts', props<{ products: Product[]}>());

export const unSetProducts = createAction('[Auht] unSetProducts');
export const unSetMyProducts = createAction('[Auht] unSetMyProducts');