import {WorkshopAccordion} from "./WorkshopAccordion.tsx";
import {WorkshopDTO} from "../types/WorkshopDTO.ts";
import { PageSection } from "./PageSection.tsx";

export function UpcomingWorkshops() {

    const upcomingWorkshops: WorkshopDTO[] = [
        {
            workshopId: 1,
            name: "Workshop 1",
            dateTime: new Date("2025-01-01 12:00:00"),
            location: "Online",
            image: "https://via.placeholder.com/150",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum, neque id fermentum tristique, " +
                "mi risus scelerisque dui, ac ultricies lorem mauris eu metus. In sagittis accumsan malesuada. " +
                "Suspendisse iaculis faucibus placerat. Aliquam erat volutpat. Curabitur eget interdum odio, vitae " +
                "vehicula justo. Etiam gravida eu neque a sollicitudin. Nunc blandit augue libero, sed ultricies erat " +
                "tempus tincidunt. Mauris egestas nisi eu eleifend gravida. Pellentesque in tortor neque.",
            signupLink: "https://www.google.com"

        },
        {
            workshopId: 2,
            name: "Workshop 2",
            dateTime: new Date("2025-02-02 12:00:00"),
            location: "Online",
            image: "https://via.placeholder.com/150",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum, neque id fermentum tristique, " +
                "mi risus scelerisque dui, ac ultricies lorem mauris eu metus. In sagittis accumsan malesuada. " +
                "Suspendisse iaculis faucibus placerat. Aliquam erat volutpat. Curabitur eget interdum odio, vitae " +
                "vehicula justo. Etiam gravida eu neque a sollicitudin. Nunc blandit augue libero, sed ultricies erat " +
                "tempus tincidunt. Mauris egestas nisi eu eleifend gravida. Pellentesque in tortor neque.",
            signupLink: "https://www.google.com"
        },
    ];

    return (
        <PageSection title="Upcoming Workshops" color="black">
            <WorkshopAccordion workshops={upcomingWorkshops}/>
        </PageSection>
    );
}