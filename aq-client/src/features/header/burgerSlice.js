import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    classes: ["burger"]
};

export const burgerSlice = createSlice({
   name: 'burger',
   initialState,
   reducers: {
        open: (state) => {
            state.classes = state.classes.includes('open')?["burger", "close"]:["burger", "open"];
        },
   }
});

export const {open, close} = burgerSlice.actions;

export default burgerSlice.reducer;