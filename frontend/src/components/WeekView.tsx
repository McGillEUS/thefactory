import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import ManagerInfo from "./ManagerInfo.tsx";
import { useState } from "react";
import { FactoryManager } from "../types/FactoryManager.ts";

export default function WeekView(props: {
  officeHours: { [key: string]: FactoryManager[] };
  calendarHeight: string;
  startTime: Date;
  endTime: Date;
}) {
  const numHourSlots = calcHourSlots(props.startTime, props.endTime);
  const num30MinSlots = calc30MinSlots(props.startTime, props.endTime);
  const [open, setOpen] = useState(false);
  const [selectedManager, setSelectedManager] = useState<FactoryManager | null>(null);

  function selectManager(manager: FactoryManager) {
    setSelectedManager(manager);
    setOpen(true);
  }

  function calcHourSlots(start: Date, end: Date): number {
    return Math.ceil((end.getTime() - start.getTime()) / 3600000);
  }

  function calc30MinSlots(start: Date, end: Date): number {
    return Math.ceil((end.getTime() - start.getTime()) / 1800000);
  }

  function toTimeString(date: Date): string {
    return date.toLocaleTimeString("en-CA", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  return (
    <Box className="flex flex-row" sx={{ translate: "-1.75rem" }}>
      {" "}
      {/* Offset by 3.5rem / 2 so that center col (wednesday) is centered on element */}
      <Grid
        container
        columns={num30MinSlots + 1}
        direction="column"
        height={props.calendarHeight}
        width="fit-content"
      >
        {" "}
        {/* Time  col*/}
        <Grid item xs={1}>
          <Typography className="text-center"></Typography>{" "}
          {/* Empty cell for even spacing*/}
        </Grid>
        {Array.from({ length: numHourSlots }).map((_, index) => {
          return (
            <Grid item xs={2} key={index}>
              <Typography
                variant="caption"
                className="float-end"
                width="3.5rem"
              >
                {toTimeString(
                  new Date(props.startTime.getTime() + index * 60 * 60 * 1000)
                )}{" "}
                {/* Add hour (in ms) for every loop iteration to show all hours from start to end time */}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
      {Object.keys(props.officeHours).map((day) => {
        return (
          <Grid
            container
            columns={num30MinSlots + 1}
            direction="column"
            height={props.calendarHeight}
            key={day}
          >
            {" "}
            {/* Day col */}
            <Grid item xs={1}>
              <Typography className="text-center">{day}</Typography>
            </Grid>
            {props.officeHours[day].map((officeHour, index) => {
              return (
                <Grid
                  item
                  xs={calc30MinSlots(
                    officeHour.attributes.Start_Time,
                    officeHour.attributes.End_Time
                  )}
                  key={index}
                  sx={{
                    paddingY: "0.1rem",
                    paddingX: "0.25rem",
                  }}
                >
                  <Box
                    onClick={() => selectManager(officeHour)}
                    sx={{
                      backgroundColor: "#61c299",
                      color: "#FFFFFF",
                      borderRadius: "0.15rem",
                      paddingX: "0.5rem",
                      paddingY: "0.25rem",
                      height: "100%",
                      transition: "all ease-in-out 0.1s",
                      "&:hover": {
                        backgroundColor: "#77d1ab",
                        transform: "scale(1.009)",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography>{officeHour.attributes.First_Name}</Typography>
                    <Typography variant="caption">
                      {toTimeString(officeHour.attributes.Start_Time)} -{" "}
                      {toTimeString(officeHour.attributes.End_Time)}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        );
      })}
      <ManagerInfo
        manager={selectedManager}
        open={open}
        onClose={() => setOpen(false)}
      />
    </Box>
  );
}
