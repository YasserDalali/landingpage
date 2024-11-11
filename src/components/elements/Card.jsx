import React from 'react'

export default function Card({title, desc, color}) {

  return (
    <section className={` min-h-32 ${color} p-8 motion-preset-slide-up flex md:flex-col-reverse md:gap-7 md:rounded-lg justify-between items-center rounded-e-lg me-3 md:m-0 my-3`}>
        <div className='basis-2/3 md:basis-1'>
        <h3 className='font-medium text-xl md:text-4xl md:text-center md:my-4 '>{title}</h3>
        <p className='text-accent md:text-center md:text-lg md:pb-7 md:mx-[10%]'>{desc}</p>
        </div>

        <div className='w-full flex p-10 items-center justify-center md:basis-1 rounded-lg h-full basis-1/3  bg-white'>


        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:size-32">
  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
</svg>

        </div>
    </section>
  )
}
