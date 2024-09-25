import axiosinstance from "@/Configs/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    videodata : {},
    comment : [],
   
}

export const videodetials = createAsyncThunk("/video/id", async (id) => {  
    try {
        const response = await axiosinstance.get(`/videos/${id}`);
         return response.data.data;

    } catch (error) {
        console.log(error);
    }
})

export const addcomment = createAsyncThunk('/add/comment', async({id, content}) =>{
   try {
      const response = await axiosinstance.post(`comments/${id}`, {
        content : content
      });
     
      return response.data.data;
     
   } catch (error) {
      console.log(error);
   }
})

export const getcommentdata  = createAsyncThunk("/comenent/id", async(id) => {
    try {
        const response = await axiosinstance.get(`comments/${id}`);
        return response.data.data;
    } catch (error) {
         console.log(error);
    }
})

// eslint-disable-next-line react-refresh/only-export-components
const VideoSlice = createSlice({
    name : 'video',
    initialState,
    reducers :{},
    extraReducers : (builder) =>{
       builder.addCase(videodetials.pending, (state)=> {
         state.videodata = {}
       })
       builder.addCase(videodetials.fulfilled, (state, action) =>{
         state.videodata = action.payload;
       })
       builder.addCase(getcommentdata.fulfilled, (state, action) =>{
        state.comment = action.payload;
       })
    }
})

export default VideoSlice.reducer