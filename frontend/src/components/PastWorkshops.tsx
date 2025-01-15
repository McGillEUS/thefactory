import { ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider
import theme from "../theme.ts"; // Import your custom theme
import { WorkshopAccordion } from "./WorkshopAccordion.tsx";
import { WorkshopDT } from "../types/WorkshopDT.ts";
import { PageSection } from "./PageSection.tsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React from "react";

type PastWorkshopsProps = {
  pastWorkshops: WorkshopDT[];
};

function getSemester(dateString: string): string {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();

  if (month >= 9 && month <= 12) {
    return `Fall ${year}`;
  } else if (month >= 1 && month <= 4) {
    return `Winter ${year}`;
  } else if (month >= 5 && month <= 8) {
    return `Summer ${year}`;
  }
  return "Unknown";
}

function groupWorkshopsBySemester(workshops: WorkshopDT[]) {
  const grouped: Record<string, WorkshopDT[]> = {};
  workshops.forEach((workshop) => {
    const semester = getSemester(workshop.attributes.Date);
    if (!grouped[semester]) {
      grouped[semester] = [];
    }
    grouped[semester].push(workshop);
  });
  return grouped;
}

export function PastWorkshops(props: PastWorkshopsProps) {
  const [value, setValue] = React.useState(0);
  const groupedWorkshops = groupWorkshopsBySemester(props.pastWorkshops);
  const semesters = Object.keys(groupedWorkshops);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <PageSection title="Past Workshops" color="black">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          centered
        >
          {semesters.map((semester, index) => (
            <Tab label={semester} key={index} />
          ))}
        </Tabs>

        {semesters.map((semester, index) => (
          <CustomTabPanel
            value={value}
            index={index}
            pastWorkshops={groupedWorkshops[semester]}
            key={index}
          />
        ))}
      </PageSection>
    </ThemeProvider>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  pastWorkshops: WorkshopDT[];
}

function CustomTabPanel(props: TabPanelProps) {
  const { value, index, pastWorkshops, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <WorkshopAccordion workshops={pastWorkshops} />}
    </div>
  );
}
