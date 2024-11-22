import React from 'react'

const LayoutBlog = ({children}) => {
  return (
    <div className='flex items-start justify-between container mx-auto'>
         <main className=''>{children}</main>
         <aside className='w-72 max-w-72 p-4 rounded-md bg-zinc-100'>
             1
         </aside>
    </div>
  )
}

export default LayoutBlog;
