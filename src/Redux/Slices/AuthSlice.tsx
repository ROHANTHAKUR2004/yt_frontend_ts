import User from "@/Interfaces/Auth";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
     loading : false,
     status  : false,
     userdata : {},
}

// eslint-disable-next-line react-refresh/only-export-components
const AuthSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {},
    extraReducers : () => {

    }
 })

 export default AuthSlice.reducer;