import React from 'react'
import { getAllEvents } from '@/dummy-data'
import EventList from '@/components/events/event-list'
import EventSearch from '@/components/events/EventSearch'

const AllEvents = () => {
  const events=getAllEvents()
  return (
    <div className='flex flex-col justify-center items-center'>
      <EventSearch/>
       <EventList items={events}/>
    </div>
  )
}

export default AllEvents
