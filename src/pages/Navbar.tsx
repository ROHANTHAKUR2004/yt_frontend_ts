import { useState } from 'react'
import { Search, Menu, Video, Bell,  } from 'lucide-react'
import logo from "../assets/logo.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-700 shadow-sm">
      <div className="max-w-8xl mx-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
    
          <div className="flex items-center">
            <button
              className="p-2 rounded-md text-gray-400
               hover:text-gray-500 hover:bg-gray-100 
               focus:outline-none focus:ring-2 focus:ring-inset
                focus:ring-red-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            > 
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 mx-4 flex items-center">
              <img className='h-8' src={logo} alt="Logo" />
            </div>
          </div>


          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-center">
            <div className="max-w-lg w-full  lg:max-w-lg">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>

          <div className="flex items-end  gap-12">
            <button className="text-gray-500   ">
              <Video className="h-6 w-6"  />
            </button>
            <button className="text-gray-500 gap-8  ">
              <Bell className="h-6 w-6" />
            </button>
            <img src='dffgg'
             alt="User" className="h-6 w-6  rounded-full" />
          </div>
        </div>                              
      </div>

      {isMenuOpen && (
       <div className="absolute top-16 left-0 w-full bg-red-700 z-10 px-2 py-2 flex space-x-4">
       <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Home</a>
       <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Tweets</a>
       <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Liked Videos</a>
       <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Subscribers</a>
       <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">My Content</a>
       <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Histroy</a>
     </div>
     
      )}
    </nav>
  )
}


