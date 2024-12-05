import React from 'react'

const MiddleBannerAll = () => {
  return (
    <div>
        <section className='flex justify-between items-center gap-2'>
            <h1 className='txet-blue-500 text-lg'>بنر های تبلیغاتی </h1>
            <div className='flex justify-end items-center gap-2'>
                <button className='px-3 py-1 rounded-md bg-indigo-600 text-white transition-all duration-500 hover:bg-orange-500'>همه</button>
                <button className='px-3 py-1 rounded-md bg-indigo-600 text-white transition-all duration-500 hover:bg-orange-500'>بنر جدید</button>
            </div>
        </section>
    </div>
  )
}

export default MiddleBannerAll;
