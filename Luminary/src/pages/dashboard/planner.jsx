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
import TimetablePage from "@/components/TimetablePage";
import plannerData from "@/data/planner-data.json";
import moduleData from "@/data/module-data.json"
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useEffect, useState } from 'react';
import { collection, doc, getDocs, addDoc,query, where } from "firebase/firestore";
import { db } from "@/firebase";

export function Planner() {
  const [modules,setModules] = useState({});
  const [user, setUser] = useState(null);
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
    
  }, []);
console.log(localStorage.user)
  var year=2023;
  const [op,setOption]=useState(0);
  var sem=2;
  

  var arr=[];
  const q=query(collection(db,"planner"),where("added","==",true));
  var cnt=0;
  
  arr.push([]);
  for(let j=0;j<=6;j++){
    arr[cnt].push([]);
    for(let k=0;k<=9;k++){
        arr[cnt][j].push("")
    }
  }
  var lis=[];
  const st=async () => {
    const data=await getDocs(q);
    const values=data.docs.map((doc)=>({...doc.data()}))
    var a={};
    values.forEach((b)=>{a[b.code]=b});
    console.log(a);
    setModules(a);
  }
  st();
  console.log(arr);
  var module_keys=Object.keys(modules);
  const add=(pos)=>{
    if(pos<0){
      cnt++;
      arr.push([])
      for(let j=0;j<=6;j++){
        arr[cnt].push([]);
        for(let k=0;k<=9;k++){
            arr[cnt][j].push("")
        }
      }
      console.log(lis)
      for(var i in lis){
        modules[lis[i][0]]["optionIndex"].push(lis[i][1]);
        for(var j in lis[i][2])
        if(j!="added"){
          if(arr[cnt][Math.floor(j/10)][j%10].length>0){arr[cnt][Math.floor(j/10)][j%10]+="*";}
          arr[cnt][Math.floor(j/10)][j%10]+=String(lis[i][2][j]);
        }
      }
    }
    else{
      var index_keys=Object.keys(modules[module_keys[pos]]["index"]);
      for(var i in index_keys)
        if(modules[module_keys[pos]]["index"][index_keys[i]].added){
        lis.push([module_keys[pos],index_keys[i],modules[module_keys[pos]]["index"][index_keys[i]]]);
        add(pos-1);
        lis.pop();
      }
    }
  }
  console.log(Object.keys(modules))
  add(Object.keys(modules).length-1);
  var temp=[];
  for(let i=1;i<=cnt;++i) temp.push(i);
  
  
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Planner
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          {/* <div>asdasd</div> */}
          <TimetablePage op={op} setOp={setOption} arr={arr} temp={temp}/>
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
                {()=>{console.log(modules)}}
                {
                  Object.values(modules).map((value)=>

                  <tr className='border-2 border-gray-300 w-full h-10 hover:bg-gray-300 hover:cursor-pointer' onClick={()=>{location="/Modules/"+value.code}}>
                    <th>{value.code}</th>
                    <th>{value.optionIndex[op]}</th>
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