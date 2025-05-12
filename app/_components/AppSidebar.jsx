"use client"

import { Button } from "@/components/ui/button";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupContent,
    SidebarMenu
  } from "@/components/ui/sidebar"
import { SignOutButton, SignUpButton,SignedIn,UserButton,useUser} from "@clerk/nextjs";
  import {Search,Compass,GalleryHorizontalEnd,LogIn,MoveUpRight,TabletSmartphone,Twitch,Twitter} from 'lucide-react'
import { usePathname } from "next/navigation";

  const MenuOptions = [
    {
        title:'Home',
        icon:Search,
        path:'/'
    },
    {
        title:'Discover',
        icon:Compass,
        path:'/discover'
    },
    {
        title:'Library',
        icon:GalleryHorizontalEnd,
        path:'/library'
    },
    {
        title:'Sign In',
        icon:LogIn,
        path:'/sign-in'
    }
  ];
  
  export function AppSidebar() {

    const path = usePathname();
    const {user} = useUser();

    return (
      <Sidebar>
        <SidebarHeader className='bg-primary'>
            <div className="flex flex-row items-center justify-center text-white gap-2 ">
                {/* <BrainCircuit className=" text-3xl"/> */}
                <h1 className=" text-center py-3 text-3xl font-prata tracking-widest">Astrai</h1>
            </div>
        </SidebarHeader>
        <SidebarContent className='bg-primary'>
          <SidebarGroup />
          <SidebarGroupContent>
            <SidebarMenu className="text-white">
              {MenuOptions.map((item) => (
                <SidebarMenuItem key={item.title} className='px-5 py-3'>
                  <SidebarMenuButton asChild className="hover:font-bold hover:bg-transparent hover:text-white">
                    <a href={item.path} className={`${path?.includes(item.path) && 'font-bold'}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            {
              !user ? 
              <SignUpButton mode="modal">
              <Button className='bg-white text-primary w-[200px] mx-auto mt-5 p-5 cursor-pointer font-bold flex items-center justify-center hover:bg-slate-100'>Sign Up</Button>
              </SignUpButton> 
              :
              <SignOutButton>
              <Button className='bg-white text-primary w-[200px] mx-auto mt-5 p-5 cursor-pointer font-bold flex items-center justify-center hover:bg-slate-100'>Logout</Button>
              </SignOutButton>
            }

          </SidebarGroupContent>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter className='bg-primary text-white' >
          <div className="text-white flex flex-col gap-2">
            <h1 className="font-bold">Try Pro</h1>
            <p>Upgrade for image upload, smarter AI, and more Copilot</p>
            <a href="#" className="flex items-center bg-slate-300 w-[130px] rounded-sm text-center text-primary p-2"><MoveUpRight/> Learn More</a>
          </div>
          <div className="flex justify-between py-3 border-t mt-2">
            <a href="#" className="flex items-center gap-2"><TabletSmartphone/> Download</a>
            <SignedIn>
              <UserButton appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "35px",
                    height: "35px",
                  },
                },
              }}/>
            </SignedIn>
          </div>
        </SidebarFooter>
      </Sidebar>
    )
  }
  