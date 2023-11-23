import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '../data/mocProducts'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: PRODUCTS
    },
    reducers: {
        refreshProducts: (state, action) => {
            state.items.push(action.payload.products);
        }
    }
});

export const refreshProducts = productsSlice.actions.refreshProducts;
export default productsSlice.reducer;