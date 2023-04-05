import moduleData from '@/data/module-data';
import React from 'react'
import { useState } from 'react';
import Module from './Module';
import SideBar from './SideBar'
import Timetable from './Timetable';



const TimetablePage = ({op,setOp,arr,temp}) => {
  
  return (
    <div className="flex">
        <div className="h-1/2 min-h-fit flex-1 flex border-4 ">
            {/* option bar */}
            <div className='border-4 flex-initial h-full w-4 min-w-min'>
                {temp.map((i)=><button className="py-4 center w-full hover:bg-gray-300" onClick={()=>{setOp(i);}}>Option:{i}</button>)}
            </div>
            <Timetable option={arr[op]}/>
        </div>
    </div>
  )
}

export default TimetablePage;