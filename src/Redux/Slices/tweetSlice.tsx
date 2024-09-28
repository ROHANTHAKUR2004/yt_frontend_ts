import axiosinstance from "@/Configs/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
   tweetdata : []
}

export const getusertweet = createAsyncThunk("/get/tweet", async(id) => {

    try {
        const response = await axiosinstance.get(`tweet/user/${id}`);
        return response.data.data;
    } catch (error) {
         console.log(error);
    }

})


export const deletetweet = createAsyncThunk('/create/tweet', async(id) => {
    try {
        const response = await axiosinstance.delete(`/tweet/${id}`);
        return response.data.data;
       
     } catch (error) {
        console.log(error);
     }
})

export const updatetweet = createAsyncThunk('/create/tweet', async({id ,content}) => {
    try {
        const response = await axiosinstance.patch(`/tweet/${id}`,{
          content : content
        });
        console.log("createtweet", response);
        return response.data.data;
       
     } catch (error) {
        console.log(error);
     }
})


export const createtweet = createAsyncThunk('/create/tweet', async(tweet) => {
    try {
        const response = await axiosinstance.post(`/tweet/`,{
          content : tweet
        });
        console.log("createtweet", response);
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