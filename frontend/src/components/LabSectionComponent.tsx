import { Divider } from "@mui/material";
import { LabSectionRow } from "../types/LabSectionRow";

type LabSectionComponentProps = {
  SectionTitle: string;
  LabSectionRows: LabSectionRow[];
};

export default function LabSectionComponent(props: LabSectionComponentProps) {
  console.log(props);
  return (
    <div className="w-full bg-factory-black text-white">
      <div className="flex flex-col items-center pt-12">
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
            marginBottom: "4rem",
          }}
        />
      </div>

      {/* This div is the container for each LabSectionRowComponent */}
      <div className="flex flex-wrap justify-center lg:justify-start lg:px-40">
        {props.LabSectionRows.map((section, index) => (
          <LabSectionRowComponent key={index} LabSectionRow={section} />
        ))}
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
    </div>
  );
}

type SectionProps = {
  LabSectionRow: LabSectionRow;
};

function LabSectionRowComponent(props: SectionProps) {
  const { LabSectionRow } = props;

  // Check if Description is not null and has at least one entry
  const description = LabSectionRow.Description
    ? LabSectionRow.Description[0]
    : null;

  return (
    <div className="flex flex-col items-center gap-10 mb-10 lg:basis-1/2 lg:px-10 ">
      <img
        src={`https://strapi.smithdrive.space${LabSectionRow.Image.data.attributes.url}`}
        alt=""
        className="w-10/12 h-[600px] object-cover rounded-2xl"
      />

      {description ? (
        <ul className="lg:px-0 px-14">
          {description.children?.map((child, index) => {
            return child.children && child.children.length > 0 ? (
              <li key={index} className="list-disc my-5 text-lg font-medium">
                {child.children[0].text}
              </li>
            ) : (
              <></>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
