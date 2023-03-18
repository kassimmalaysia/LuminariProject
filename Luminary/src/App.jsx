import Index from "./pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimetablePage from "./pages/TimetablePage";
import SideBar from "./widgets/SideBar";
import NullPage from "./components/NullPage";

function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideBar />} />
          <Route path="/Timetable" element={<TimetablePage />} />
          <Route path="/*" element={<NullPage />}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}
export default App