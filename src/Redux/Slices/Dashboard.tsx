import axiosinstance from "@/Configs/axiosInstance";
import dashboard from "@/Interfaces/dashboard";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState : dashboard  = {
    loading : false,
    status : false,
    data : {}
}

export const getallchannelvideos = createAsyncThunk("/dashboard/videos" , async () =>{
    try {
        const response = await axiosinstance.get(`/dashboard/videos`);
      
        return response.data.data; 
    } catch (error) {
         console.log(error);
    }
})


const dashboradSlice = createSlice({
    name : 'dash',
    initialState,
    reducers : {},
    extraReducers : (builder)  =>{
        builder.addCase(getallchannelvideos.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(getallchannelvideos.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.status = true;
          });
          builder.addCase(getallchannelvideos.rejected, (state) => {
            state.loading = false;
            state.status = false;
          });
    }

});

export default dashboradSlice.reducer;