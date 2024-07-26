import React from 'react'
import Link from 'next/link'
import Button from '../ui/button'
import { MapPinIcon, CalendarIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'
interface EventProps{
   item:{   
       id:string,
       title: string,
       discription: string,
       location: string,
       date:string,
       image:string,
       isFeatured: boolean
   } 
  }
const EventItems:React.FC<EventProps> = ({item}) => {
    const {id,title,discription,location,date,image}=item
    const humanReadableDate=new Date(date).toLocaleDateString('en-US',{
        day:"numeric",
        month:"long",
        year:'numeric'
    })

    const FormattedAddress=location.replace(', ', '\n')
    const exploreLink=`/events/${id}`
  return (
    <>
      <li className=' border-[8px] bg-white m-4 flex flex-row gap-4 h-[40%]'>
        <div className='max-w-[40%]'>
           <img src={`/` + image} alt="picture" className='w-full object-cover h-full' />  
        </div>
         
         <div>
            <div className='my-5 text-black' >
                <h2 className='font-bold text-[23px]'>{title}</h2>
                <div className='font-semibold mt-2 leading-5 flex items-center'>
                    <CalendarIcon width={30}/>
                    <time className='ml-2'>{humanReadableDate}</time>
                </div>
                <div className='w-[70%] mt-2 flex items-center '>
                    <MapPinIcon height={40}/>
                    <address className='ml-2'>{FormattedAddress}</address>
                </div>
            </div>
            <div className='flex justify-end flex-row'>
               <Button link={exploreLink}>Explore Events</Button>
            </div>
         </div>
        
      </li>   
    </>
  )
}

export default EventItems
