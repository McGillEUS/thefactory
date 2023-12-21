import {BrowserRouter, Route, Routes} from "react-router-dom";
import ResourcesPage from "./pages/ResourcesPage.tsx";
import WorkshopsPage from "./pages/WorkshopsPage.tsx";
import OfficeHoursPage from "./pages/OfficeHoursPage.tsx";
import HomePage from "./pages/HomePage.tsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/office-hours" element={<OfficeHoursPage/>}/>
                <Route path="/workshops" element={<WorkshopsPage/>}/>
                <Route path="/resources" element={<ResourcesPage/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
