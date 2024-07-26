import {To, useNavigate} from "react-router-dom";
import React from "react";
import Typography from "@mui/material/Typography";
import {Box, Card, CardActionArea} from "@mui/material";
import {useTheme} from "@mui/material/styles";

export function LearnMoreBox(props: {
    url: To;
    icon: any;
    title: string;
}) {
    const navigate = useNavigate();
    const theme = useTheme();
    return (
        <Card sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            borderWidth: 0,
        }}>
            <CardActionArea
                className="py-6"
                onClick={() => navigate(props.url)}
            >
                <Box display="flex" justifyContent="center" alignItems="center">
                    {React.cloneElement(props.icon, {style: {fontSize: '4rem', marginBottom: '1rem'}})}
                </Box>
                <Typography variant="h6">{props.title}</Typography>
            </CardActionArea>
        </Card>
    );
}

export default LearnMoreBox;
