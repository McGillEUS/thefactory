import { PastWorkshops } from "../components/PastWorkshops";
import { UpcomingWorkshops } from "../components/UpcomingWorkshops";
import { WorkshopDT } from "../types/WorkshopDT.ts";
import { useEffect, useState } from "react";

export default function Workshops() {
  const [workshops, setWorkshops] = useState<WorkshopDT[]>([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY; // Access the API key from .env file

    fetch("https://strapi.smithdrive.space/api/workshops?populate=*", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`, // Use the API key in the Authorization header
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        // Convert API response to the expected FactoryManager type
        const workshops: WorkshopDT[] = data.data;
        // console.log(workshops);

        setWorkshops(workshops);
      })
      .catch((error) => console.log(error));
  }, []);

  const upcomingWorkshops: WorkshopDT[] = [];
  const pastWorkshops: WorkshopDT[] = [];

  workshops.forEach((workshop) => {
    if (new Date(workshop.attributes.Date) > new Date()) {
      upcomingWorkshops.push(workshop);
    } else {
      pastWorkshops.push(workshop);
    }
  });

  return (
    <div className="flex flex-col items-center mt-12 pb-20">
      <UpcomingWorkshops upcomingWorkshops={upcomingWorkshops} />
      <br />
      <br />

      <PastWorkshops pastWorkshops={pastWorkshops} />
    </div>
  );
}
