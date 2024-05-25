import { Box} from '@mui/joy';
import EngineeringIcon from '@mui/icons-material/Engineering';
import {ThemeProvider, useTheme} from "@mui/material/styles";
import {CustomAccordion} from "./Helpers/CustomAccordion";
import {HyperLinker} from "./Helpers/HyperLinker";
import HardwareIcon from '@mui/icons-material/Hardware';
import TerminalIcon from '@mui/icons-material/Terminal';
import GradingIcon from '@mui/icons-material/Grading';


export function OldWorkshops() {
  const theme = useTheme();
  const kaliUrl = "https://drive.google.com/file/d/1waORz5lk56fXaheIpvn3ocpQ8V24KC8p/view?usp=drive_link";
  const bashUrl="https://drive.google.com/file/d/1FzqUrbEn1HYrFDpJSytmBhV4zz3b2OmG/view?usp=sharing";
  const compUrl="https://drive.google.com/file/d/1Ms4cMaxC9KQW4Zr9i20sh4TeloNylk8w/view?usp=sharing";
  const vhdlUrl="https://drive.google.com/file/d/1y1kuauxppBojrvksYs2nBw_wUXw3e-v3/view?usp=sharing";
  return (
    <ThemeProvider theme={theme}>
    
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
            fontWeight: "bolder",
            fontSize: theme.typography.h2,
          }}
        >
          Past workshops   
          <EngineeringIcon  sx={{ verticalAlign: 'middle', marginRight: '5px' }}/>
        </Box>
        <Box
          component="p"
          sx={{
            textAlign: 'center',
            font: theme.typography.h3,
            fontWeight: "bolder",
            fontSize: theme.typography.h3,
          }}
          
        >
          We make our past workshops slides available in case you missed them <br/><br/><br/>
        </Box>
        <Box>
        <CustomAccordion
        title="Software"
        icon={<TerminalIcon />} 
        content="Despite being a hardware lab, we have some software workshops to satisfy 
        the interest of all of our members"
        nestedAccordions={[
        
          {
            title: "Kali[fornia] Linux",
            content: (
              <HyperLinker
                title="Intro to Ethical Hacking"
                hyperlinkUrl={`${kaliUrl}`}
              />
            ),
            backgroundColor: "61c299"
          },

          {
            title: "Bash",
            content: (
              <HyperLinker
                title="Basics of Bash Scripts"
                hyperlinkUrl={`${bashUrl}`}
              />
            ),
            backgroundColor: "61c299"
            
          },
git 
        ]}
        backgroundColor="#61c299"
      />

      <CustomAccordion
        title="Hardware"
        icon={<HardwareIcon />} 
        content="Not sure where to start with hardware? Checkout our previous workshops 
        to get some inspiration"
        backgroundColor="#61c299"
      />

      {/* Third Accordion */}
      <CustomAccordion
        title="Review"
        icon={<GradingIcon />} 
        content="Review sessions held by The Factory can be found here"
        nestedAccordions={[
          {
            title: "VHDL",
            content: (
              <HyperLinker
                title="VHDL Review Session"
                hyperlinkUrl={`${vhdlUrl}`}
              />
            ),     
            backgroundColor: "61c299"
          },

          {
            title: "COMP 206 ",
            content: (
              <HyperLinker
                title="COMP 206 Review Session"
                hyperlinkUrl={`${compUrl}`}
              />
            ),
            backgroundColor: "61c299"
          },

        ]}
        backgroundColor="#61c299"
      />

        </Box>
      </Box>
    </ThemeProvider>
  );
}
