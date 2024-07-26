"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { getEventById } from '@/dummy-data'
import { MapPinIcon, CalendarIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'

const EventDetailsPage = () => {
  const {eventsId}=useParams()
  const event=getEventById(eventsId)
  if(!event){
    return <p>No Events</p>
  }

  const { title, discription, location, date, image, isFeatured } = event;
  const humanReadableDate=new Date(date).toLocaleDateString('en-US',{
    day:"numeric",
    month:"long",
    year:'numeric'
})

const FormattedAddress=location.replace(', ', '\n')
  return (
    <div className='flex flex-col items-center mt-5'>
          <h2 className='text-white font-extrabold text-[25px] md:text-[50px] mb-4 '>{title}</h2>
          <div className='flex flex-row items-center w-full md:w-[50%] justify-center'>
             <div className='w-32 h-32 rounded-full border-white border-[5px] overflow-hidden'>
              <img src={'/' + image} alt="" className='object-fit w-full h-full' />
             </div>
             {/* location and time */}
            <div className='ml-4'>
                <div className='font-semibold mt-2 leading-5 flex items-center'>
                      <CalendarIcon width={30}/>
                      <time className='ml-2'>{humanReadableDate}</time>
                </div>
                <div className='w-[70%] mt-2 flex items-center '>
                    <MapPinIcon height={40}/>
                    <address className='ml-2'>{FormattedAddress}</address>
                </div>
             </div>
          </div>
          <div className='w-full md:w-[50%] text-center mt-4 p-2'>
            <p className='text-white'>{discription}</p>
          </div>
    </div>
  )
}

export default EventDetailsPage
