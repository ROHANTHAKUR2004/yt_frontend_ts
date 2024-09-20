import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'



export default function SignupPage() {

  // const dispatch: AppDispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const [signupdetails, setsignupdetials] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    avatar: null,
    cover: null
  })

  const handleformchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = event.target

    if (type === "file") {
      setsignupdetials({
        ...signupdetails,
        [name]: files ? files[0] : null
      })
    } else {
      setsignupdetials({
        ...signupdetails,
        [name]: value
      })
    }
  }

  //console.log("signup", signupdetails);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()


    // const formData = new FormData();
    // formData.append('username', signupdetails.username);
    // formData.append('fullname', signupdetails.fullname);
    // formData.append('email', signupdetails.email);
    // formData.append('password', signupdetails.password);
  
    // if (signupdetails.avatar) {
    //   formData.append('avatar', signupdetails.avatar);
    // }
  
    // if (signupdetails.cover) {
    //   formData.append('cover', signupdetails.cover);
    // }
  
   // setIsLoading(true);
  
    // Debugging: Print formData keys and values
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    setIsLoading(true);

    // Dispatch the signup action with formData
    //const res = await dispatch(signup(formData)); // Assuming `signup` expects this format

  //  console.log(res); // Log the response
    setIsLoading(false);
    
  }

  return (
    <div className="container mt-1 px-4 py-8 flex justify-center items-center max-h-[100vh]">
      <Card className="w-full bg-gray-600 max-w-md lg:max-w-sm h-full flex flex-col justify-between">
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
          <CardDescription className="text-center text-red-500 text-xl font-bold">
            Create your account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="grid gap-2">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"  
                  placeholder="rohan"
                  onChange={handleformchange}
                  value={signupdetails.username}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                  id="fullname"
                  name="fullname"  
                  onChange={handleformchange}
                  value={signupdetails.fullname}
                  placeholder="Rohan Thakur"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"  
                  type="email"
                  onChange={handleformchange}
                  value={signupdetails.email}
                  placeholder="rohan@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"  
                  onChange={handleformchange}
                  value={signupdetails.password}
                  placeholder="****"
                  type="password"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="avatar">Avatar</Label>
                <Input
                  id="avatar"
                  name="avatar"  
                  onChange={handleformchange}
                  type="file"
                  accept="image/*"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cover">Cover Image</Label>
                <Input
                  id="cover"
                  name="cover"  
                  type="file"
                  onChange={handleformchange}
                  accept="image/*"
                />
              </div>
            </div>
            <Button className="w-full bg-black text-white mt-4" type="submit" disabled={isLoading}>
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm font-semibold text-muted-foreground">
            Already have an account?{" "}
            <Link to={"/signin"}>
              <button className="btn bg-black text-white rounded-md p-2 mx-3 hover:bg-red-600">
                Signin
              </button>
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
