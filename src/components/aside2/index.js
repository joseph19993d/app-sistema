import { useCallback, useEffect, useState } from "react";
import { NavLinks } from "@/components/navLinks";
import { ChartBarHorizontal, Gear, List, Money, SignOut } from "@phosphor-icons/react";
import Image from "next/image";
import colors from "tailwindcss/colors";
import './styles.css';


export const Aside = () => {
    const [mouseOverMenu, setMouseOverMenu] = useState(false);
    const [blockAsideMenu, setBlockAsideMenu] = useState(false);
    
    const [showAsideMenu, setShowAsideMenu] = useState(false);

    const defineShowAside = useCallback(() => {
        if (mouseOverMenu || blockAsideMenu) {
            setShowAsideMenu(true);
        } else {
            setShowAsideMenu(false);
        }
        console.log("mouseOverMenu:", mouseOverMenu, "blockAsideMenu:", blockAsideMenu, "showAsideMenu:", showAsideMenu);
    }, [mouseOverMenu, blockAsideMenu ]);

    const handleMouseEnter = useCallback(() => {
        setMouseOverMenu(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setMouseOverMenu(false);
    }, []);

    const handleShowAsideMenu = useCallback(() => {
        setBlockAsideMenu((prevState) => !prevState);
    }, []);

    useEffect(() => {
        defineShowAside();
    }, [defineShowAside]);

    useEffect(() => {
        const asideEvent = () => {
            handleShowAsideMenu();
        };

        window.addEventListener("toggleAsideMenu", asideEvent);

        return () => {
            window.removeEventListener("toggleAsideMenu", asideEvent);
        };
    }, [handleShowAsideMenu]);

    const [isClicked, setIsClicked] = useState(true);

    const handleClick = () => {
      setIsClicked(!isClicked);
    };
    
    

return (
        
        <div >
            <button className={` ${!isClicked?'closed':'shown' }  ${ isClicked&&showAsideMenu ? " transition-all w-52 " : " transition-all w-20 " } ` } onClick={handleClick}> {!isClicked? 'Mostrar':'Ocultar'}</button>
        <div 
        className={` ${!isClicked?'sideHidden':'' } flex flex-col bg-SecondaryDark h-full text-slate-300 transition-all ${
            showAsideMenu ? "w-52 " : "w-20 "
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >

        {/* Menu */}

        {/* hara que cambie todo */}
           
             <div className="  ">
                    <div className="flex items-center h-8 gap-2 px-5 py-8 border-gray-500 border-b-[1px]">
                        <NavLinks href="/dashboard">
                            <div className="grid content-center justify-center rounded-full w-9 h-9 bg-white">
                                <Image className="" src="/logo.png" alt="Logo img" width={25} height={25} />
                            </div>
                            <div className={`block text-ellipsis whitespace-nowrap overflow-hidden w-50 ${showAsideMenu ? "" : "hidden"}`}>
                                <p className="text-[1.25rem] font-medium text-PrimaryLight">AppSistema</p>
                            </div>
                        </NavLinks>
                    </div>

                    <div className="flex items-center gap-2 h-8 px-5 py-8 border-gray-500 border-b-[1px]">
                        <NavLinks href="/dashboard/profile">
                            <div className="grid content-center justify-center rounded-full w-9 h-9 bg-white">
                                <Image src="/user-default.png" alt="Avatar img" width={25} height={25} />
                            </div>
                            <div className={`block text-ellipsis whitespace-nowrap overflow-hidden w-52 ${showAsideMenu ? "" : "hidden"}`}>
                                <p className="text-[1rem]">Alexander Pierce</p>
                            </div>
                        </NavLinks>
                    </div>
            </div>
                    <nav className="mt-8 h-full px-5">
                        <ul className="flex flex-col justify-between h-full">
                            <div>
                                <li>
                                    <NavLinks href="/dashboard/stats" icon={<ChartBarHorizontal size={26} color={colors.white} />}>
                                        <p className={`${showAsideMenu ? "" : "hidden"}`}>Statistics</p>
                                    </NavLinks>
                                </li>
                                <li>
                                    <NavLinks href="/dashboard/bills" icon={<Money size={26} color={colors.white} />}>
                                        <p className={`${showAsideMenu ? "" : "hidden"}`}>Bills</p>
                                    </NavLinks>
                                </li>
                            </div>
                            <div>
                                <div className="flex flex-col gap-3">
                                    <li>
                                        <NavLinks href="/dashboard/settings" icon={<Gear className="" size={26} color={colors.white} />}>
                                            <p className={`${showAsideMenu ? "" : "hidden"}`}>Settings</p>
                                        </NavLinks>
                                    </li>
                                </div>
                                <li className="block text-ellipsis whitespace-nowrap overflow-hidden">
                                    <NavLinks as="button" icon={<SignOut size={26} color={colors.white} />}>
                                        <p className={`${showAsideMenu ? "" : "hidden"}`}>Log out</p>
                                    </NavLinks>
                                </li>
                            </div>
                        </ul>
                    </nav>

                </div>
            
        </div>
    );
};