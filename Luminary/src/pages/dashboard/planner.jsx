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

export function Planner() {
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
  var year=2023;
  var modules_added=JSON.parse(JSON.stringify(plannerData));
  const [op,setOption]=useState(1);
  var sem=2;
  var arr=[];
  var modules=JSON.parse(JSON.stringify(moduleData));
  var cnt=0;
  var keys=Object.keys(modules_added);
  arr.push([]);
  var lis=[];
  function add(pos){
    if(pos<0){
      cnt++;
      arr.push([])
      for(let j=0;j<=6;j++){
        arr[cnt].push([]);
        for(let k=0;k<=9;k++){
            arr[cnt][j].push("")
        }
      }
      for(var i in lis){
        modules_added[lis[i][0]]["index"].push(lis[i][1]);
        for(var j in lis[i][2]){
          if(arr[cnt][Math.floor(j/10)][j%10].length>0){arr[cnt][Math.floor(j/10)][j%10]+="*";}
          arr[cnt][Math.floor(j/10)][j%10]+=String(lis[i][2][j]);
        }
      }
    }
    else{
      var index_keys=Object.keys(modules[keys[pos]]["index"]);
      for(var i in index_keys){
        lis.push([keys[pos],index_keys[i],modules[keys[pos]]["index"][index_keys[i]]]);
        add(pos-1);
        lis.pop();
      }
    }
  }
  add(Object.keys(modules_added).length-1);
  console.log(modules_added);
  console.log(arr);
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
                {()=>{console.log(modules_added)}}
                {
                  Object.values(modules_added).map((value)=>

                  <tr className='border-2 border-gray-300 w-full h-10 hover:bg-gray-300 hover:cursor-pointer' onClick={()=>{location=value.path}}>
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