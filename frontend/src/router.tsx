import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home.tsx";
import OfficeHours from "./routes/OfficeHours.tsx";
import Workshops from "./routes/Workshops.tsx";
import Inventory from "./routes/Inventory.tsx";
import Login from "./routes/Login";
import Members from "./routes/Members";
import OurLab from "./routes/OurLab.tsx";
import AddMember from "./routes/AddMember.tsx";
// import Inventory from "./pages/Inventory";
// import Manager from "./pages/Manager/Manager.tsx";



function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/office-hours" element={<OfficeHours />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/our-lab" element={<OurLab />} />
      <Route path="/inventory" element={<Inventory loggedIn={false}  />} />
      <Route path="/members" element={<Members loggedIn={false} />} />
      <Route path="/login" element={<Login /> } />
      <Route path="/add-member" element={<AddMember />} />
    </Routes>
  );
}

export default Router;
