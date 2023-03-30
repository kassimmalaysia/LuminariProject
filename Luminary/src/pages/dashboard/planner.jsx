import {
  Card,
  Button,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { useState } from 'react';
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import TimetablePage from "@/components/TimetablePage";
import plannerData from "./../../data/planner-data.json";

export function Planner() {
  var year=2023;
  var planner_data=JSON.parse(JSON.stringify(plannerData));
  console.log(Object.entries(planner_data));
  const [op,setOption]=useState(0);
  var sem=2;
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Planner
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <div>asdasd</div>
          {/* <TimetablePage op={op} setOp={setOption} plannerData={planner_data}/> */}
        </CardBody>
      </Card>
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Modules
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <div>Academic Year {year} Semester {sem}</div>
            <table className="flex-initial w-full border-2 border-black table-auto">
              <thead>
                <tr>
                  <th>code</th>
                  <th>index</th>
                  <th>module name</th>
                  <th>AU</th>
                  <th>exam schedule</th>
                </tr>
              </thead>
              
              <tbody>
                {
                  Object.values(planner_data).map((value)=>

                  <tr className='border-2 border-gray-300 w-full h-10 hover:bg-gray-300 hover:cursor-pointer' onClick={()=>{location=path}}>
                    <th>{value.code}</th>
                    <th>{value.index[op]}</th>
                    <th>{value.moduleName}</th>
                    <th>{value.au}</th>
                    <th>{value.examSchedule}</th>
                  </tr>
                  
                )}
              </tbody>
              
            </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Planner;
