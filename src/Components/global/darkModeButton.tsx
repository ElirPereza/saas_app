"use client"
import { useEffect, useState } from "react";
import { IconSvgProps, MoonIcon, SunIcon } from "./Icons"
import { useTheme } from "next-themes"
import { Toggle } from "../ui/toggle";

export default function DarkModeButton() {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false);
    console.log(theme)
    useEffect(() => {
      setMounted(true);
    }, []);
  
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
    if (!mounted) return null; 

  return (

    <Toggle
    variant="outline"
    className={`h-10 w-10 flex items-center justify-center rounded-full inset-0 ${
      theme === "dark" ? "bg-primary text-primary-foreground" : "bg-background border-input"
    }`}
    onClick={toggleTheme}
  >
    {theme === "light" ? (
      <SunIcon className="h-6 w-6" />
    ) : (
      <MoonIcon className="h-6 w-6" />
    )}
  </Toggle>
  )
}

