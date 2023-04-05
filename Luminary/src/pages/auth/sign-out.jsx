import { Link } from "react-router-dom";
import { useState,useEffect} from "react";
import { auth } from "../../firebase";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export function SignOut() {
  const [error, setError] = useState("")
  
    const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log(auth);
      console.log("Sign out")
      navigate("/auth/sign-in", { replace: true });
     
     
    } catch (error) {
      setError(error.message);
    }
  };
  handleSignOut(); // call handleSignOut here

  return null; 
  
  }
  

export default SignOut;