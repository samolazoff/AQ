import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    classes: "burger"
};

export const burgerSlice = createSlice({
   name: 'burger',
   initialState,
   reducers: {
        open: (state) => {
            state.classes = (state.classes ==="burger open")?"burger close":"burger open";
        //     if(state.classes ==="burger open"){
        //         state.classes ="burger close"
        //     }
        //     state.classes ="burger open"
        // },
        // close: (state) => {
        //     state.classes ="burger close"
        },
   }
});

export const {open, close} = burgerSlice.actions;

export default burgerSlice.reducer;