import { PastWorkshops } from "../components/PastWorkshops";
import { UpcomingWorkshops } from "../components/UpcomingWorkshops";
import { WorkshopDT } from "../types/WorkshopDT";
import { useManagerAndLabData } from "../Contexts/ManagerAndLabContext";

export default function Workshops() {
  const { workshops } = useManagerAndLabData();

  if (!workshops) return <Spinner />;

  const upcomingWorkshops: WorkshopDT[] = [];
  const pastWorkshops: WorkshopDT[] = [];

  workshops.forEach((workshop) => {
    // Combine the workshop date and start time into a Date object
    const workshopStartDateTime = new Date(
      `${workshop.attributes.Date}T${workshop.attributes.StartTime}`
    );

    // Compare workshop start date and time with the current date and time
    if (workshopStartDateTime > new Date()) {
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

// components/Spinner.tsx
export function Spinner() {
  return (
    <div className="flex justify-center items-center h-[770px]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
    </div>
  );
}
