import Logo from "@/public/Icons/Logo"
import Navbar from "./Navbar/Navbar"
import SearchBar from "../templates/Header/SearchBar"
import Profile from "../templates/Header/Profile"
import Save from "@/public/Icons/Save"
import { Category, User } from "@/public/Types/types"

function Header({ userInfo, categories }: { categories: Category[], userInfo: User }) {
   return (
      <div className="w-full h-[48px] flex flex-row justify-between items-center mb-12">
         <div className="flex flex-row items-center gap-x-4">
            <Logo />
            <Navbar categories={categories } />
         </div>
         <div className="h-full flex flex-row items-center gap-x-4">
            <SearchBar />
            <Profile username={userInfo.username} avatar={userInfo.avatar} />
            <div className="h-full w-[48px] flex justify-center items-center rounded-xl bg-[#F5F5F5]">
               <Save />
            </div>
         </div>

      </div>
   )
}

export default Header