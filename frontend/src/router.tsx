import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home.tsx";
import OfficeHours from "./routes/OfficeHours.tsx";
import Workshops from "./routes/Workshops.tsx";
// import Resources from "./pages/Resources";
// import Login from "./pages/Login";
// import Inventory from "./pages/Inventory";
// import Manager from "./pages/Manager/Manager.tsx";


function Router() {
    return (

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/office-hours" element={<OfficeHours/>}/>
                <Route path="/workshops" element={<Workshops/>}/>
                {/* <Route path="/resources" element={<Resources/>}/>
                <Route path="/inventory" element={<Inventory/>}/>
                <Route path="/manager" element={<Manager/>}/> */}
            </Routes>
    
    );
}

export default Router;