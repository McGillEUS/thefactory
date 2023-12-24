import Box from "@mui/material/Box";

export function About() {
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
                ABOUT US
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
                The Factory is a hardware design lab run by students, for students in the department of Electrical,
                Computer, and Software Engineering at McGill University. The Factory is a dedicated space in room 0080
                of the Trottier building for developing personal projects, gaining experience with the latest hardware,
                or just brainstorming ideas with fellow students. The Factory aims to foster an environment of
                innovation and collaboration where the resources are provided to make your ideas become a reality.
            </Box>
        </div>
    );
}
