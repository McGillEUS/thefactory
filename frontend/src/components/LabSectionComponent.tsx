import { Divider } from "@mui/material";
import { BulletPoints, LabSectionRow } from "../types/LabSectionRow";

type LabSectionComponentProps = {
  SectionTitle: string;
  LabSectionRows: LabSectionRow[];
};

export default function LabSectionComponent(props: LabSectionComponentProps) {
  console.log(props);
  return (
    <div className="w-full bg-factory-black text-white px-40">
      <div className="flex flex-col items-center pt-12">
        {" "}
        <h2 className="text-center text-4xl font-medium">
          {props.SectionTitle}
        </h2>
        <Divider
          aria-hidden="true"
          sx={{
            opacity: 1,
            borderColor: "white",
            borderWidth: 2,
            width: "20%",
            alignSelf: "center",
            marginTop: "1rem",
            marginBottom: "5rem",
          }}
        />
      </div>

      {props.LabSectionRows.map((section, index) => (
        <div key={index} className="mt-10">
          {index % 2 === 0 ? (
            <LeftSection
              BulletPoints={section.BulletPoints[0]}
              src={section.Image.data.attributes.url}
            />
          ) : (
            <RightSection
              BulletPoints={section.BulletPoints[0]}
              src={section.Image.data.attributes.url}
            />
          )}
        </div>
      ))}
    </div>
  );
}

type SectionProps = {
  src: string;
  BulletPoints: BulletPoints;
};

function LeftSection(props: SectionProps) {
  console.log(props.src);
  return (
    <>
      <div className="flex justify-center gap-10 items-start mb-10">
        <img
          src={`https://strapi.smithdrive.space${props.src}`} 
          alt=""
          className="h-[530px] object-cover flex-1 rounded-2xl"
        />

        <ul className="flex-1">
          {props.BulletPoints.children.map((child, index) => (
            <li className="list-disc my-5 text-lg font-medium"> {child.children[0].text}</li>
          ))}
        </ul>
      </div>
      <Divider
        aria-hidden="true"
        sx={{
          opacity: 1,
          borderColor: "white",
          borderWidth: 2,
          width: "100%",
          alignSelf: "center",
          marginTop: "1rem",
          marginBottom: "0rem",
        }}
      />
    </>
  );
}

function RightSection(props: SectionProps) {
  return (
    <>
      <div className="flex justify-center gap-10 items-start mb-10">
        <ul className="flex-1">
          {props.BulletPoints.children.map((child, index) => (
            <li className="list-disc my-5 text-lg font-medium"> {child.children[0].text}</li>
          ))}
        </ul>
        <img
          src={`https://strapi.smithdrive.space${props.src}`}
          alt=""
          className="h-[530px] object-cover flex-1 rounded-2xl"
        />
      </div>

      <Divider
        aria-hidden="true"
        sx={{
          opacity: 1,
          borderColor: "white",
          borderWidth: 2,
          width: "100%",
          alignSelf: "center",
          marginTop: "1rem",
          marginBottom: "0rem",
        }}
      />
    </>
  );
}
