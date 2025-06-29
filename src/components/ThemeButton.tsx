import { Moon, Sun } from "lucide-react";
import { Button } from "./retroui/Button";
import { useEffect, useState, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function ThemeButton({className} : HTMLAttributes<HTMLPreElement>) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <>
      <Button aria-label="theme button" className={cn("rounded-md", className)} onClick={toggleDarkMode}>{isDarkMode ? <Sun size="16" /> : <Moon size="16" />}</Button>
    </>
  );
}
