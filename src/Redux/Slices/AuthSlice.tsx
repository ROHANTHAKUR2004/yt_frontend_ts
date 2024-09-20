import axiosinstance from "@/Configs/axiosInstance";
import User from "@/Interfaces/Auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: User = {
     loading : false,
     status  : false,
     username : localStorage.getItem('username') ||  '',
     token :  localStorage.getItem('token')  ||  '' 
}

export const login = createAsyncThunk("/user/login", async (data) =>{
     try {
         const response = await axiosinstance.post("/users/login", data);
         console.log(response.data.data);
         return response
     } catch (error) {
          console.log(error)
     }
})


// eslint-disable-next-line react-refresh/only-export-components
const AuthSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
     builder
    .addCase(login.pending, (state) => {
      state.loading = false;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loading = true;
      state.username = action.payload?.data?.data?.user?.username;
      state.token = action.payload?.data?.data?.refreshtoken;
      localStorage.setItem("username", action.payload?.data?.data?.user?.username  );
      localStorage.setItem("token", action.payload?.data?.data?.refreshtoken);
    
      state.status = true;
    })
    .addCase(login.rejected, (state) => {
      state.loading = false;
      state.status = false;
    });
    }
 })

 export default AuthSlice.reducer;