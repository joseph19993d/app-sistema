'use client'
import { MenuLink } from '@/components/menuLink';
import React, { useState } from "react";
import { FaCog, FaCashRegister, FaLockOpen, FaBoxOpen, FaUserCircle, FaFileInvoiceDollar } from 'react-icons/fa';
import { CiBag1 } from 'react-icons/ci';

import colors from "tailwindcss/colors"


export default function Dashboard({viewRenderize='welcome'}) {

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
    index: 1,
    
  };

  const logo = {
  
    backgroundImage: "url('/logo.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minweight: '100vw',
    margin: 0,
    marginding: 0,
    index: 10,
    
  };

  return (
    <main className=' 
    flex 
    justify-center
    '
    style={bg}
    >
       <div className='' style={logo}>
        ------------------------------------------------------------------
       </div>
      
    </main>

    
  );
}
