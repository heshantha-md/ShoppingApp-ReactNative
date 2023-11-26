import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from '../data/mocCategories';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        items: CATEGORIES
    },
    reducers: {
        refreshCategories: (state, action) => {
            state.items.push(action.payload.categories);
        }
    }
});

export const refreshCategories = categoriesSlice.actions.refreshCategories;
export default categoriesSlice.reducer;