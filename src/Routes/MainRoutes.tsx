import SignInPage from "@/pages/Auth/Signin";
import SignupPage from "@/pages/Auth/Signup";
import Playvideo from "@/pages/Playvideo";
import VideoDashboard from "@/pages/VideoDashboard";
import { Route,  Routes } from "react-router-dom";


export default function MainRoutes() {
  return (
        <Routes>
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/video/:id" element={<Playvideo/>}/>
        <Route path="/dash" element={<VideoDashboard/>}/>
       
      </Routes>
   

  )
}
