import React from 'react'

const TimeSlot = ({source,day,time}) => {
  return (
    <div>{source[day][time]}</div>
  )
}

export default TimeSlot