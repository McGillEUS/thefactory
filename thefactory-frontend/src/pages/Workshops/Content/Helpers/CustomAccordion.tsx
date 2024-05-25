import {Accordion,AccordionSummary,AccordionDetails,Typography, Box}  from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import {useTheme} from "@mui/material/styles";


interface NestedAccordion{
  title: string;
  content:string | React.ReactElement;
  backgroundColor?: string;
}
interface CustomAccordionProps {
  title: string;
  icon?: React.ReactNode;
  content: any;
  nestedAccordions?:  NestedAccordion[];
  backgroundColor?: string; 
}


export function CustomAccordion({ title, icon, content, nestedAccordions,backgroundColor }: CustomAccordionProps) {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  let formattedContent: React.ReactNode = content;
  if (typeof content === 'string') {
    // Wrap the specified words in bold tags for string content
    const stringContent = content.replace(
      /(When|Where|Info):/g,
      (match) => `<strong>${match}</strong>`
    );

    formattedContent = (
      <div
      dangerouslySetInnerHTML={{ __html: stringContent }}
      style={{ whiteSpace: 'pre-line' }}
    />
    );
  }

  return (
    <Accordion expanded={expanded} onChange={handleChange}  sx={{ backgroundColor: backgroundColor || '#e0e0e0' } }>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${title}-content`}
        id={`${title}-header`}
      >
        <Typography  style={{fontFamily: theme.typography.fontFamily }}>{title} </Typography>
        {icon && (
            <Box ml={1}>{icon}</Box>
          )}
      </AccordionSummary>
      <AccordionDetails>
        <Typography style={{ whiteSpace: 'pre-line' }}>
        {formattedContent}
        </Typography>
        {nestedAccordions && (
          <div style={{ marginTop: 10 }}>
            {nestedAccordions.map((nestedAccordion, index) => (
              <CustomAccordion key={index} {...nestedAccordion} />
            ))}
          </div>

        )}
      </AccordionDetails>
    </Accordion>
  );
}