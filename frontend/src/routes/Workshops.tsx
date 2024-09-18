import Box from "@mui/material/Box";
import { PastWorkshops } from "../components/PastWorkshops";
import { UpcomingWorkshops } from "../components/UpcomingWorkshops";
import { AddWorkshop } from "../components/AddWorkshop";

export default function Workshops() {
  return (
    <div className="flex flex-col items-center mt-12 pb-20">
      <UpcomingWorkshops />
      <br />
      <br />

      <PastWorkshops />
      <AddWorkshop />
    </div>
  );
}
