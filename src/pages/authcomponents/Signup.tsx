import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

export default function SignupPage() {


  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
 
  }

  return (
    
    <div className="container   mt-1 px-4 py-8 flex justify-center items-center max-h-[100vh]">
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
            Create your account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="grid gap-2">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input 
                 className="text-white"
                id="username" 
                placeholder="rohan"
                 required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="fullname">Ful Name</Label>
                <Input 
                className="text-white"
                id="fullname" 
                placeholder="Rohan Thakur"
                 required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                className="text-white"
                id="email" 
                type="email" 
                placeholder="rohan@example.com"
                 required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                className="text-white"
                 id="password"
                 placeholder='****' 
                 type="password" 
                   required
                    />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="avatar">Avatar</Label>
                <Input
                 id="avatar"
                  type="file" 
                  accept="image/*" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cover">Cover Image</Label>
                <Input 
                id="cover" 
                type="file" 
                accept="image/*" />
              </div>
            </div>
            <Button 
             className="w-full bg-black text-white mt-4" 
             type="submit" 
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to={"/signin"}>
            <button className="btn bg-black  text-white rounded-md  p-2 mx-3 hover:bg-red-600">
                SignIn
            </button>
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
    
  )
}
