import { useCallback, useEffect, useState } from "react";
import { NavLinks } from "@/components/navLinks";
import { ChartBarHorizontal, Gear, List, Money, SignOut } from "@phosphor-icons/react";
import Image from "next/image";
import colors from "tailwindcss/colors";


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
    }, [mouseOverMenu, blockAsideMenu]);

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


    return (
        <div>
            <div className="flex h-full z-50">
                <div className={`flex flex-col bg-SecondaryDark h-screen text-slate-300 transition-all z-50 
                            ${showAsideMenu ? "w-52" : "w-0  md:block"} 
                            ${showAsideMenu ? "md:w-52" : "md:w-20"}`}


                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>

                    {/* Barra lateral */}
                    <nav className={`flex flex-col max-h-full  ${showAsideMenu ? "md:flex" : "hidden md:flex"}`} >

                        {/* Logo */}
                        <div className="flex items-center h-8 gap-2 px-5 py-8 border-gray-500 border-b-[1px]">
                            <NavLinks href="/dashboard">
                                <div className="grid content-center justify-center rounded-full w-9 h-9 bg-white">
                                    {/**<Image className="" src="/logo.png" alt="Logo img" width={25} height={25} />*/}
                                </div>
                                <div className={`block text-ellipsis whitespace-nowrap   ${showAsideMenu ? "block" : "block md:hidden"}`}>
                                    <p className="text-[1.25rem] font-medium text-PrimaryLight ">AppSistema</p>
                                </div>
                            </NavLinks>
                        </div>
                        {/* Información de usuario */}
                        <div className="flex items-center gap-2 h-8 px-5 py-8 border-gray-500 border-b-[1px]">
                            <NavLinks href="/dashboard/profile">
                                <div className="grid content-center justify-center rounded-full w-9 h-9 bg-white">
                                    <Image src="/user-default.png" alt="Avatar img" width={25} height={25} />
                                </div>
                                <div className={`block text-ellipsis whitespace-nowrap overflow-hidden ${showAsideMenu ? "block" : "block md:hidden"}`}>
                                    <p className="text-[1rem]">Alexander Pierce</p>
                                </div>
                            </NavLinks>
                        </div>

                        {/* Menú de opciones */}


                        {/* Botones */}
                        <div className="h-full overflow-y-auto px-5 mb-20 mt-3 ">
                        <NavLinks className="snap-start items-center text-gray-300 hover:text-white">
                                <span className="mr-2">
                                    <ChartBarHorizontal size={26} color={colors.white} />
                                </span> {showAsideMenu ? "Statistics" : ""}
                            </NavLinks>





                        </div>

                        <div className="mb-4  px-5  static ">
                            <div className="absolute bottom-0">
                                <NavLinks className="flex items-center text-gray-300 hover:text-white">
                                    <span className="mr-2">
                                        <Gear  size={26} color={colors.white} />
                                    </span> {showAsideMenu ? "Configuraciones" : ""}
                                </NavLinks>
                                <NavLinks className="items- text-gray-300 hover:text-white">
                                    <span className="mr-2">
                                        <SignOut size={26} color={colors.white} />
                                    </span> {showAsideMenu ? "Salir" : ""}
                                </NavLinks>
                            </div>
                        </div>

                    </nav>



                </div>
            </div>
            {showAsideMenu && (
                <div
                    className={`fixed inset-0 bg-black transition-opacity ${showAsideMenu ? "opacity-25 md:opacity-25 md:block" : "opacity-0 md:opacity-25 md:hidden"
                        } z-40 md:hidden`}
                    onClick={handleShowAsideMenu}
                ></div>
            )}
        </div>
    );
};