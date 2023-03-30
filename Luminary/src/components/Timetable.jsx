import { render } from '@testing-library/react'
import React from 'react'
import TimeSlot from './TimeSlot'

const table= (option,i)=>{
    return (
        <tr>
        <th className="border-2 w-40">{i+7}:30-{i+8}:30</th>
        <th className="border-2 w-40"><TimeSlot source={option} day={1} time={i}/></th>
        <th className="border-2 w-40"><TimeSlot source={option} day={2} time={i}/></th>
        <th className="border-2 w-40"><TimeSlot source={option} day={3} time={i}/></th>
        <th className="border-2 w-40"><TimeSlot source={option} day={4} time={i}/></th>
        <th className="border-2 w-40"><TimeSlot source={option} day={5} time={i}/></th>
        <th className="border-2 w-40"><TimeSlot source={option} day={6} time={i}/></th>
        </tr>
    )
};

const Timetable = ({option}) =>{
    return (
        <div>
            <table className='flex-shrink-0 table-fixed border-2 border-black'>
                <thead>
                    <tr>
                        <th className="border-2 w-40">Time</th>
                        <th className="border-2 w-40">Monday</th>
                        <th className="border-2 w-40">Tuesday</th>
                        <th className="border-2 w-40">Wednesday</th>
                        <th className="border-2 w-40">Thursday</th>
                        <th className="border-2 w-40">Friday</th>
                        <th className="border-2 w-40">Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    {table(option,1)}
                    {table(option,2)}
                    {table(option,3)}
                    {table(option,4)}
                    {table(option,5)}
                    {table(option,6)}
                    {table(option,7)}
                    {table(option,8)}
                    {table(option,9)}
                </tbody>
            </table>
        </div>
    );
  
}

export default Timetable