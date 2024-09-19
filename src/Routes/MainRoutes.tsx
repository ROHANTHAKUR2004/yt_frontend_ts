import SignInPage from "@/pages/Auth/Signin";
import SignupPage from "@/pages/Auth/Signup";
import { Route, Routes } from "react-router-dom";


export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signin" element={<SignInPage/>}/>
    </Routes>
  )
}
