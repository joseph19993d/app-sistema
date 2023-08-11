import { MenuLink } from '@/components/menuLink';
import React from 'react';
import { FaCog, FaCashRegister, FaLockOpen, FaBoxOpen, FaUserCircle, FaFileInvoiceDollar } from 'react-icons/fa';

import colors from "tailwindcss/colors"

export default async function Dashboard() {
  return (
    
    <main className="flex max-h-screen p-6 md:p-14 overflow-y-auto">
    <div className="grid grid-cols-1 gap-3 min-[320px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       <MenuLink >
          <div className="relative">
            <FaCashRegister size={80} color={colors.slate[600]} />
            <span className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
              <FaLockOpen size={20} color={colors.slate[600]} />
            </span>
          </div>
          <span className="ml-2 text-lg font-semibold text-clip ">Abrir Caja</span>
        </MenuLink>

        <MenuLink >
          <div className="relative">
            <FaCashRegister size={80} color={colors.slate[600]} />
            <span className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
              <FaCog size={20} color={colors.slate[600]} />
            </span>
          </div>
          <span className="ml-2 text-lg font-semibold text-clip overflow-hidden">Gestionar Cajas</span>
        </MenuLink>

        <MenuLink href=''>
          <div className="relative">
            <FaBoxOpen size={80} color={colors.slate[600]} />
            <span className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
              <FaCog size={20} color={colors.slate[600]} />
            </span>
          </div>
          <span className="ml-2 text-lg font-semibold text-clip overflow-hidden">Gestionar Inventario</span>
        </MenuLink>

        <MenuLink href="/dashboard/userManagement" >
          <div className="relative">
            <FaUserCircle size={80} color={colors.slate[600]} />
            <span className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
              <FaCog size={20} color={colors.slate[600]} />
            </span>
          </div>
          <span className="ml-2 text-lg font-semibold text-clip overflow-hidden">Gestionar Usuario</span>
        </MenuLink>

        <MenuLink >
          <div className="relative">
            <FaFileInvoiceDollar size={80} color={colors.slate[600]} />
            <span className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
              <FaCog size={20} color={colors.slate[600]} />
            </span>
          </div>
          <span className="ml-2 text-lg font-semibold text-clip overflow-hidden">Gestionar Facturas</span>
        </MenuLink>

        <MenuLink >
          <div className="relative">
            <FaFileInvoiceDollar size={80} color={colors.slate[600]} />
            <span className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full ">
              <FaCog size={20} color={colors.slate[600]} />
            </span>
          </div>
          <span className="ml-2 text-lg font-semibold text-clip overflow-hidden">Gestionar Facturas</span>
        </MenuLink>

      </div>




    </main>  );
}
