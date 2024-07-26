import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";
import {Divider} from "@mui/material";

export function About() {
    const theme = useTheme();
    return (
        <Box bgcolor={theme.palette.secondary.main} color={theme.palette.common.white}
             className="py-10 px-8 flex flex-col flex-grow">
            <Typography variant="h2" className="self-center">About Us</Typography>
            <Divider aria-hidden="true" sx={{
                opacity: 1,
                borderColor: theme.palette.common.white,
                borderWidth: 2,
                width: '10%',
                alignSelf: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
            }}/>
            <Typography className="max-w-7xl text-center self-center">
                The Factory is a hardware design lab run by students, for students in the department of Electrical,
                Computer, and Software Engineering at McGill University. The Factory is a dedicated space in room 0080
                of the Trottier building for developing personal projects, gaining experience with the latest hardware,
                or just brainstorming ideas with fellow students. The Factory aims to foster an environment of
                innovation and collaboration where the resources are provided to make your ideas become a reality.
            </Typography>
        </Box>
    );
}
