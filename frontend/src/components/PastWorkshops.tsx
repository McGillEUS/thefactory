import { WorkshopAccordion } from "./WorkshopAccordion.tsx";
import { WorkshopDT } from "../types/WorkshopDT.ts";
import { PageSection } from "./PageSection.tsx";

type PastWorkshopsProps = {
  pastWorkshops: WorkshopDT[];
};

export function PastWorkshops(props: PastWorkshopsProps) {
  // const pastWorkshops: WorkshopDTO[] = [

  return (
    <PageSection title="Past Workshops" color="black">
      <WorkshopAccordion workshops={props.pastWorkshops} />
    </PageSection>
  );
}
