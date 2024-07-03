"use client";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "@/Components/ui/toaster";
import { ThemeProviderProps } from "next-themes/dist/types";
interface Props {
  children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
  );
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
