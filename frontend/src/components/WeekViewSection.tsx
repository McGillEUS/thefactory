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
  //Now need to do some data processing to filter the managers into the right days
  
  let mondayManagers: FactoryManager[] = props.managers
    .filter((manager) => manager.attributes.Office_Hour_Day === "Monday")
    .sort(sortByStartTime);

  let tuesdayManagers: FactoryManager[] = props.managers
    .filter((manager) => manager.attributes.Office_Hour_Day === "Tuesday")
    .sort(sortByStartTime);

  let wednesdayManagers: FactoryManager[] = props.managers
    .filter((manager) => manager.attributes.Office_Hour_Day === "Wednesday")
    .sort(sortByStartTime);

  let thursdayManagers: FactoryManager[] = props.managers
    .filter((manager) => manager.attributes.Office_Hour_Day === "Thursday")
    .sort(sortByStartTime);

  let fridayManagers: FactoryManager[] = props.managers
    .filter((manager) => manager.attributes.Office_Hour_Day === "Friday")
    .sort(sortByStartTime);

  const officeHours: { [key: string]: FactoryManager[] } = {
    Monday: mondayManagers,
    Tuesday: tuesdayManagers,
    Wednesday: wednesdayManagers,
    Thursday: thursdayManagers,
    Friday: fridayManagers,
  };

  return (
    <Box className="py-10 px-8 flex flex-col basis-full items-center">
      <Typography variant="h2" className="self-center">
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
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      />

      <WeekView
        officeHours={officeHours}
        calendarHeight="60dvh"
        startTime={new Date(2021, 1, 1, 10, 30)}
        endTime={new Date(2021, 1, 1, 17, 30)}
      />
    </Box>
  );
}
