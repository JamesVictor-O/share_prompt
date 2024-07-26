import React from 'react'
import Link from 'next/link'
import { MapPinIcon, CalendarIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'
interface buttonProps{
    children:React.ReactNode,
    link?:string,
    onClick:()=>void
}
const Button:React.FC<buttonProps> = ({children,link,onClick}) => {
  if(link){
    return(
    <>
    <Link href={link}  className='link_btn'>{children}</Link>
    </>
    )
  }
  return (
    <>
    <button onClick={onClick} className='link_btn'>{children}</button>
    </>
  )
}

export default Button
