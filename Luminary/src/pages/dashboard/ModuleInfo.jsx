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
import { Dashboard } from "@/layouts";
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useEffect, useState } from 'react';
import { db } from "@/firebase";
import { collection, doc, getDocs, addDoc,query, where } from "firebase/firestore";
import { info } from "autoprefixer";
import SearchBar from "@/components/SearchBar";
import { useParams } from "react-router-dom";


export function ModuleInfo() {
  
  const location = useLocation();
  const title = location.state?.title || "";

  const [user, setUser] = useState(null);

  const handleViewSchedule = () => {
    navigate("/dashboard/Schedule", { replace: true, state: {title: title}});
  };
  
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("authuser:", authUser);
      setUser(authUser);
      if(authUser== null || undefined)
      {
        console.log(authUser)
        navigate("/auth/sign-in", { replace: true });
      }
      
      
 
      
    });

    return unsubscribe;
    
  },[]);
  

  

const [newReview, setNewReview] = useState([])
const [newRating, setNewRating] = useState("1/5")

const [moduleInfo, setModule] = useState([])
const moduleCollectionRef =collection(db, "moduleInfo");

// const moduleCollectionRef = collection(db, "moduleInfo");


const [reviews, setReview] = useState([])
const reviewCollectionRef = collection(db, "reviews");
  
  // I passed in the title from Search bar here. You can use this as to fetch the relevant data.
  const createReview = async () => {
    await addDoc(reviewCollectionRef, {review: newReview, rating: newRating, title: title } );
  }
  useEffect(() => {
   
    const getReview = async ()=>{
      const data = await getDocs(reviewCollectionRef);
      setReview(data.docs.map((doc)=>({...doc.data()})))
    };
   
  
  const getModule = async ()=>{
    const data = await getDocs(query(moduleCollectionRef, where("moduleName", "==", title)));
    console.log(title + "" + "HERE")
    setModule(data.docs.map((doc)=>({...doc.data()})))
  };
  getReview() ;
  getModule();
  
  }, [navigate,title])
  
  
    return (
      <div>
   
    {moduleInfo.map((mod) => {
       return(
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
                    "Module",
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
                {moduleInfo.map((module, key) => {
                     const className = `py-3 px-5 ${
                      key === moduleCollectionRef.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;
  
                    return (
                      <tr>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <div>
                              <Typography
                                variant="h5"
                                className="text-s font-semibold text-blue-gray-600"
                              >
                                {mod.moduleName}
                                
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography 
                          variant="h5"
                          className="text-s font-semibold text-blue-gray-600">
                            {mod.preReq}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography 
                          variant="h5"
                          className="text-s font-semibold text-blue-gray-600">
                            {mod.au}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography 
                          variant="h5"
                          className="text-s font-semibold text-blue-gray-600">
                            {mod.gradingType}
                          </Typography>
                        </td>
                        <td className={className}>
                        <Typography 
                          variant="h6"
                          className="text-s font-semibold text-blue-gray-600">
                            {mod.description}
                          </Typography>
                        </td>
                        
                        <td className={className}>
                          <Typography
                            as="a"
                            
                            
                          >
                           
                            <Button onClick={handleViewSchedule} variant="gradient">View Schedule
                            
                            </Button>
                         
                          </Typography>
                        </td>
                        
                      </tr>
                      
                    );
                    
                  }
                )}
               
              </tbody>
            </table>
          </CardBody>
        </Card>
        <div>
   
    
      
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Reviews
            </Typography>
          </CardHeader>
  
          <Typography
            className="text-xs font-semibold text-blue-gray-600"
          ><div className="px-5 flex flex-row w-72 items-end gap-6">
            <Input variant="static" label="Review" placeholder="Enter Review" onChange={(event) => {setNewReview(event.target.value)}} />
          
        <Radio id="1" name="type" label="1/5" onClick={(event) => {setNewRating("1/5")}} defaultChecked />
        <Radio id="2" name="type" label="2/5" onClick={(event) => {setNewRating("2/5")}} />
        <Radio id="3" name="type" label="3/5" onClick={(event) => {setNewRating("3/5")}} />
        <Radio id="4" name="type" label="4/5" onClick={(event) => {setNewRating("4/5")}} />
        <Radio id="5" name="type" label="5/5" onClick={(event) => {setNewRating("5/5")}} />
            <Tooltip>
        <Button onClick={createReview} variant="gradient">Submit</Button>
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
              {reviews.map((review, key) => {
                     const className = `py-3 px-5 ${
                      key === reviewCollectionRef.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;
  
                    return (
                      <tr>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {review.rating}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {review.review}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {review.date}
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
        
      </div>
    );
     
  })}
        
  </div>
    );
  }
  
  export default ModuleInfo;
  