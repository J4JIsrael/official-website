import React from 'react'
import { HeadlineBtn } from './HeadlineBtn'

export const HeadLines = () => {

  const myClass = `absolute w-44 h-16 select-none overflow-hidden flex-row justify-center items-center 
  opacity-40 hover:rounded-3xl hover:h-20 hover:opacity-80 hover:scale-110 focus:z-10  transition-all duration-200`;

    const idHandler = (event: React.MouseEvent<HTMLElement>) => {

  }


  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-white text-3xl font-bold'>הפעילות שלנו</h2>
    <div className='relative flex justify-center gap-2 items-center w-11/12 h-32 '>    
        <HeadlineBtn myClass={`${myClass}  rounded-l-[5rem] rounded-r-[1rem] relative`} text='העשרה'/>
        <HeadlineBtn myClass={`${myClass}  rounded-l-[1rem]  rounded-r-[1rem] relative`} text='פרויקטים'/>
        <HeadlineBtn myClass={`${myClass}  rounded-l-[1rem] rounded-r-[5rem]  relative`} text='מציאת עבודה'/>
    </div>
    </div>
  )
}
