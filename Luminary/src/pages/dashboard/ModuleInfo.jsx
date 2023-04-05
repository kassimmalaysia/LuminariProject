import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Button,
  Progress,
  Radio
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { Input } from "@material-tailwind/react";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Dashboard } from "@/layouts";


export function ModuleInfo() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Module Info
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto" >
            <thead>
              <tr>
                {[
                  "Module name",
                  "Pre-requisities",
                  "AU",
                  "Grading Type",
                  "Module Description",
                  "",
                ].map((el) => (
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
                              variant="h5"
                              className="text-s font-semibold text-blue-gray-600"
                            >
                              SC2006
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography 
                        variant="h5"
                        className="text-s font-semibold text-blue-gray-600">
                          2002
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography 
                        variant="h5"
                        className="text-s font-semibold text-blue-gray-600">
                          3.0
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography 
                        variant="h5"
                        className="text-s font-semibold text-blue-gray-600">
                          Letter Graded
                        </Typography>
                      </td>
                      <td className={className}>
                      <Typography 
                        variant="h6"
                        className="text-s font-semibold text-blue-gray-600">
                          This course aims to develop your understanding of
                          fundamental concepts and principles of modern
                          operating systems, and to build your knowledge on the
                          design and implementation of main operating system
                          components.
                        </Typography>
                      </td>
                      <Link to = "/dashboard/schedule" >
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-s font-semibold text-blue-gray-600"
                        >
                          <Tooltip >
                          <Button variant="gradient">View Schedule</Button>
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
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Reviews
          </Typography>
        </CardHeader>

        <Typography
          className="text-xs font-semibold text-blue-gray-600"
        ><div className="px-5 flex flex-row w-72 items-end gap-6">
          <Input variant="static" label="Review" placeholder="Enter Review" />
        
      <Radio id="1" name="type" label="1/5"defaultChecked />
      <Radio id="2" name="type" label="2/5"  />
      <Radio id="3" name="type" label="3/5"  />
      <Radio id="4" name="type" label="4/5"  />
      <Radio id="5" name="type" label="5/5"  />

          <Tooltip content="Material Tailwind">
      <Button variant="gradient">Submit</Button>
    </Tooltip>
          </div>
        </Typography>

        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Rating", "Review", "Date", ""].map((el) => (
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
              {projectsTableData.map(
                ({ img, name, members, budget, completion }, key) => {
                  const className = `py-3 px-5 ${
                    key === projectsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          4/5
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          A very hands-on mod. 50% of your grade is the lab project which requires bi-weekly deliverables and self-learning since you have to make an app (mobile or web). The actual content is slightly boring but gets fun at times. Just need to watch the lectures (on 2x) to score well on the final/quizzes. Not very content heavy. 
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="mb-1 block text-xs font-medium text-blue-gray-600"
                          >
                            17 March 2023
                          </Typography>
                        </div>
                      </td>
                      
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

export default ModuleInfo;