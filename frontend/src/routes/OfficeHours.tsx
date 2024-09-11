import { useEffect, useState } from "react";
import { ManagerSection } from "../components/ManagerSection";
import { WeekViewSection } from "../components/WeekViewSection";
import { FactoryManager, Attributes } from "../types/FactoryManager";

// Define the type for API response, where times are strings
type APIAttributes = Omit<Attributes, 'Start_Time' | 'End_Time'> & {
  Start_Time: string;
  End_Time: string;
};

type APIFactoryManager = {
  id: number;
  attributes: APIAttributes;
};


// Function to convert time string to Date object
function convertTimeStringToDate(timeString: string) {
  const [hours, minutes] = timeString.split(":").map(Number);
  return new Date(2021, 0, 1, hours, minutes); // January is month 0
}

function OfficeHours() {
  const [managers, setManagers] = useState<FactoryManager[]>([]);

  useEffect(() => {
    fetch("https://strapi.smithdrive.space/api/managers?populate=*", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Convert API response to the expected FactoryManager type
        const managersWithDates: FactoryManager[] = data.data.map((manager: APIFactoryManager) => ({
          ...manager,
          attributes: {
            ...manager.attributes,
            Start_Time: convertTimeStringToDate(manager.attributes.Start_Time),
            End_Time: convertTimeStringToDate(manager.attributes.End_Time),
          },
        }));

        setManagers(managersWithDates);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <WeekViewSection managers={managers} />
      <ManagerSection managers={managers} />
    </>
  );
}

export default OfficeHours;
