// components/Table.js
import React from 'react'

const Table = ({ data }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table-auto w-full border-collapse border border-blue-400'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='px-4 py-2 md:py-1 '>ID</th>
            <th className='px-4 py-2 md:py-1'>Name</th>
            <th className='px-4 py-2 md:py-1'>Age</th>
            <th className='px-4 py-2 md:py-1'>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className='border-t border-blue-400'>
              <td className='px-4 py-1 md:py-2'>{item.id}</td>
              <td className='px-4 py-1 md:py-2'>{item.name}</td>
              <td className='px-4 py-1 md:py-2'>{item.age}</td>
              <td className='px-4 py-1 md:py-2'>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
