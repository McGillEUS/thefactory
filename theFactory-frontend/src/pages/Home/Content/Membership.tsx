import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Divider, Grid, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Button from "@mui/material/Button";
import {
    AccessTimeOutlined,
    ConfirmationNumberOutlined,
    ConstructionOutlined,
    EngineeringOutlined,
    GroupsOutlined,
    HealthAndSafetyOutlined,
    HelpOutline,
    MemoryOutlined
} from "@mui/icons-material";

export function Membership() {
    const theme = useTheme();
    return (
        <Box className="py-10 px-8 flex flex-col flex-grow">
            <Typography variant="h2" className="self-center">MEMBERSHIP</Typography>
            <Divider aria-hidden="true" sx={{
                opacity: 1,
                borderColor: theme.palette.common.black,
                borderWidth: 2,
                width: '10%',
                alignSelf: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
            }}/>
            <Typography className="max-w-7xl text-center self-center">
                Becoming a member of the factory is free and gives you access to a space dedicated to creativity.Whether
                you want to use the space to work on personal projects, gain experience with hardware, or brainstorm
                ideas with fellow students, the Factory is the place for you!
            </Typography>
            <Typography variant="h5" className=" mt-8 self-center">Membership Benefits</Typography>
            <Grid container spacing={2} className="max-w-7xl self-center">
                <Grid item xs={12} sm={6}>
                    <List className="flex flex-col justify-items-start">
                        <ListItem className="h-16">
                            <ListItemIcon><AccessTimeOutlined/></ListItemIcon>
                            <ListItemText>Access to the lab during opening hours</ListItemText>
                        </ListItem>
                        <ListItem className="h-16">
                            <ListItemIcon><ConstructionOutlined/></ListItemIcon>
                            <ListItemText>Use of advanced equipment available in the lab</ListItemText>
                        </ListItem>
                        <ListItem className="h-16">
                            <ListItemIcon><MemoryOutlined/></ListItemIcon>
                            <ListItemText>Access to components for personal projects</ListItemText>
                        </ListItem>
                        <ListItem className="h-16">
                            <ListItemIcon><ConfirmationNumberOutlined/></ListItemIcon>
                            <ListItemText>Rental of equipment for personal projects</ListItemText>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <List className="m-auto">
                        <ListItem className="h-16">
                            <ListItemIcon><GroupsOutlined/></ListItemIcon>
                            <ListItemText>Collaboration with other members</ListItemText>
                        </ListItem>
                        <ListItem className="h-16">
                            <ListItemIcon><HelpOutline/></ListItemIcon>
                            <ListItemText>Support from experienced managers</ListItemText>
                        </ListItem>
                        <ListItem className="h-16">
                            <ListItemIcon><HealthAndSafetyOutlined/></ListItemIcon>
                            <ListItemText> Available training on lab safety and equipment use</ListItemText>
                        </ListItem>
                        <ListItem className="h-16">
                            <ListItemIcon><EngineeringOutlined/></ListItemIcon>
                            <ListItemText>Participation in workshops</ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Button
                variant="text"
                color="secondary"
                href="/membership"
                className="w-fit self-center"
            >
                <Typography className="font-bolder">Become a member</Typography>
            </Button>
        </Box>
    );
}
