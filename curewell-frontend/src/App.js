import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import ViewDoctors from "./components/ViewDoctors";
import AddDoctor from "./components/AddDoctor";
import UpdateDoctor from "./components/UpdateDoctor";
import ViewSpecializations from "./components/ViewSpecializations";
import DoctorsBySpecialization from "./components/DoctorsBySpecialization";
import ViewTodaySurgery from "./components/ViewTodaySurgery";
import UpdateSurgery from "./components/UpdateSurgery";
import AddSurgery from "./components/AddSurgery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ViewDoctors />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/update-doctor/:id" element={<UpdateDoctor />} />
        <Route path="/specializations" element={<ViewSpecializations />} />
        <Route path="/doctors/:code" element={<DoctorsBySpecialization />} />
        <Route path="/surgeries" element={<ViewTodaySurgery />} />
        <Route path="/update-surgery/:id" element={<UpdateSurgery />} />
        <Route path="/add-surgery" element={<AddSurgery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
