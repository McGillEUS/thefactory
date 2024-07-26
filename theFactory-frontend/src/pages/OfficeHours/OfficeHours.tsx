import './officeHours.css';
import {WeekViewSection} from "./Content/WeekViewSection.tsx";
import {ManagerSection} from "./Content/ManagerSection.tsx";
import Box from "@mui/material/Box";

export function OfficeHours() {
    return (
        <Box>
            <WeekViewSection/>
            <ManagerSection/>
        </Box>
    );
}
