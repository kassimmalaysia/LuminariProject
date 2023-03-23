import {
  Card,
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

export function Planner() {
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
            <div className="flex-initial w-full border-2 border-black">
              <button className='border-2 border-gray-300 w-full h-10 hover:bg-gray-300' onClick={()=>{location="/Modules/SC2005"}}>SC2005</button>
              <button className='border-2 border-gray-300 w-full h-10 hover:bg-gray-300' onClick={()=>{location="/Modules/SC2006"}}>SC2006</button>
            </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Planner;
