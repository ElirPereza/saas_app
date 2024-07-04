"use client"
import { useEffect, useState } from "react";
import { IconSvgProps, MoonIcon, SunIcon } from "./Icons"
import { useTheme } from "next-themes"

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
    <div
      className={`flex items-center justify-center h-12 rounded-full bg-muted px-1 transition-colors duration-300 ${
        theme === "light" ? "bg-muted-foreground" : ""
      }`}
    >
      <button
        type="button"
        className={`h-10 w-10 rounded-full bg-background  shadow-sm transition-transform duration-300 ${
          theme === "light"
            ? "translate-x-1 bg-white text-gray"
            : "translate-x-[-4px] bg-background text-muted-foreground"
        }`}
        onClick={toggleTheme}
        style={{
            transition: 'background-color 0.3s, transform 0.3s',
          }}
      >
         {theme === "light" ? <SunIcon className="h-5  w-full transition-opacity duration-1000" /> : <MoonIcon className="h-5 w-full transition-opacity duration-1000" />}
      </button>
    </div>
  )
}

