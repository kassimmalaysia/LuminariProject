import moduleData from '@/data/module-data';
import React from 'react'
import { useState } from 'react';
import Module from './Module';
import SideBar from './SideBar'
import Timetable from './Timetable';



const TimetablePage = ({op,setOp,plannerData}) => {
  var arr=[];
  var modules=JSON.parse(JSON.stringify(moduleData));
  var modules_added=plannerData;
  var cnt=0;
  var keys=Object.values(modules_added);
  arr.push([]);
  console.log(keys);
  function add(pos,lis){
    if(pos<0){
      cnt++;
      arr.push([])
      for(let j=0;j<=6;j++){
        arr[cnt].push([]);
        for(let k=0;k<=9;k++){
            arr[cnt][j].push("")
        }
      }
    }
    else{
      var index_keys=Object.keys(modules[keys[pos]]["index"]);
      for(var i in index_keys){
        // lis.push([modules[keys[pos]]["index"][i]]);
        // add(pos-1,lis);
        // lis.pop();
      }
      
    }
  }
  return (
    <div className="flex">
        <div className="h-1/2 min-h-fit flex-1 flex border-4 ">
            {/* option bar */}
            <div className='border-4 flex-initial h-full w-4 min-w-min'>

                <button className="py-4 center w-full hover:bg-gray-300" onClick={()=>{setOp(1);}}>Option:1</button>
                <button className="py-4 center w-full hover:bg-gray-300" onClick={()=>{setOp(2);}}>Option:2</button>
            </div>
            <Timetable option={arr[op]}/>
        </div>
    </div>
  )
}

export default TimetablePage;