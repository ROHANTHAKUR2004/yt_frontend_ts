import axiosinstance from "@/Configs/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
   tweetdata : []
}

export const getusertweet = createAsyncThunk("/get/tweet", async(id) => {

    try {
        const response = await axiosinstance.get(`tweet/user/${id}`);
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
         console.log(error);
    }

})



// eslint-disable-next-line react-refresh/only-export-components
const TweetSlice = createSlice({
    name : 'tweet',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
         builder.addCase(getusertweet.fulfilled, (state,action) => {
            state.tweetdata = action.payload;
         })
    }
})

export default TweetSlice.reducer;