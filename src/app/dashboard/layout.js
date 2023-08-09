"use client"

import { Aside } from "@/components/aside";
import { Nav } from "@/components/nav";
import Modal from 'react-modal';


typeof windows == !  'undefined' ? Modal.setAppElement(document.body) : null



//import { SignOut, Gear, Money,   ChartBarHorizontal} from "@phosphor-icons/react";
//import colors from "tailwindcss/colors";

export default  function Layout({ children }) {
    //const pathName = usePathname
    //const isActive = useCallback((link)=>link===pathName,[])
    //console.log('pathName',pathName )

return (
    <main className="flex h-screen   overflow-hidden bg-slate-100 relative">
        <Aside className="absoulte top-0 left-0 z-0"/>
        <div className="flex flex-1 flex-col">
        <Nav/>
        <div className="flex flex-1 flex-col relative z-0">
            {children}

        </div>
        </div>
        
    </main>
)
}