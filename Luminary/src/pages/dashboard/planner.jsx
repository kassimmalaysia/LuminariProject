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
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import TimetablePage from "@/components/TimetablePage";
import plannerData from "@/data/planner-data";

export function Planner() {
  var year=2023;
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
          <TimetablePage />
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
                {plannerData.map(({path,code,index,moduleName,au,examSchedule})=>
                  <tr className='border-2 border-gray-300 w-full h-10 hover:bg-gray-300 hover:cursor-pointer' onClick={()=>{location=path}}>
                    <th>{code}</th>
                    <th>{index}</th>
                    <th>{moduleName}</th>
                    <th>{au}</th>
                    <th>{examSchedule}</th>
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
