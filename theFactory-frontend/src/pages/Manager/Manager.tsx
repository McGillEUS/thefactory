import Typography from "@mui/material/Typography";
import {Grid, Tab, Tabs} from "@mui/material";

export function Manager() {
    return (
        <div>
            <Typography variant="h2">Manager</Typography>
            <Grid container>
                <Grid item xs={12} md={3}>
                    <Tabs orientation={"vertical"}>
                        <Tab label="Profile"/>
                        <Tab label="Members"/>
                        <Tab label="Rentals"/>
                        <Tab label="Inventory"/>
                    </Tabs>
                </Grid>
                <Grid item xs={12} md={9}>

                </Grid>
            </Grid>

        </div>
    );
}
