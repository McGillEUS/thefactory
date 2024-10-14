import { useEffect, useState } from "react";
import { ManagerSection } from "../components/ManagerSection";
import { WeekViewSection } from "../components/WeekViewSection";
import { FactoryManager, Attributes } from "../types/FactoryManager";

function correctForDuplicateFirstNames(officeHours: FactoryManager[]) {
  const firstNameCount: { [key: string]: number } = {};

  // Count occurrences of each first name
  officeHours.forEach((manager) => {
    const firstName = manager.attributes.First_Name.trim();
    firstNameCount[firstName] = (firstNameCount[firstName] || 0) + 1;
  });

  // Modify the first names of duplicate managers
  officeHours.forEach((manager) => {
    const firstName = manager.attributes.First_Name.trim();
    if (firstNameCount[firstName] > 1) {
      // If there are duplicates, add the last name initial
      manager.attributes.Modified_First_Name = `${firstName} ${manager.attributes.Last_Name.charAt(
        0
      )}`;
    } else {
      // If there are no duplicates, keep the original first name
      manager.attributes.Modified_First_Name = firstName;
    }
  });

  return officeHours; // Return the corrected array
}

// Function to convert time string to Date object, accounting for null values
function convertTimeStringToDate(timeString: string | null) {
  if (!timeString) return null; // If timeString is null, return null
  const [hours, minutes] = timeString.split(":").map(Number);
  return new Date(2021, 0, 1, hours, minutes); // January is month 0
}

function OfficeHours() {
  const [managers, setManagers] = useState<FactoryManager[]>([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY; // Access the API key from .env file

    fetch("https://strapi.smithdrive.space/api/managers?populate=*", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`, // Use the API key in the Authorization header
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Convert API response to the expected FactoryManager type
        const managersWithDates: FactoryManager[] = data.data.map(
          (manager: APIFactoryManager) => ({
            ...manager,
            attributes: {
              ...manager.attributes,
              Start_Time: convertTimeStringToDate(
                manager.attributes.Start_Time
              ),
              End_Time: convertTimeStringToDate(manager.attributes.End_Time),
            },
          })
        );

        // Correct for duplicate first names
        const correctedManagers =
          correctForDuplicateFirstNames(managersWithDates);
        setManagers(correctedManagers);
        console.log(correctedManagers);
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

// Define the type for API response, where times are strings
type APIAttributes = Omit<Attributes, "Start_Time" | "End_Time"> & {
  Start_Time: string;
  End_Time: string;
};

type APIFactoryManager = {
  id: number;
  attributes: APIAttributes;
};
