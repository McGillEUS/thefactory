import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { WorkshopDT } from "../types/WorkshopDT.ts";
import { Presentation } from "lucide-react";

export function WorkshopAccordion(props: {
  workshops: WorkshopDT[];
  sx?: any;
}) {
  const handleSignUp = (event: React.MouseEvent, workshop: WorkshopDT) => {
    event.stopPropagation();
    window.open(workshop.attributes.signupLink, "_blank");
  };

  return (
    <Box className="flex flex-col">
      {props.workshops.map((workshop) => {
        const startDateTime = new Date(
          `${workshop.attributes.Date}T${workshop.attributes.StartTime}`
        );
        const endDateTime = new Date(
          `${workshop.attributes.Date}T${workshop.attributes.EndTime}`
        );

        const formattedDate = startDateTime.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        // Format the start time (e.g., "6 pm")
        const formattedStartTime = startDateTime.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });

        // Format the end time (e.g., "8 pm")
        const formattedEndTime = endDateTime.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
        const eventDetails = `${workshop.attributes.Location} on ${formattedDate} from ${formattedStartTime} to ${formattedEndTime}`;

        return (
          <Accordion key={workshop.id} disableGutters={true} sx={props.sx}>
            <AccordionSummary
              expandIcon={
                <div className="flex flex-row items-center">
                  <ExpandMoreOutlined />
                </div>
              }
              className="p-0 m-0"
            >
              <Box
                component="img"
                src={`https://strapi.smithdrive.space${workshop.attributes.CoverPicture.data[0].attributes.url}`}
                className="h-24 w-24 rounded-sm aspect-square contain-content"
              />
              <Box className="flex flex-col pl-4">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-medium">
                  {workshop.attributes.WorkshopTitle}
                </h4>
                <Typography>{eventDetails}</Typography>
                {/* If the workshop is old, then don't show a sign-up link. If it is old, then show a link to the slides */}
                {new Date(workshop.attributes.Date) < new Date() ? (
                  <Link
                    underline={"hover"}
                    className="self-start"
                    onClick={(event) => handleSignUp(event, workshop)}
                    sx={{
                      "&:hover": {
                        color: "#57bf94",
                      },
                    }}
                  >
                    <Typography fontWeight="bold" color={"#57bf94"} className="flex gap-1">
                      <Presentation />
                      View Workshop Slides
                    </Typography>
                  </Link>
                ) : (
                  <Link
                    underline={"hover"}
                    className="self-start"
                    onClick={(event) => handleSignUp(event, workshop)}
                    sx={{
                      "&:hover": {
                        color: "#57bf94",
                      },
                    }}
                  >
                    <Typography fontWeight="bold" color={"#57bf94"}>
                      Sign Up Form
                    </Typography>
                  </Link>
                )}
              </Box>
            </AccordionSummary>
            <AccordionDetails className="pt-4">
              <Typography variant="h6" className="text-left">
                Details
              </Typography>
              <Typography className="text-left">
                {workshop.attributes.Details}
              </Typography>
              {/* {workshop.googleDriveLink && (
                <Button href={workshop.googleDriveLink} className="h-10 mt-4">
                  <Typography
                    fontWeight="bold"
                    color={theme.palette.secondary.main}
                  >
                    Resources
                  </Typography>
                </Button>
              )} */}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
