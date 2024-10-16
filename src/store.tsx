import { configureStore } from "@reduxjs/toolkit";
import productionsSlice from "./slices/productionsSlice";

export const store = configureStore({
    reducer: {
        productions: productionsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch