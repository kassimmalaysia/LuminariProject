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
import { db } from "@/firebase";
import { collection, doc, updateDoc, getDocs,query,where} from "firebase/firestore";
import { useLocation } from "react-router-dom";

export function Schedule() {
  const location = useLocation();
  const title = location.state?.title || "";
  console.log(title);
 const [moduleDetail,setDetail] = useState([])
 const detailCollectionRef = collection(db, "moduleDetail");
 const moduleAddedRef = collection(db, 'planner');

 const toggleModule = async (title) => {
  console.log(title);
  const q=query(collection(db,"planner"),where("code","==",title));
  const data = await getDocs(q);
  console.log(q);
  data.docs.map(async (d) => {await updateDoc(doc(db,"planner", d.id), {include: true});})
  window.location.reload();
}
  useEffect(() => {
  

    const getDetail = async ()=>{
      const data = await getDocs(query(detailCollectionRef,where("module","==",title)));
      console.log(data);
      setDetail(data.docs.map((doc)=>({...doc.data()})))
    }
    getDetail()  
  }, [])
  
  return (
    <div>
 
  {moduleDetail.map((det) => {
     return(
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Schedule
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Module", "Type", "Time", "Venue", ""].map((el) => (
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
            {moduleDetail.map((detail, key) => {
                   const className = `py-3 px-5 ${
                    key === detailCollectionRef.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {det.module}
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
                              {det.type}
                            </Typography>
              
                      </td>
                      <td className={className}>
                        <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {det.time}
                            </Typography>
                      </td>
                      <td className={className}>
                      <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {det.venue}
                            </Typography>
                      </td>
                      <Link to = "/dashboard/planner" >
                      <td className={className}>
                        <Typography
                         
                          href="#"
                         
                        >
                          {/* <Tooltip> */}
                          <Button onClick={() =>
                            toggleModule(title)} variant="gradient">
  {"Add to Timetable"}
</Button>

                        {/* </Tooltip> */}
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
     
})}
      
</div>
  );
}

export default Schedule
