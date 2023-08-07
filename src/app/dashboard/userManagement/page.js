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

export default async function UserManagement() {
  return (
    <main className="flex flex-1 flex-col p-20">
      <div className="bg-white rounded-lg shadow-md p-4 mb-5">
      <div className="flex justify-center items-center mb-4">
          <h2 className="text-3xl font-semibold">User Management</h2>
          <div className="flex items-center space-x-2 ml-auto">
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
  );
}
