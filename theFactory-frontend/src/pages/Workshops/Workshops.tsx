import Box from "@mui/material/Box";
import {PastWorkshops, UpcomingWorkshops} from "./Content";
import {AddWorkshop} from "./Content/AddWorkshop.tsx";

export function Workshops() {
    return (
        <Box>
            <UpcomingWorkshops/>
            <PastWorkshops/>
            <AddWorkshop/>
        </Box>
    );
}
