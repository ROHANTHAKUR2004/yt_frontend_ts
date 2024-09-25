import axiosinstance from "@/Configs/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
   tweetdata : []
}

export const getusertweet = createAsyncThunk("/get/tweet", async(id) => {

    try {
        const response = await axiosinstance.get(`tweet/user/${id}`);
        console.log(response);
    } catch (error) {
         console.log(error);
    }

})



const TweetSlice = createSlice({
    name : 'tweet',
    initialState,
    reducers : {},
    extraReducers : () => {

    }
})

export default TweetSlice.reducer;