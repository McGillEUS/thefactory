import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";
import {useTheme} from "@mui/material/styles";

export function PageSection(props: {
    title: string,
    color?: string,
    children: React.ReactNode,
    sx?: any
    className?: string
}) {
    const theme = useTheme();
    const color = props.color == 'white' ? theme.palette.common.white : theme.palette.common.black;
    return (
        <Box className={"px-8 max-w-7xl flex flex-col justify-center" + props.className} sx={props.sx}>
            <Typography variant="h2" color={color}>{props.title}</Typography>
            <Divider aria-hidden="true" sx={{
                opacity: 1,
                borderColor: color,
                borderWidth: 2,
                width: '10%',
                alignSelf: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
            }}/>
            {props.children}
        </Box>
    );
}
