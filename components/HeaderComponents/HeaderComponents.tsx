import React from 'react'
import Link from 'next/link'
const HeaderComponents = () => {
  return (
    <div className='bg-white max-w-full flex flex-row justify-between text-black py-4 px-5 md:px-20 items-center'>
      <div>
         <Link href='/' className='text-[30px] text-green-600 font-semibold'>NextEvents</Link>
      </div>
        {/* nav links */}
      <nav>
        <ul>
          <li>
          <Link href='/events' className='text-[20px] text-green-600 font-normal'>All Events</Link> 
          </li>
        </ul>
       
      </nav>
      

    </div>
  )
}

export default HeaderComponents
