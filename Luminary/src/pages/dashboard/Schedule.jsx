import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Button
  
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useEffect, useState } from 'react';
export function Schedule() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("authuser:", authUser);
      setUser(authUser);
      if(authUser== null)
      {
        console.log(authUser)
        navigate("/auth/sign-in", { replace: true });
      }
      
    });

    return unsubscribe;
    
  }, []);
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Module Info
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Index", "Type", "Time", "Venue", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({ img, name, email, job, online, date }, key) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              10705
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              Lab
                            </Typography>
              
                      </td>
                      <td className={className}>
                        <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              12:30 - 2:30
                            </Typography>
                      </td>
                      <td className={className}>
                      <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              SWL3
                            </Typography>
                      </td>
                      <Link to = "/dashboard/planner" >
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-s font-semibold text-blue-gray-600"
                        >
                          <Tooltip content="Material Tailwind">
                          <Button variant="gradient">Add To Timetable</Button>
                        </Tooltip>
                        </Typography>
                      </td>
                      </Link>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Schedule;