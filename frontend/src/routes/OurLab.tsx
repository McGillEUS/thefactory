import { useEffect, useState } from "react";
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
        // Convert API response to the expected FactoryManager type
        const labSections: LabSection[] = data.data;
        console.log(labSections);

        setLabSections(labSections);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="bg-factory-green">
        <div className="flex flex-col items-center pb-20 pt-10">
          <Typography variant="h2" className="self-center text-white">
            Our Lab
          </Typography>
          <Divider
            aria-hidden="true"
            sx={{
              opacity: 1,
              borderColor: "white",
              borderWidth: 2,
              width: "10%",
              alignSelf: "center",
              marginTop: "1rem",
              marginBottom: "2rem",
            }}
          />

          <div className="flex flex-col lg:flex-row justify-center gap-y-10 lg:gap-x-10">
            <img
              src="/FactoryFriendlyRobot.JPG"
              alt=""
              className="h-[450px] object-cover object-bottom rounded-xl w-[400px] 2xl:w-[600px]"
            />
            <img
              src="/Cyril.JPG"
              alt=""
              className="h-[450px] object-cover object-bottom rounded-xl w-[400px] 2xl:w-[600px]"
            />
          </div>
        </div>

        {labSections.map((labSection) => (
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
