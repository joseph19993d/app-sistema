import { MenuLink } from '@/components/menuLink';
import React from 'react';
import { FaCog, FaCashRegister, FaLockOpen, FaBoxOpen, FaUserCircle, FaFileInvoiceDollar } from 'react-icons/fa';

import colors from "tailwindcss/colors"


export default async function Dashboard() {
  return (
    <main className="flex flex-1 flex-col p-6 md:p-20">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <button className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between transition duration-300 ease-in-out transform hover:scale-105">
          <div className="relative">
            <FaCashRegister size={80} color={colors.slate[600]} />
            <span className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
              <FaLockOpen size={20} color={colors.slate[600]} />
            </span>
          </div>
          <span className="ml-2 text-lg font-semibold">Abrir Caja</span>
        </button>

        <button className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between transition duration-300 ease-in-out transform hover:scale-105">
          <div className="relative">
            <FaCashRegister size={80} color={colors.slate[600]} />
            <span className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
              <FaCog size={20} color={colors.slate[600]} />
            </span>
          </div>
          <span className="ml-2 text-lg font-semibold">Gestionar Cajas</span>
        </button>

        <MenuLink href=''>
          <div className="relative">
            <FaBoxOpen size={80} color={colors.slate[600]} />
            <span className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
              <FaCog size={20} color={colors.slate[600]} />
            </span>
          </div>
          <span className="ml-2 text-lg font-semibold">Gestionar Inventario</span>
        </MenuLink>

        <MenuLink href="/dashboard/userManagement" >
          <div className="relative">
            <FaUserCircle size={80} color={colors.slate[600]} />
            <span className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
              <FaCog size={20} color={colors.slate[600]} />
            </span>
          </div>
          <span className="ml-2 text-lg font-semibold">Gestionar Usuario</span>
        </MenuLink>

        <button className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between transition duration-300 ease-in-out transform hover:scale-105">
          <div className="relative">
            <FaFileInvoiceDollar size={80} color={colors.slate[600]} />
            <span className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
              <FaCog size={20} color={colors.slate[600]} />
            </span>
          </div>
          <span className="ml-2 text-lg font-semibold">Gestionar Facturas</span>
        </button>

        <button className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
  <div className="relative">
            <FaFileInvoiceDollar size={80} color={colors.slate[600]} />
            <span className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full border border-blue-500">
              <FaCog size={20} color={colors.slate[600]} />
            </span>
          </div>
          <span className="ml-2 text-lg font-semibold">Gestionar Facturas</span>
        </button>

      </div>




    </main>
  );
}
