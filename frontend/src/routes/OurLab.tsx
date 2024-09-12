import { useEffect, useState } from "react";
import LabItem from "../components/LabSectionComponent";
import { Divider, Typography } from "@mui/material";
import { LabSection } from "../types/LabSection";
import LabSectionComponent from "../components/LabSectionComponent";

function OurLab() {
  const [labSections, setLabSections] = useState<LabSection[]>([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY; // Access the API key from .env file

    fetch(
      "https://strapi.smithdrive.space/api/lab-items?populate[LabSectionRows][populate]=Image",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`, // Use the API key in the Authorization header
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data)
        // Convert API response to the expected FactoryManager type
        const labSections: LabSection[] = data.data;
        // console.log(labSections);

        setLabSections(labSections);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="bg-white">
        <div className="flex flex-col items-center h-[700px]  pt-10">
          <Typography variant="h2" className="self-center">
            Our Lab
          </Typography>
          <Divider
            aria-hidden="true"
            sx={{
              opacity: 1,
              borderColor: "black",
              borderWidth: 2,
              width: "10%",
              alignSelf: "center",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
        </div>

        {labSections.map((labSection, index) => (
          <LabSectionComponent
            SectionTitle={labSection.attributes.SectionTitle}
            LabSectionRows={labSection.attributes.LabSectionRows}
          />
        ))}
        
      </div>
    </>
  );
}

export default OurLab;
