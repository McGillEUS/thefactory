import { useTheme} from "@mui/material/styles";
import { Box, Divider } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
/*import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';*/
import BasicDateCalendar from "./Helpers/BasicDateCalendar";
import {CustomAccordion} from "./Helpers/CustomAccordion";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import ApiIcon from '@mui/icons-material/Api';
import AdbIcon from '@mui/icons-material/Adb';
import BuildIcon from '@mui/icons-material/Build';


/*export  function BasicDateCalendar() {
  const theme = useTheme();
  const highlightedDate = dayjs();
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'flex-start',}}
  >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar sx={{
          backgroundColor: '#61c299'
        }} />
    </LocalizationProvider>
    </div>
  );
}*/
export  function NewWorkshops() {
  const theme = useTheme();
  return (
    <Box
    component="div"
    sx={{
      flex: 1,
      mx: 2,
    }}
  >
    <Box
      component="h2"
      sx={{
        font: theme.typography.h2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: theme.typography.h2,
      }}
    >
      Winter 2024 Workshops
      <AcUnitIcon  sx={{ verticalAlign: 'middle', marginRight: '3px' }} />
    </Box>
    <Box
      component="h2"
      sx={{
        textAlign: 'justified',
        font: theme.typography.h3,
        fontWeight: 'normal',
        fontSize: theme.typography.h3,
      }}
    >
      Here you can obtain the information of our future workshops and events.
      Cannot wait to see you there! For more information check our instagram @thefactory_mcgill <br/>
     
    </Box>
    <Box>
  
    
    <Box> 

    </Box>
    <CustomAccordion
        title="Hackathon" 
        icon={<PrecisionManufacturingIcon/>}
        content='When: 20-21st January 2024
         Where: Trottier Building at McGill University  
        Info: 2-day hardware hackathon where participants are divided in subteams and are given a challenge. Check our instagram for more info'
        backgroundColor="#61c299"
      />
      <CustomAccordion
        title="3D Printing" 
        icon={<ThreeDRotationIcon/>}
        content='When: February 1st 2024 at 17:30-19:30
         Where: TBD
        Info: We just got some new equipment this semester! Come get your 3D printing training to be able to take advantages of all the ressources we offer'
        backgroundColor="#61c299"
      />
      <CustomAccordion
        title="Bash" 
        icon={<ApiIcon/>}
        content='When: February 6th 2024 at  17:30-19:30
         Where: Online. 
        Info: Come and learn the basics commands to use the terminal. '
        backgroundColor="#61c299"
      />
      <CustomAccordion
        title="Kali part 2" 
        icon={<AdbIcon/>}
        content='When: February 20th 2024 at  17:30-19:30
         Where: TBD 
        Info: Cannot get enough of Ethical Hacking? Neither can we! Come join us for a second part and expand your Kali knowledge'
        backgroundColor="#61c299"
      />
       <CustomAccordion
        title="PC Building" 
        icon={<BuildIcon/>}
        content='When: March 26th 2024 at  17:30-19:30
         Where: TBD 
        Info: Did you ever wonder how a PC is built? Want to check a PC on the inside? This is the right workshop for you!'
        backgroundColor="#61c299"
      />

    </Box>

  </Box> 
  );
}