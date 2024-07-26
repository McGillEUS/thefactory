import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export function Footer() {
    const theme = useTheme();
    return (
        <footer>
            <Box sx={{
                bgcolor: theme.palette.secondary.main,
                color: theme.palette.common.white,
                padding: '1rem',
            }}>
                <Typography variant="h2">Contact Us</Typography>
                <Typography className="text-center">
                    If you have any questions or comments, feel free to contact us at <a
                    href="mailto:thefactory@mcgilleus.ca">thefactory@mcgilleus.ca</a>
                </Typography>

            </Box>
        </footer>
    )
        ;
}
