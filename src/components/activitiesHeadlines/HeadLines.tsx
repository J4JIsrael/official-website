import React from 'react'
import { HeadlineBtn } from './HeadlineBtn'

export const HeadLines = () => {
  return (
    <div className='flex justify-center items-center h-32'>    
        <HeadlineBtn roundedL='full' roundedR='xl' text='העשרה'/>
        <HeadlineBtn roundedL='xl' roundedR='xl' text='פרויקטים'/>
        <HeadlineBtn roundedL='xl' roundedR='full' text='מציאת עבודה'/>
    </div>
  )
}
