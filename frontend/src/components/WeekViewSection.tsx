import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import WeekView from "./WeekView.tsx";
import { FactoryManager } from "../types/FactoryManager.ts";

type WeekViewSectionProps = {
  managers: FactoryManager[];
};

// Sort function for managers based on Start_Time
const sortByStartTime = (a: FactoryManager, b: FactoryManager) => {
  return a.attributes.Start_Time.getTime() - b.attributes.Start_Time.getTime();
};

export function WeekViewSection(props: WeekViewSectionProps) {
  // Process managers to group by day of the week
  const officeHours: { [key: string]: FactoryManager[] } = {
    Monday: props.managers
      .filter(
        (manager) =>
          manager.attributes.Office_Hour_Day &&
          manager.attributes.Office_Hour_Day === "Monday" ||
          manager.attributes.Office_Hour_Day_2 &&
          manager.attributes.Office_Hour_Day_2 === "Monday"

      )
      .sort(sortByStartTime),
    Tuesday: props.managers
      .filter(
        (manager) =>
          manager.attributes.Office_Hour_Day &&
          manager.attributes.Office_Hour_Day === "Tuesday" ||
          manager.attributes.Office_Hour_Day_2 &&
          manager.attributes.Office_Hour_Day_2 === "Tuesday"
      )
      .sort(sortByStartTime),
    Wednesday: props.managers
      .filter(
        (manager) =>
          manager.attributes.Office_Hour_Day &&
          manager.attributes.Office_Hour_Day === "Wednesday" ||
          manager.attributes.Office_Hour_Day_2 &&
          manager.attributes.Office_Hour_Day_2 === "Wednesday"
      )
      .sort(sortByStartTime),
    Thursday: props.managers
      .filter(
        (manager) =>
          manager.attributes.Office_Hour_Day &&
          manager.attributes.Office_Hour_Day === "Thursday" ||
          manager.attributes.Office_Hour_Day_2 &&
          manager.attributes.Office_Hour_Day_2 === "Thursday"
      )
      .sort(sortByStartTime),
    Friday: props.managers
      .filter(
        (manager) =>
          manager.attributes.Office_Hour_Day &&
          manager.attributes.Office_Hour_Day === "Friday" ||
            manager.attributes.Office_Hour_Day_2 &&
          manager.attributes.Office_Hour_Day_2 === "Friday"
      )
      .sort(sortByStartTime),
  };

  return (
    <Box className="py-10 px-8 flex flex-col basis-full items-center min-h-[750px] ">
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
        Office Hours
      </Typography>

      <Divider
        aria-hidden="true"
        sx={{
          opacity: 1,
          borderColor: "black",
          borderWidth: 2,
          width: "10%",
          alignSelf: "center",
          marginTop: "0.3rem",
          marginBottom: "1rem",
        }}
      />

    

      <WeekView
        officeHours={officeHours}
        startTime={new Date(2021, 1, 1, 10, 30)}
        endTime={new Date(2021, 1, 1, 17, 30)}
      />
    </Box>
  );
}
