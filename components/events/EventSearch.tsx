import React, { useRef } from 'react'
import Button from '../ui/button'
const EventSearch = () => {
    const yearInputRef=useRef<HTMLSelectElement>(null)
    const monthInputRef=useRef<HTMLSelectElement>(null)
    function submitHandler(event:React.FormEvent<HTMLFormElement>){
       event.preventDefault
       const selectedYear=yearInputRef.current?.value;
       const selectedMonth=monthInputRef.current?.value
    }
  return (
    <div className='bg-white mt-8 w-[50%] border-red-200 border-4 p-2 rounded'>
       <form className='flex flex-row items-center' onSubmit={submitHandler}>
         <div className='flex flex-row items-center w-[80%]'>
            <div className=' text-black w-[50%]'>
                <label htmlFor="yaer" className='font-semibold '>Year</label>
                <select id='year' className='border-gray-400 rounded border-2 py-2 px-4 ml-4 w-[70%]' ref={yearInputRef}>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
            <div className='text-black w-[50%]'>
                <label htmlFor="month" className='font-semibold'>Month</label>
                <select name="" id="month" className='border-gray-400 rounded border-2 py-2 px-4 ml-4 w-[70%]' ref={monthInputRef}>
                    <option value="1">January</option>
                    <option value="2">Febuary</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>
         </div>
         <Button>Find Event</Button>
       </form>
    </div>
  )
}

export default EventSearch
