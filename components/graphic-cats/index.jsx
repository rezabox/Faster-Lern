import React from 'react'
import CartBox from './Box';

const GraphicCategories = () => {
  return (
    <section className='container mx-auto flex items-center sm:justify-between justify-center flex-wrap gap-2'>
        <CartBox/>
        <CartBox/> 
        <CartBox/> 
        <CartBox/> 
        <CartBox/> 
        <CartBox/> 
        <CartBox/>
        <CartBox/>  
    </section>
  )
}

export default GraphicCategories;
