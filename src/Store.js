import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./components/Product";

export const store=configureStore({
    reducer: {
        product:ProductReducer
    },
})