import React, { useEffect, useState } from "react";
import { useGlobalcontext } from "../context";
import { Moon, Sun } from "./icons";

const DL = () => {
  const { appPageTag } = useGlobalcontext();
  const [dkm, setDkm] = useState(false);

  useEffect(() => {
    if (appPageTag) {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        appPageTag.classList.add("dark");
        console.log("darkreder");
        setDkm(true);
      } else {
        appPageTag.classList.remove("dark");
        console.log("lightreder");
        setDkm(false);
      }
    }
  }, [appPageTag]);

  const handleDarkMood = () => {
    if (appPageTag.classList.contains("dark")) {
      appPageTag.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDkm(false);
    } else {
      appPageTag.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDkm(true);
    }
  };

  return (
    <div
      className={`fixed p-5 rounded-full bottom-9 right-9 cursor-pointer z-20 shadow-xl transition bg-black dark:bg-white`}
      onClick={handleDarkMood}
    >
      {dkm ? <Sun /> : <Moon />}
    </div>
  );
};

export default DL;
