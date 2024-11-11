import React from 'react'

export default function Card({title, desc, color}) {

  return (
    <section className={` min-h-32 ${color} p-4 flex justify-between items-center rounded-e-lg me-3 my-3`}>
        <div className='basis-2/3'>
        <h3 className='font-serif text-xl'>{title}</h3>
        <p className='text-accent'>{desc}</p>
        </div>

        <div className='w-full p-14 rounded-lg h-full basis-1/3 bg-white'></div>
        
    </section>
  )
}
