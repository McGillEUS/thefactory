import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";
import {WeekView} from "./WeekView.tsx";

export function WeekViewSection() {
    const theme = useTheme();

    const dayHours = [
        {
            name: 'John',
            start: new Date(2021, 1, 1, 8, 0),
            end: new Date(2021, 1, 1, 9, 30)
        },
        {
            name: 'Jane',
            start: new Date(2021, 1, 1, 9, 30),
            end: new Date(2021, 1, 1, 11, 0)
        },
        {
            name: 'Jack',
            start: new Date(2021, 1, 1, 11, 0),
            end: new Date(2021, 1, 1, 12, 30)
        },
        {
            name: 'Jill',
            start: new Date(2021, 1, 1, 12, 30),
            end: new Date(2021, 1, 1, 14, 0)
        },
        {
            name: 'James',
            start: new Date(2021, 1, 1, 14, 0),
            end: new Date(2021, 1, 1, 15, 30)
        },
        {
            name: 'Jenny',
            start: new Date(2021, 1, 1, 15, 30),
            end: new Date(2021, 1, 1, 17, 0)
        },
    ]

    const officeHours: { [key: string]: { name: string, start: Date, end: Date }[] } = {
        'Monday': dayHours,
        'Tuesday': dayHours,
        'Wednesday': dayHours,
        'Thursday': dayHours,
        'Friday': dayHours,
    }

    return (
        <Box className="py-10 px-8 flex flex-col basis-full items-center">
            <Typography variant="h2" className="self-center">Office Hours</Typography>
            <Divider aria-hidden="true" sx={{
                opacity: 1,
                borderColor: theme.palette.common.black,
                borderWidth: 2,
                width: '10%',
                alignSelf: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
            }}/>

            <WeekView
                officeHours={officeHours}
                calendarHeight='60dvh'
                startTime={new Date(2021, 1, 1, 8, 0)}
                endTime={new Date(2021, 1, 1, 17, 0)}
            />
        </Box>
    );
 }
