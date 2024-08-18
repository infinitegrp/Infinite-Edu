import React, { useState } from "react";
import { SunOutlined, MoonOutlined, LoadingOutlined } from "@ant-design/icons";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "./ThemeAnimation";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setDarkMode] = React.useState(false);

  const handleThemeSwitch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      setDarkMode(!isDarkMode);
    }, 200);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }; 

  return (
    <>
      <button
        onClick={handleThemeSwitch}
        className="bg-gray-100 dark:bg-gray-800 dark:text-white text-black rounded-full w-7"
      >
        {isLoading ? (
          <LoadingOutlined spin />
        ) : theme === "dark" ? (
          <SunOutlined />
        ) : (
          <MoonOutlined />
        )}
      </button>
      {isLoading && (
        <div className="backdrop-blur-lg  absolute min-h-screen w-full -mt-2 m-0 p-0 flex flex-col justify-center items-center bg-transparent transition-background duration-200">
          <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={isDarkMode}
            size={120}
          />
        </div>
      )}
    </>
  );
};

export default ThemeSwitch;
