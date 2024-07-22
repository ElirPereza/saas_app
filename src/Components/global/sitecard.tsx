"use client";
import React, { useEffect, useState } from "react";
import { siteConfig } from "../config/site";
import { usePathname, useRouter } from "next/navigation";
import { Card } from "../ui/card";
import {
  CalendarIcon,
  MessageCircleIcon,
  SearchIcon,
  WalletIcon,
} from "lucide-react";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { BellIcon, SettingsIcon } from "./Icons";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import DarkModeButton from "./darkModeButton";

const SiteCard = () => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    const currentNavBar = siteConfig.navBar.find(
      (item) => item.href === pathname
    );
    const currentSidebar = siteConfig.Sidebar.find(
      (item) => item.href === pathname
    );

    if (currentNavBar) {
      setCurrentPage(currentNavBar.label);
    } else if (currentSidebar) {
      setCurrentPage(currentSidebar.label);
    } else {
      setCurrentPage("Page Not Found");
    }
  }, [pathname]);

  return (
    <Card className="p-4 m-5 flex justify-between">
      <p className="text-2xl font-bold">Overview {currentPage}</p>

      <div className="flex gap-5 items-center">
        <div className="relative w-80 flex">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-md bg-muted pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <DarkModeButton />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full p-2 transition-colors hover:bg-muted"
            >
              <BellIcon className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="grid gap-2 p-2">
              <div className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-muted">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CalendarIcon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    Your event has been approved
                  </p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-muted">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MessageCircleIcon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">You have a new message</p>
                  <p className="text-sm text-muted-foreground">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-muted">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <WalletIcon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    Your payment has been received
                  </p>
                  <p className="text-sm text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="#"
                className="flex w-full items-center gap-2"
                prefetch={false}
              >
                <SettingsIcon className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
};

export default SiteCard;
