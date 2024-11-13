import { WorkshopAccordion } from "./WorkshopAccordion.tsx";
import { WorkshopDT } from "../types/WorkshopDT.ts";
import { PageSection } from "./PageSection.tsx";

type UpcomingWorkshopsProps = {
  upcomingWorkshops: WorkshopDT[];
};

export function UpcomingWorkshops(props: UpcomingWorkshopsProps) {

  return (
    <PageSection title="Upcoming Workshops" color="black">
      <WorkshopAccordion workshops={props.upcomingWorkshops} />
    </PageSection>
  );
}
