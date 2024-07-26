import {WorkshopAccordion} from "./WorkshopAccordion.tsx";
import {WorkshopDTO} from "../../../model/WorkshopDTO.ts";
import {PageSection} from "../../../components/PageSection/PageSection.tsx";

export function PastWorkshops() {
    const pastWorkshops: WorkshopDTO[] = [
        {
            workshopId: 1,
            name: 'Workshop 1',
            dateTime: new Date('2021-01-01 12:00:00'),
            location: 'Online',
            image: 'https://via.placeholder.com/150',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum, neque id fermentum tristique, ' +
                'mi risus scelerisque dui, ac ultricies lorem mauris eu metus. In sagittis accumsan malesuada. ' +
                'Suspendisse iaculis faucibus placerat. Aliquam erat volutpat. Curabitur eget interdum odio, vitae ' +
                'vehicula justo. Etiam gravida eu neque a sollicitudin. Nunc blandit augue libero, sed ultricies erat ' +
                'tempus tincidunt. Mauris egestas nisi eu eleifend gravida. Pellentesque in tortor neque.',
            googleDriveLink: 'https://drive.google.com/drive/folders/1',
            signupLink: 'https://www.google.com'
        },
        {
            workshopId: 2,
            name: 'Workshop 2',
            dateTime: new Date('2022-02-02 12:00:00'),
            location: 'Online',
            image: 'https://via.placeholder.com/150',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum, neque id fermentum tristique, ' +
                'mi risus scelerisque dui, ac ultricies lorem mauris eu metus. In sagittis accumsan malesuada. ' +
                'Suspendisse iaculis faucibus placerat. Aliquam erat volutpat. Curabitur eget interdum odio, vitae ' +
                'vehicula justo. Etiam gravida eu neque a sollicitudin. Nunc blandit augue libero, sed ultricies erat ' +
                'tempus tincidunt. Mauris egestas nisi eu eleifend gravida. Pellentesque in tortor neque.',
            googleDriveLink: 'https://drive.google.com/drive/folders/1',
            signupLink: 'https://www.google.com'
        },
    ];

    return (
        <PageSection title="Past Workshops" color="black">
            <WorkshopAccordion workshops={pastWorkshops}/>
        </PageSection>
    );
}
