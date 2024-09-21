import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import logo from "../../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "@/Redux/store"
import { login } from "@/Redux/Slices/AuthSlice"
import { stat } from "fs"
export default function SignInPage() {


  const dispatch: AppDispatch = useDispatch();
  const st = useSelector((state : unknown) => state.auth);
  const navigate = useNavigate();
  const [signindetails, setsignindetails] = useState({
     email : "",
     password : "",
  })


  const handleformchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setsignindetails({
     ...signindetails,
     [name] : value
   })
  }


  async function onSubmit(event: React.SyntheticEvent) {
     event.preventDefault()
     const response = await dispatch(login(signindetails)); 
  }

    useEffect(() => {
        if(st.status == true){
          navigate("/dash")
        }
    });

  return (
    <div className="container   mt-20  px-4 py-8 flex justify-center items-center max-h-[100vh]">
      <Card className="w-full bg-gray-600  max-w-md lg:max-w-md h-full flex flex-col justify-between">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <img
              src={logo}
              alt="Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <CardDescription className="text-center text-red-400 text-xl font-bold">
            Login To your account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="grid gap-2">
               <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                 name="email"  
                className="text-white"
                onChange={handleformchange}
                value={signindetails.email}
                id="email" 
                type="email" 
                
                placeholder="rohan@example.com"
                 required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                className="text-white"
                name="password"  
                 id="password"
                 onChange={handleformchange}
                value={signindetails.password}
                 placeholder='****' 
                 type="password" 
                 required
                    />
              </div>
              
              
            </div>
            <Button 
             className="w-full bg-black text-white mt-4" 
             type="submit" 
            >
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm font-semibold text-muted-foreground">
            Do Not have an account?{" "}
            <Link to={"/signup"}>
            <button className="btn bg-black  text-white rounded-md  p-2 mx-3 hover:bg-red-600">
                Signup
            </button>
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
    
  )
}