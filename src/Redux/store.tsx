import { configureStore } from "@reduxjs/toolkit";
import AuthSlicereducer from "./Slices/AuthSlice";

const store = configureStore({
    reducer : {
        auth : AuthSlicereducer
    },
    devTools : true 
})

export default store ;