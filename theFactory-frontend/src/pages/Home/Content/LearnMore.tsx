import Box from "@mui/material/Box";
import {Divider, Grid, useTheme} from "@mui/material";
import {EngineeringOutlined, FolderCopyOutlined, HomeRepairServiceOutlined, PeopleOutline} from "@mui/icons-material";
import LearnMoreBox from "./LearnMoreBox.tsx";
import Typography from "@mui/material/Typography";

export function LearnMore() {
    const theme = useTheme();
    return (
        <Box className="py-10 px-48 flex flex-col flex-grow" bgcolor={theme.palette.primary.main}
             color={theme.palette.common.white}>
            <Typography variant="h2" className="self-center">Learn More</Typography>
            <Divider aria-hidden="true" sx={{
                opacity: 1,
                borderColor: theme.palette.common.white,
                borderWidth: 2,
                width: '10%',
                alignSelf: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
            }}/>
            <Grid container spacing={2} className="max-w-7xl self-center">
                <Grid item xs={12} sm={6}>
                    <LearnMoreBox title="Office Hours" url="/office-hours" icon={<PeopleOutline/>}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LearnMoreBox title="Workshops" url="/workshops" icon={<EngineeringOutlined/>}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LearnMoreBox title="Resources" url="/resources" icon={<FolderCopyOutlined/>}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LearnMoreBox title="Inventory" url="/inventory" icon={<HomeRepairServiceOutlined/>}/>
                </Grid>
            </Grid>

        </Box>
    );
}
