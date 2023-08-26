'use client'
import { MenuLink } from '@/components/menuLink';
import React, { useState } from "react";
import { FaCashRegister, FaLockOpen, } from 'react-icons/fa';
import {Coins, TagChevron, UserList , DropboxLogo} from '@phosphor-icons/react'
import colors from "tailwindcss/colors"


export default function Agregar({viewRenderize='welcome'}) {

  const [view,setView] = useState('welcome');
  const  changeView =(view)=>{
    setView(view);
  }

  const bg = {
  
    backgroundImage: "url('/desktopW.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    margin: 0,
    marginding: 0,
    
  };
  
  return (
    <div style={bg}>
    <main className="flex max-h-screen p-6 md:p-14 overflow-y-auto  ">

    <div className="grid grid-cols-1 gap-3 min-[320px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      
        <MenuLink  href="/dashboard/modules/views/person/index" >
          <div className="relative  " >
            <Coins size={80}  weight="fill" color={colors.slate[600]} />
            <span className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
              <UserList size={20} color={colors.slate[600]}  weight='fill'/>
            </span>
          </div>
          <span className="ml-2 text-lg font-semibold text-clip ">Ventas de las caja </span>
        </MenuLink>


        <MenuLink href="/dashboard/modules/views/person/index">
          <div className="relative">
            <Coins size={80} color={colors.slate[600]} />
            <span className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
              <TagChevron size={20} weight='fill' color={colors.slate[600]} />
            </span>
          </div>
          <span className="ml-2 text-lg font-semibold text-clip overflow-hidden">Ventas en espera</span>
        </MenuLink>

      </div>




    </main> 
    </div>
     );
}
