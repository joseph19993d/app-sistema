'use client'
import React from 'react';
import { UsersTable } from '@/components/table/usersTable';
import { Actions } from '@/components/table';
import { Plus } from '@phosphor-icons/react';
import colors from 'tailwindcss/colors';
import { FaSearch } from 'react-icons/fa';

const fakeUserData = [
  {
    id: 'U1',
    name: 'John Doe assssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    email: 'john@example.com',
    role: 'Admin',
  },
  {
    id: 'U2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
  },
  // ... otros datos falsos de usuarios ...
];

<<<<<<< HEAD
export default  function UserManagement() {
  
return (
    <main className="flex flex-1 flex-col p-20">
=======
export default async function UserManagement() {
  return (
    <main className="flex flex-1 flex-col p-5 md:p-20">
>>>>>>> 2eff9ee7d9cd424f64d4b062264b29b36eb75853
      <div className="bg-white rounded-lg shadow-md p-4 mb-5">
        <h2 className="text-3xl font-semibold text-center md:text-left mb-4">User Management</h2>
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg py-1 px-2 focus:outline-none focus:border-PrimaryDark"
          />
          <button className="bg-PrimaryDark hover:bg-SecondaryDark text-white rounded-lg py-1 px-3 flex items-center focus:outline-none">
            <FaSearch size={20} color={colors.white} />
          </button>
          <button className="bg-PrimaryDark hover:bg-SecondaryDark text-white rounded-lg py-1 px-3 flex items-center focus:outline-none">
            <Plus size={20} color={colors.white} weight="bold" />
            <span>Add New</span>
          </button>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="max-w-[750px]">
            <UsersTable
              data={fakeUserData}
              actions={[Actions.EDIT, Actions.REMOVE, Actions.VIEW]}
            />
          </div>
        </div>
        {/* Pagination Component */}
      </div>
    </main>
  );}
