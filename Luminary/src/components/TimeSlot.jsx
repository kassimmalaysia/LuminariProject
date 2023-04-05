import React from 'react'

const TimeSlot = ({source,day,time}) => {
  if((source[day][time] || []).includes("*")){
    return (
      <div className='text-red-500'>{source[day][time]}</div>
    )
  }
  else{
    return (
    <div>{source[day][time]}</div>
  )}
}

export default TimeSlot