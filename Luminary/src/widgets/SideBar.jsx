import React from 'react'
import { Outlet } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='left-0 w-1/36 min-w-min h-screen py-4 border-2 border-grey-500'>
      <button className="w-full hover:bg-gray-300" onClick={()=>{location="./Timetable"}}>Timetable</button>
    </div>
  )
}

export default SideBar