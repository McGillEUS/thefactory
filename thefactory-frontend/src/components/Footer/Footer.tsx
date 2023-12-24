import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";

export function Footer() {
    const theme = useTheme();
    return (
        <footer>
            <div style={{
                backgroundColor: `${theme.palette.secondary.main}`,
                padding: "1rem",
            }}>
                <Box
                    component="h2"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    CONTACT US
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
                    If you have any questions or comments, feel free to contact us at
                    <a href="mailto:thefactory@mcgilleus.ca">thefactory@mcgilleus.ca</a>
                </Box>


            </div>
        </footer>
    )
        ;
}
