import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";


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
import {useAuthValue} from "@/context/AuthContext"

export function SignIn() {
 
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { currentUser } = useAuthValue();
  const navigate = useNavigate();

  const login = async () => {
    try {
      setLoading(true);
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setError("");
      setLoading(false);
      navigate("/dashboard/home", { replace: true });
      console.log(user);
      
    } catch(error)  {
      setError("Incorrect Email/Password");
      setLoading(false);
    }
   
  };

  const logout = async () => {
    await signOut(auth);
  };
  
  
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Welcome! 
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
        
            <Input  label="Email" size="lg"  onChange={(event) =>{setLoginEmail(event.target.value)}}/>
            <Input  label="Password" size="lg"onChange={(event) =>{setLoginPassword(event.target.value)}} 
             onKeyDown={(event) => { if (event.key === 'Enter') { login() } }}/>
            {error && (
              <Typography color="red" className="text-center">
                {error}
              </Typography>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={login} >
              {loading ? "Loading..." : "Sign In"}
            </Button>
          </CardFooter>
          
        </Card>
      </div>
    </>
  );
}

export default SignIn;
