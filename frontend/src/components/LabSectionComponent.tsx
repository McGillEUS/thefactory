import { Divider } from "@mui/material";
import { LabSectionRow } from "../types/LabSectionRow";
import ReactSimplyCarousel from "react-simply-carousel";
import { useState } from "react";

type LabSectionComponentProps = {
  SectionTitle: string;
  LabSectionRows: LabSectionRow[];
};

export default function LabSectionComponent(props: LabSectionComponentProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Function to dynamically set the size of the arrows based on screen width
  const getArrowSize = () => {
    if (window.innerWidth >= 1300) {
      return {
        fontSize: "40px",
        height: 70,
        width: 70,
      };
    } else if (window.innerWidth >= 800) {
      return {
        fontSize: "30px",
        height: 60,
        width: 60,
      };
    } else {
      return {
        fontSize: "20px",
        height: 45,
        width: 45,
      };
    }
  };

  const arrowSize = getArrowSize();

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

      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: arrowSize.fontSize,
            height: arrowSize.height,
            width: arrowSize.width,
            lineHeight: 1,
            textAlign: "center",
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: arrowSize.fontSize,
            height: arrowSize.height,
            width: arrowSize.width,
            lineHeight: 1,
            textAlign: "center",
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          { minWidth: 1300, itemsToShow: 2 },
          { maxWidth: 1300, itemsToShow: 1 },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {props.LabSectionRows.map((section, index) => (
          <LabSectionRowComponent key={index} LabSectionRow={section} />
        ))}
      </ReactSimplyCarousel>

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
    <div className="w-[300px] h-[500px] md:h-[800px] md:w-[500px] 2xl:w-[600px] mb-10 lg:px-5">
      <img
        src={`https://strapi.smithdrive.space${LabSectionRow.Image.data.attributes.url}`}
        alt=""
        className="w-full object-cover rounded-2xl h-2/3"
      />

      {description ? (
        <ul className="ml-5 md:ml-10">
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
