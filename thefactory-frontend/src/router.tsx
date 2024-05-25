import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {OfficeHours} from "./pages/OfficeHours";
import {Workshops} from "./pages/Workshops";
import {Resources} from "./pages/Resources";
import {PcbResources} from "./pages/Resources/PcbPage";
import {SolderingResources} from "./pages/Resources/SolderingPage";
import {Printing3DResources} from "./pages/Resources/Printing3DPage";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/office-hours" element={<OfficeHours/>}/>
                <Route path="/workshops" element={<Workshops/>}/>
                <Route path="/resources" element={<Resources/>}/>
                <Route path="/pcbpage" element={<PcbResources/>}/>
                <Route path="/solderingpage" element={<SolderingResources/>}/>
                <Route path="/printing3Dpage" element={<Printing3DResources/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
