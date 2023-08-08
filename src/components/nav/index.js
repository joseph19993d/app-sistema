import { NavLinks } from "@/components/navLinks";
import { ArrowsIn, ArrowsOut, List, Moon, Sun } from "@phosphor-icons/react";

import colors from "tailwindcss/colors";
import { useState } from "react";

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleShowAsideMenu = () => {
    const asideEvent = new CustomEvent('toggleAsideMenu');
    window.dispatchEvent(asideEvent);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenEnabled) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullScreen(true);
      } else {
        document.documentElement.requestFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex flex-row bg-white min-w-screen text-SecondaryDark">
      <div className="flex flex-1 items-center h-8 gap-2 px-5 py-8">
      <NavLinks>
          <List onClick={handleShowAsideMenu} size={26} color={colors.blue} weight="bold" />
        </NavLinks>
        <NavLinks href="/dashboard">
          Home
        </NavLinks>
        <NavLinks href="/contact">
            Contact
        </NavLinks>
      </div>
      <div className="flex flex-1 items-center justify-end h-8 gap-2 px-5 py-8">
      <NavLinks onClick={toggleDarkMode}>
          {isDarkMode ? (
            <Sun size={20} color={colors.gray} weight="fill"/>
          ) : (
            <Moon size={20} color={colors.gray} weight="fill"/>
          )}
          </NavLinks>
      <NavLinks onClick={toggleFullscreen}>
          {isFullScreen ? (
            <ArrowsIn size={20} color={colors.gray} />
          ) : (
            <ArrowsOut size={20} color={colors.gray} />
          )}
        </NavLinks>
        
        
      </div>
    </div>
  );
};
