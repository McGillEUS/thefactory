import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";


export function InfoBox({ image, title, paragraph, pageUrl }) {
    return (
        <Grid
            container
            sx={{
                borderBottom: "2px solid #2c3e50",
                borderRadius: "0",
                padding: "16px",
                width: "65%",
                margin: "auto",
                marginBottom: "8px",
            }}
        >
            <Grid item xs={12} md={3} sx={{ display: "flex", alignItems: "center" }}>
                <Box
                    component="img"
                    src={image}
                    alt="Your Alt Text"
                    sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                        borderRadius: "4px",
                    }}
                />
            </Grid>
            <Grid item xs={12} md={9}>
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        mx: 2,
                        alignItems: "left",
                    }}
                >
                    <Box
                        component="h3"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            mx: 2,
                            marginTop: "0px",
                            marginBottom: "1px",
                        }}
                    >
                        {title}
                    </Box>
                    <Box
                        component="p"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                            mx: 2,
                            textAlign: "left",
                            marginTop: "0px",
                            marginBottom: "1px",
                        }}
                    >
                        {paragraph}
                    </Box>

                    <Button
                        href={pageUrl}
                        variant="contained"
                        color="primary"
                        sx={{
                            borderRadius: "20px",
                            marginTop: "8px",
                            mx: 2,
                            width: "25%",
                            "&:hover": {
                                backgroundColor: "#61c299",
                            },
                        }}
                    >
                        More Info
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}





// last box for our equipment which is autoupdating
// only managers start print
// how to use the stuff at the factory (factory specific things)

