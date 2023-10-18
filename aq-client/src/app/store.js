import {configureStore} from "@reduxjs/toolkit";

import burgerReducer from '../features/header/burgerSlice';

export const store = configureStore({
    reducer: {
        burger: burgerReducer
    }
});