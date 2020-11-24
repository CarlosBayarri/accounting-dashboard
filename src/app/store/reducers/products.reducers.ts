import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Product } from '../../models/product.model';

export interface ProductsState {
    explorerProducts: Product[],
    myProducts: Product[]
}

export const ProductsInitialState: ProductsState = {
    explorerProducts: [],
    myProducts: []
}

const _ProductsReducer = createReducer(ProductsInitialState,

    on(actions.setProducts, (state, {products}) => ({ ...state, explorerProducts: [...products] })),
    on(actions.setMyProducts, (state, {products}) => ({ ...state, myProducts: [...products] })),
    on(actions.unSetProducts, (state) => ({ ...state, explorerProducts: []})),
    on(actions.unSetMyProducts, (state) => ({ ...state, myProducts: []})),

);

export function productsReducer(state, action) {
    return _ProductsReducer(state, action);
}