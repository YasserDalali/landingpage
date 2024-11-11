import React from 'react'

export default function Card({title, desc, color}) {

  return (
    <section className={` min-h-32 ${color} p-4 motion-preset-slide-up flex md:flex-col-reverse md:gap-7 md:rounded-lg justify-between items-center rounded-e-lg me-3 md:m-0 my-3`}>
        <div className='basis-2/3 md:basis-1'>
        <h3 className='font-medium text-xl md:text-4xl md:text-center md:my-4 '>{title}</h3>
        <p className='text-accent md:text-center md:text-lg md:pb-7 mx-[10%]'>{desc}</p>
        </div>

        <div className='w-full p-14 md:basis-1 rounded-lg h-full basis-1/3 bg-white'></div>
    </section>
  )
}
