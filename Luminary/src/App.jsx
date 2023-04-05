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


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])
  return (
    <AuthProvider value={{currentUser}}>
    <Routes>
        
      <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/sign-out" element={<SignOut />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      
    </Routes>
    </AuthProvider>
  );
}

export default App;

