import Box from "@mui/material/Box";

import {Pcb} from "./MainPageContent";
import {Printing3D} from "./MainPageContent";
import {Soldering} from "./MainPageContent";


export function Resources() {
    return (

        <div>
            <Box
                component="h2"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                RESOURCES
            </Box>
            <Box
                component="p"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mx: 35,
                    textAlign: "center",
                }}
            >
                Welcome to your one stop shop for any information you need to know about the different resources offered in the Factory! You can find the general information about each resource listed below, and go into further depth by navigating to the more info page.
            </Box>

            <Pcb />
            <Printing3D />
            <Soldering />
        </div>

    );
}
