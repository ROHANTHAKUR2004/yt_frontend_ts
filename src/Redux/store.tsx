import { configureStore } from "@reduxjs/toolkit";
import AuthSlicereducer from "./Slices/AuthSlice";
import Dashboardreducer from "./Slices/Dashboard";
import VideoSlicereducer from "./Slices/VideoSlice";
import tweetSlicereducer from "./Slices/tweetSlice";

const store = configureStore({
    reducer : {
        auth : AuthSlicereducer,
        dash :  Dashboardreducer,
        video : VideoSlicereducer,
        tweet : tweetSlicereducer
    },
    devTools : true ,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false})
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store ;