import React from 'react'
import { useState } from 'react';
import Module from './Module';
import SideBar from './SideBar'
import Timetable from './Timetable';

const TimetablePage = () => {
  const [op,setOption]=useState(1);
  var arr=[];
  var modules={"SC2006":new Module("TestSC2006","SC2006"),"SC2005":new Module("TestSC2005","SC2005")};
  modules["SC2006"].updateIndex("10001",{"Monday 9:30-10:30":"SC2006 Lecture LT-42","Thursday 14:30-16:30":"SC2006 Lab SW3_2 14:30-16:30"})
  modules["SC2005"].updateIndex("10001",{"Tuesday 9:30-10:30":"SC2005 Lecture LT-40","Wednesday 14:30-16:30":"SC2005 Lab SW3_3 14:30-16:30"})
  modules["SC2005"].updateIndex("10002",{"Tuesday 9:30-10:30":"SC2005 Lecture LT-40","Friday 14:30-16:30":"SC2005 Lab SW3_3 14:30-16:30"})
  for(let i=0;i<3;++i){
    arr.push([]);
    for(let j=0;j<=6;j++){
        arr[i].push([]);
        for(let k=0;k<=10;k++){
            arr[i][j].push("")
        }
    }
  }
  arr[1][1][2]+=modules["SC2006"].index["10001"]["Monday 9:30-10:30"];
  arr[1][4][7]+=modules["SC2006"].index["10001"]["Thursday 14:30-16:30"];
  arr[1][4][8]+=modules["SC2006"].index["10001"]["Thursday 14:30-16:30"];
  arr[1][2][2]+=modules["SC2005"].index["10001"]["Tuesday 9:30-10:30"];
  arr[1][3][7]+=modules["SC2005"].index["10001"]["Wednesday 14:30-16:30"];
  arr[1][3][8]+=modules["SC2005"].index["10001"]["Wednesday 14:30-16:30"];
  arr[2][1][2]+=modules["SC2006"].index["10001"]["Monday 9:30-10:30"];
  arr[2][4][7]+=modules["SC2006"].index["10001"]["Thursday 14:30-16:30"];
  arr[2][4][8]+=modules["SC2006"].index["10001"]["Thursday 14:30-16:30"];
  arr[2][2][2]+=modules["SC2005"].index["10002"]["Tuesday 9:30-10:30"];
  arr[2][5][7]+=modules["SC2005"].index["10002"]["Friday 14:30-16:30"];
  arr[2][5][8]+=modules["SC2005"].index["10002"]["Friday 14:30-16:30"];
  return (
    <div className="flex">
        <SideBar className="flex-initial" />
        <div className='flex-column'>
            <div className="h-1/2 min-h-fit flex-1 flex border-4 border-red-300">
                {/* option bar */}
                <div className='border-4 border-red-300 flex-initial h-full w-4 min-w-min'>
                    <button className="py-4 center w-full hover:bg-gray-300" onClick={()=>{setOption(1);}}>Option:1</button>
                    <button className="py-4 center w-full hover:bg-gray-300" onClick={()=>{setOption(2);}}>Option:2</button>
                </div>
                <Timetable option={arr[op]}/>
            </div>
            <div className="flex-initial w-full border-2 border-black">
                <button className='border-2 border-gray-300 w-full h-10 hover:bg-gray-300' onClick={()=>{location="/Modules/SC2005"}}>SC2005</button>
                <button className='border-2 border-gray-300 w-full h-10 hover:bg-gray-300' onClick={()=>{location="/Modules/SC2006"}}>SC2006</button>
            </div>
        </div>
    </div>
  )
}

export default TimetablePage