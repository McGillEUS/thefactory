import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./routes/Home.tsx";
// import OfficeHours from "./pages/OfficeHours";
// import Workshops from "./pages/Workshops";
// import Resources from "./pages/Resources";
// import Login from "./pages/Login";
// import Inventory from "./pages/Inventory";
// import Manager from "./pages/Manager/Manager.tsx";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/login" element={<Login/>}/>
                <Route path="/office-hours" element={<OfficeHours/>}/>
                <Route path="/workshops" element={<Workshops/>}/>
                <Route path="/resources" element={<Resources/>}/>
                <Route path="/inventory" element={<Inventory/>}/>
                <Route path="/manager" element={<Manager/>}/> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;