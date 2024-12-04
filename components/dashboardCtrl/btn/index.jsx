'use client';
import React from 'react'

const DashboardBtn = ({title, content, setContentchander }) => {
  return (
    <button onClick={() => setContentchander(content)} className='rounded-md hover:bg-indigo-500  w-32 h-12 flex justify-center items-center bg-orange-500 text-white transition-all duration-500'>
       {title}
    </button>
  )
}

export default DashboardBtn;
