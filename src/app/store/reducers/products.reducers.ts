import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Product } from '../../models/product.model';

export interface ProductsState {
    products: Product[]; 
}

export const ProductsInitialState: ProductsState = {
    products: [],
}

const _ProductsReducer = createReducer(ProductsInitialState,

    on(actions.setProducts, (state, {products}) => ({ ...state, products: [...products] })),
    on(actions.unSetProducts, (state) => ({ ...state, products: []})),

);

export function productsReducer(state, action) {
    return _ProductsReducer(state, action);
}