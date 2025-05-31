import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import WeekView from "./WeekView.tsx";
import { FactoryManager } from "../types/FactoryManager.ts";
import { useEffect, useState } from "react";
import { CircleCheck, CircleX } from "lucide-react";

type WeekViewSectionProps = {
  managers: FactoryManager[];
};

// Sort function for managers based on Start_Time
const sortByStartTime = (a: FactoryManager, b: FactoryManager) => {
  return a.attributes.Start_Time.getTime() - b.attributes.Start_Time.getTime();
};

export function WeekViewSection(props: WeekViewSectionProps) {
  const [openingDate, setOpeningDate] = useState<Date>();
  const [status, setStatus] = useState<boolean>();

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY; // Access the API key from .env file

    fetch("https://factorystrapi.mcgilleus.ca/api/Opening-date", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`, // Use the API key in the Authorization header
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const dateObject = new Date(`${data.data.attributes.date}T00:00:00`);
        console.log(`The opening date is: ${dateObject}`);

        setOpeningDate(dateObject);
      })
      .catch((error) => console.log(error));

    fetch("https://factorystrapi.mcgilleus.ca/api/open-status", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`, // Use the API key in the Authorization header
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.attributes.status);
        setStatus(data.data.attributes.status);
      })
      .catch((error) => console.log(error));
  }, []);

  const isFutureDate = openingDate && openingDate.getTime() > Date.now();

  // Helper function to format the date
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const daySuffix = (day: number): string => {
      if (day % 10 === 1 && day !== 11) return "st";
      if (day % 10 === 2 && day !== 12) return "nd";
      if (day % 10 === 3 && day !== 13) return "rd";
      return "th";
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    const day = date.getDate();
    return formattedDate.replace(`${day}`, `${day}${daySuffix(day)}`);
  };

  // Process managers to group by day of the week
  const officeHours: { [key: string]: FactoryManager[] } = {
    Monday: props.managers
      .filter(
        (manager) =>
          manager.attributes.Office_Hour_Day &&
          manager.attributes.Office_Hour_Day === "Monday"
      )
      .sort(sortByStartTime),
    Tuesday: props.managers
      .filter(
        (manager) =>
          manager.attributes.Office_Hour_Day &&
          manager.attributes.Office_Hour_Day === "Tuesday"
      )
      .sort(sortByStartTime),
    Wednesday: props.managers
      .filter(
        (manager) =>
          manager.attributes.Office_Hour_Day &&
          manager.attributes.Office_Hour_Day === "Wednesday"
      )
      .sort(sortByStartTime),
    Thursday: props.managers
      .filter(
        (manager) =>
          manager.attributes.Office_Hour_Day &&
          manager.attributes.Office_Hour_Day === "Thursday"
      )
      .sort(sortByStartTime),
    Friday: props.managers
      .filter(
        (manager) =>
          manager.attributes.Office_Hour_Day &&
          manager.attributes.Office_Hour_Day === "Friday"
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
