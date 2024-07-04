"use client"
import { IconSvgProps } from "./Icons"
import { useTheme } from "next-themes"

export default function DarkModeButton() {
    const {theme, setTheme} = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      };

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

function MoonIcon(props:IconSvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function SunIcon(props:IconSvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}