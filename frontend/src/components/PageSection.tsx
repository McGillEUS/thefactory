import React from "react";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
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
        "px-8 max-w-7xl flex flex-col justify-center" + props.className
      }
      sx={props.sx}
    >
      <h2
        className="text-center text-4xl md:text-5xl lg:text-6xl "
        color={color}
      >
        {props.title}
      </h2>
      <Divider
        aria-hidden="true"
        sx={{
          opacity: 1,
          borderColor: color,
          borderWidth: 2,
          width: "10%",
          alignSelf: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      />
      {props.children}
    </Box>
  );
}
