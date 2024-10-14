import { useState } from "react";
import ManagerInfo from "./ManagerInfo.tsx";
import { FactoryManager } from "../types/FactoryManager.ts";

export default function WeekView(props: {
  officeHours: { [key: string]: FactoryManager[] };
  startTime: Date;
  endTime: Date;
}) {
  const [open, setOpen] = useState(false);
  const [selectedManager, setSelectedManager] = useState<FactoryManager | null>(
    null
  );

  function selectManager(manager: FactoryManager) {
    setSelectedManager(manager);
    setOpen(true);
  }

  function calcTimeSlots(start: Date, end: Date): number {
    return Math.ceil((end.getTime() - start.getTime()) / 1800000); // 30-minute slots
  }

  function toTimeString(date: Date): string {
    return date.toLocaleTimeString("en-CA", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  function getSlotHeight(startTime: Date, endTime: Date): number {
    const totalSlots = calcTimeSlots(startTime, endTime);
    const oneHourHeight = 100; // Base height for 1 hour
    const additionalSlotHeight = 35; // Smaller height for additional time (30 min)

    if (totalSlots <= 2) {
      // One hour or less
      return oneHourHeight;
    } else {
      // More than one hour
      return oneHourHeight + (totalSlots - 2) * additionalSlotHeight;
    }
  }

  return (
    <div className="flex justify-center items-center mx-auto py-4">
      <div className="grid grid-cols-5 lg:gap-5 w-full max-w-6xl ">
        {/* Office Hours for each day */}
        {Object.keys(props.officeHours).map((day, dayIndex) => (
          <div key={dayIndex} className="flex flex-col">
            <div className="text-center font-semibold h-8 md:text-base text-[0.7rem] lg:mt-4">
              {day}
            </div>
            {props.officeHours[day].map((officeHour, index) => {
              return (
                <div
                  key={index}
                  className="bg-factory-green text-white rounded-md lg:p-2 pt-1 px-1 m-1 cursor-pointer transition-transform transform hover:scale-105 text-center"
                  style={{
                    height: `${getSlotHeight(
                      new Date(officeHour.attributes.Start_Time),
                      new Date(officeHour.attributes.End_Time)
                    )}px`, // Adjust height based on duration
                  }}
                  onClick={() => selectManager(officeHour)}
                >
                  <div className="text-xs md:text-sm">
                    {officeHour.attributes.First_Name}
                  </div>
                  <div className="text-[0.6rem] md:text-sm">
                    {toTimeString(officeHour.attributes.Start_Time)} -{" "}
                    {toTimeString(officeHour.attributes.End_Time)}
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* Manager Info Popup */}
        <ManagerInfo
          manager={selectedManager}
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
}
