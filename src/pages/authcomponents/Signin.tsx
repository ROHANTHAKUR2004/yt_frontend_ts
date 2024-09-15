import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

export default function SignInPage() {


  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
 
  }

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
