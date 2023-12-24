import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";

export function Membership() {
    const theme = useTheme();
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
                MEMBERSHIP
            </Box>
            <Box
                component="p"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mx: 20,
                    textAlign: "center",
                }}
            >
                Becoming a member of the factory is free and gives you access to a space dedicated to creativity.
                Members have access to the lab during opening hours and can use the equipment available. In addition,
                members have access to the tools and components available in the lab. Members can also participate in
                workshops and office hours to learn new skills and get help with their projects.
            </Box>
        </div>
    );
}
