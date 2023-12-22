import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {OfficeHours} from "./pages/OfficeHours";
import {Workshops} from "./pages/Workshops";
import {Resources} from "./pages/Resources";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/office-hours" element={<OfficeHours/>}/>
                <Route path="/workshops" element={<Workshops/>}/>
                <Route path="/resources" element={<Resources/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default Router;
