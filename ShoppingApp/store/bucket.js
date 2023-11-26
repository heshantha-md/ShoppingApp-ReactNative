import { createSlice } from "@reduxjs/toolkit";
import CartItem from "../models/CartItem";

const bucketSlice = createSlice({
   name: 'bucket',
   initialState: {
        ids: []
   },
   reducers: {
        addItem: (state, action) => {
            state.ids.push(new CartItem('ct' + action.payload.id + state.ids.length, action.payload.id));
        },
        removeItem: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
   }
});

export const addItem = bucketSlice.actions.addItem;
export const removeItem = bucketSlice.actions.removeItem;
export default bucketSlice.reducer;