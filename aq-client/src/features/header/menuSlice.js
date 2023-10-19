import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    classesBurger: ["burger"],
    classesMenuPersonal: ["menu-personal"],
    classesMenuMain: ["menu-main"],
};

export const burgerSlice = createSlice({
   name: 'burger',
   initialState,
   reducers: {
        open: (state) => {
            if(state.classesBurger.includes('open')){
                state.classesBurger = ["burger", "close"];
                state.classesMenuPersonal = ["menu-personal"];
                state.classesMenuMain = ["menu-main"];
            }else{
                state.classesBurger = ["burger", "open"];
                state.classesMenuPersonal = ["menu-personal", "d-flex"];
                state.classesMenuMain = ["menu-main", "d-flex"];
            }
        },
   }
});

export const {open} = burgerSlice.actions;

export default burgerSlice.reducer;