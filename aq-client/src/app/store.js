import {configureStore} from "@reduxjs/toolkit";

import menuReducer from '../features/header/menuSlice';

export const store = configureStore({
    reducer: {
        menu: menuReducer,
    }
});