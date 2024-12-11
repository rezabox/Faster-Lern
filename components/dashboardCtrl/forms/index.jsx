'use client';
import React, { useEffect, useState } from 'react'
import AllMidBanners from './allMidBanners';
import NewMidBaner from './newMidBanner';
import NewBannerDetails from './MidBannerDerails';

const MiddleBannerAll = () => {
  const [midBanDetCtrl,setmidBanCtrl] = useState("");
  const [det,setDet] =useState(<AllMidBanners setmidBanCtrl={setmidBanCtrl}/>);
  
  useEffect(()=>{
     if(midBanDetCtrl != "") {
       setDet(<NewBannerDetails midBanId={midBanDetCtrl}/>);
     }
  },[midBanDetCtrl])

  return (
    <div className='flex flex-col gap-8'>
        <section className='flex justify-between items-center gap-2'>
            <h1 className='txet-blue-500 text-lg'>بنر های تبلیغاتی </h1>
            <div className='flex justify-end items-center gap-2'>
                <button onClick={() => setDet(<AllMidBanners setmidBanCtrl={setmidBanCtrl}/>)} className='px-3 py-1 rounded-md bg-indigo-600 text-white transition-all duration-500 hover:bg-orange-500'>همه</button>
                <button onClick={() => setDet(<NewMidBaner/>)} className='px-3 py-1 rounded-md bg-indigo-600 text-white transition-all duration-500 hover:bg-orange-500'>بنر جدید</button>
            </div>
        </section>
        <section>
            {
              det
            }
        </section>
    </div>
  )
}

export default MiddleBannerAll;
