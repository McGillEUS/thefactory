import { WeekViewSection } from "../components/WeekViewSection";
import { ManagerSection } from "../components/ManagerSection";
import { useManagerAndLabData } from "../Contexts/ManagerAndLabContext";

function OfficeHours() {
  const managers = useManagerAndLabData().managers; // Access the managers data from context

  if (!managers) return <Spinner />;

  return (
    <>
      <WeekViewSection managers={managers} />
      <ManagerSection managers={managers} />
    </>
  );
}

export default OfficeHours;

// components/Spinner.tsx
export function Spinner() {
  return (
    <div className="flex justify-center items-center h-[770px]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
    </div>
  );
}
