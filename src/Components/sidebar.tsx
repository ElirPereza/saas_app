"use client";
import { DoorOpenIcon, LineChartIcon, MountainIcon, SettingsIcon, UsersIcon } from "./Icons";
import { HomeIcon, LayoutGridIcon, ShoppingCartIcon } from "lucide-react";
import { UserButton, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { siteConfig } from "./config/site";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Sidebar = () => {
  const { user, signOut } = useClerk();
  console.log(user);
  return (
    <div className=" h-screen">
      <aside className="  flex  w-14 flex-col border-r bg-transparent sm:w-64 h-full">

        <Card className="flex w-auto h-20 items-center border-b gap-4 justify-center m-4">
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
        </Card>
        <nav className="flex flex-1 flex-col items-start gap-2 overflow-y-auto px-2 py-4">
          {siteConfig.Sidebar.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              {item.icons}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="w-full flex justify-start items-center px-2 py-4 ">
          <Button
          onClick={()=> signOut()}
            variant={"ghost"}
            className="flex w-full justify-start text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <DoorOpenIcon/>
            Get Out
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
