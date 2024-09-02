import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";
import WeekView from "./WeekView.tsx"
import { FactoryManager } from "../types/FactoryManager.ts";

type WeekViewSectionProps = {
    managers: FactoryManager[];
}






export function WeekViewSection(props:WeekViewSectionProps) {

    //Now need to do some data processing to filter the managers into the right days

    
    let mondayManagers:FactoryManager[] = props.managers.filter((manager)=> manager.attributes.Office_Hour_Day === "Monday");
    let tuesdayManagers:FactoryManager[] = props.managers.filter((manager)=> manager.attributes.Office_Hour_Day === "Tuesday");
    let wednesdayManagers:FactoryManager[] = props.managers.filter((manager)=> manager.attributes.Office_Hour_Day === "Wednesday");
    let thursdayManagers:FactoryManager[] = props.managers.filter((manager)=> manager.attributes.Office_Hour_Day === "Thursday");
    let fridayManagers:FactoryManager[] = props.managers.filter((manager)=> manager.attributes.Office_Hour_Day === "Friday");



    
    const mondayHours = [
        {
            name: 'Theo',
            start: new Date(2021, 1, 1, 11, 0),
            end: new Date(2021, 1, 1, 12, 0)
        },
        {
            name: 'Albert',
            start: new Date(2021, 1, 1, 12, 0),
            end: new Date(2021, 1, 1, 13, 0)
        },
        {
            name: 'Aleksej',
            start: new Date(2021, 1, 1, 13, 0),
            end: new Date(2021, 1, 1, 14, 0)
        },
        {
            name: 'Alex',
            start: new Date(2021, 1, 1, 14, 0),
            end: new Date(2021, 1, 1, 15, 0)
        },
        {
            name: 'Allison',
            start: new Date(2021, 1, 1, 15, 0),
            end: new Date(2021, 1, 1, 16, 0)
        },
        {
            name: 'Andrew Kan',
            start: new Date(2021, 1, 1, 16, 0),
            end: new Date(2021, 1, 1, 17, 0)
        },
    ]

    const tuesdayHours = [
        {
            name: 'Andrew Palucci',
            start: new Date(2021, 1, 1, 11, 0),
            end: new Date(2021, 1, 1, 12, 0)
        },
        {
            name: 'Antoine',
            start: new Date(2021, 1, 1, 12, 0),
            end: new Date(2021, 1, 1, 13, 0)
        },
        {
            name: 'Nicolas',
            start: new Date(2021, 1, 1, 13, 0),
            end: new Date(2021, 1, 1, 14, 0)
        },
      
        {
            name: 'Bilar',
            start: new Date(2021, 1, 1, 14, 0),
            end: new Date(2021, 1, 1, 15, 30)
        },
        {
            name: 'Cyril',
            start: new Date(2021, 1, 1, 15, 30),
            end: new Date(2021, 1, 1, 17, 0)
        },
    ]

    const wednesdayHours = [
        {
            name: 'Helin',
            start: new Date(2021, 1, 1, 11, 0),
            end: new Date(2021, 1, 1, 12, 0)
        },
        {
            name: 'John-Paul',
            start: new Date(2021, 1, 1, 12, 0),
            end: new Date(2021, 1, 1, 13, 0)
        },
        {
            name: 'Joseph',
            start: new Date(2021, 1, 1, 13, 0),
            end: new Date(2021, 1, 1, 14, 30)
        },
        {
            name: 'Ben',
            start: new Date(2021, 1, 1, 14, 30),
            end: new Date(2021, 1, 1, 15, 30)
        },
    
        {
            name: 'Pinak',
            start: new Date(2021, 1, 1, 15, 30),
            end: new Date(2021, 1, 1, 17, 0)
        },
    ]

    const thursdayHours = [
        {
            name: 'Anh',
            start: new Date(2021, 1, 1, 11, 0),
            end: new Date(2021, 1, 1, 12, 0)
        },
        {
            name: 'Rico',
            start: new Date(2021, 1, 1, 12, 0),
            end: new Date(2021, 1, 1, 13, 0)
        },
        {
            name: 'Sabrina',
            start: new Date(2021, 1, 1, 13, 0),
            end: new Date(2021, 1, 1, 14, 30)
        },
        {
            name: 'Sehr',
            start: new Date(2021, 1, 1, 14, 30),
            end: new Date(2021, 1, 1, 16, 0)
        },
     
        {
            name: 'Uri',
            start: new Date(2021, 1, 1, 16, 0),
            end: new Date(2021, 1, 1, 17, 0)
        },
    ]

    const fridayHours = [
        {
            name: 'Tom',
            start: new Date(2021, 1, 1, 11, 0),
            end: new Date(2021, 1, 1, 12, 30)
        },
        {
            name: 'Ari',
            start: new Date(2021, 1, 1, 12, 30),
            end: new Date(2021, 1, 1, 14, 0)
        },
        {
            name: 'Natalia',
            start: new Date(2021, 1, 1, 14, 0),
            end: new Date(2021, 1, 1, 15, 0)
        },
       
    ]

    const officeHours: { [key: string]: FactoryManager[] } = {
        'Monday': mondayManagers,
        'Tuesday': tuesdayManagers,
        'Wednesday': wednesdayManagers,
        'Thursday': thursdayManagers,
        'Friday': fridayManagers
    }

    return (
        <Box className="py-10 px-8 flex flex-col basis-full items-center">
            <Typography variant="h2" className="self-center">Office Hours</Typography>
            <Divider aria-hidden="true" sx={{
                opacity: 1,
                borderColor: 'black',
                borderWidth: 2,
                width: '10%',
                alignSelf: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
            }}/>

            <WeekView
                officeHours={officeHours}
                calendarHeight='60dvh'
                startTime={new Date(2021, 1, 1, 11, 0)}
                endTime={new Date(2021, 1, 1, 17, 0)}
            />
        </Box>
    );
 }