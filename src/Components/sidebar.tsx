"use client";
import { DoorOpenIcon, LineChartIcon, MountainIcon, SettingsIcon, UsersIcon } from "./Icons";
import { ArrowBigLeft, ChevronLeft, ChevronRight, HomeIcon, LayoutGridIcon, ShoppingCartIcon } from "lucide-react";
import { UserButton, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { siteConfig } from "./config/site";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useStore } from "@/lib/store/store";
import DarkModeButton from "./darkModeButton";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { sidebaropen, toggleSidebar } = useStore()
  const {theme}= useTheme()

  const { user, signOut } = useClerk();
  console.log(user);
  return (
    <div className="   h-screen">
      <aside className={`relative flex  w-14 flex-col border-r  bg-transparent transition-all duration-300 ${sidebaropen ? "sm:w-64" : "sm:w-20"} h-full`}>
        <div className="absolute flex w-full justify-end  left-5 top-28  transition-all duration-300">
          <Button variant={"ghost"} size="icon" className={`rounded-full flex items-center border-l border ${theme === "light" ?"bg-black text-white" :"bg-white text-black" }   `} onClick={toggleSidebar} > {sidebaropen ? <ChevronLeft />: <ChevronRight />}</Button>
        </div>
        {sidebaropen ? <Card className="flex w-auto h-20 items-center border-b gap-4 justify-center m-4">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "3rem",
                  height: "3rem",
                },
              },
            }}
          />
          <div className="grid">
            <div className="text-xs text-muted-foreground">Hey 👋 </div>
            <div className="font-semibold">{user?.fullName}</div>
            <div className="text-sm text-muted-foreground">@{user?.username}</div>
          </div>
        </Card> : 
        <div className="flex w-auto h-20 items-center border-b gap-4 justify-center m-4">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "3rem",
                  height: "3rem",
                },
              },
            }}
          />
           </div>}

       
        <nav className="flex flex-1 flex-col items-start gap-2 overflow-y-auto px-2 py-4">
          {siteConfig.Sidebar.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <span className="size-7 flex items-center justify-center">{item.icons}</span> 
              {sidebaropen && item.label}
            </Link>
          ))}
        </nav>
        <div className="w-full flex flex-col justify-start items-center px-2 py-4 ">
        <DarkModeButton/>
          <Button
            onClick={() => signOut()}
            variant={"ghost"}
            className="flex w-full justify-start text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
           <span className="size-7 flex  justify-center" > <DoorOpenIcon  /></span> 
            { sidebaropen &&  <h1>Get Out </h1>}
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
