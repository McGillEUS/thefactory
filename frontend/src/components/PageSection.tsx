import React from "react";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export function PageSection(props: {
  title: string;
  color?: string;
  children: React.ReactNode;
  sx?: any;
  className?: string;
}) {
  const theme = useTheme();
  const color =
    props.color == "white"
      ? theme.palette.common.white
      : theme.palette.common.black;
  return (
    <Box
      className={
        "px-8 md:w-8/12 max-w-7xl flex flex-col justify-center" + props.className
      }
      sx={props.sx}
    >
      <Typography
        className="text-center"
        sx={{
          fontSize: {
            md: "4rem", // Size for medium screens and above
            sm: "3.5rem", // Size for small screens
            xs: "2.5rem", // Size for extra-small screens
          },
        }}
      >
        {props.title}
      </Typography>

      <Divider
        aria-hidden="true"
        sx={{
          opacity: 1,
          borderColor: color,
          borderWidth: 2,
          width: "10%",
          alignSelf: "center",
          marginTop: "0.3rem",
          marginBottom: "1rem",
        }}
      />
      {props.children}
    </Box>
  );
}
