import { configureStore } from "@reduxjs/toolkit";
import AuthSlicereducer from "./Slices/AuthSlice";

const store = configureStore({
    reducer : {
        auth : AuthSlicereducer
    },
    devTools : true 
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store ;