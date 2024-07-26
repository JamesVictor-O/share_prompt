import React from 'react'
import EventItems from './event-item'
interface Event{
  id:string,
  title: string,
  discription: string,
  location: string,
  date:string,
  image:string,
  isFeatured: boolean
}
interface EventProps{
  items:Event[]
}
const EventList: React.FC<EventProps>=(props)=> {
  const {items}=props
  return (
    <div>
      <ul className='w-[90%] max-w-[40rem] my-[5rem] mx-auto '>
        {
          items.map(item=> <EventItems key={item.id} item={item}/>)
        }
      </ul>
    </div>
  )
}

export default EventList
