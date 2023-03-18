import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Index from "./components/Index";
import TimetablePage from "./components/TimetablePage";
import SideBar from "./components/SideBar";
import NullPage from "./components/NullPage";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      <Route path="/" element={<SideBar />} />
          <Route path="/Timetable" element={<TimetablePage />} />
          <Route path="/*" element={<NullPage />}/>
    </Routes>
  );
}

export default App;
