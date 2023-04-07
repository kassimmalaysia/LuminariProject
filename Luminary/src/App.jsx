import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Index from "./components/Index";
import TimetablePage from "./components/TimetablePage";
import SideBar from "./components/SideBar";
import NullPage from "./components/NullPage";
import {useState, useEffect} from 'react'
import {auth} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'
import {AuthProvider} from './context/AuthContext'
import { SignIn,SignOut } from "./pages/auth";
import { Home } from "./pages/dashboard";
import { Link, useNavigate } from "react-router-dom";


const { localStorage } = window;


function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    } else {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      console.log(localStorage)
      if(currentUser == undefined)
      {
        console.log(currentUser)
        navigate("/auth/sign-in", { replace: true });
      }
     });
    }
  }, [])
  return (
    <AuthProvider value={{currentUser}}>
    <Routes>
        
      <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/sign-out" element={<SignOut />} />
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
      
    </Routes>
    </AuthProvider>
  );
}

export default App;

