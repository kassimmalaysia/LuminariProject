import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useEffect, useState } from 'react';

export function Calendar() {
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
    <div>Calender</div>
  )
}

export default Calendar
// import GOOGLE CALENDER API HERE