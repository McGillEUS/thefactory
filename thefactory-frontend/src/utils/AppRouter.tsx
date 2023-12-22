import {BrowserRouter, Route, Routes} from "react-router-dom";
import ResourcesPage from "../pages/ResourcesPage/ResourcesPage.tsx";
import WorkshopsPage from "../pages/WorkshopsPage/WorkshopsPage.tsx";
import OfficeHoursPage from "../pages/OfficeHoursPage/OfficeHoursPage.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";

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
