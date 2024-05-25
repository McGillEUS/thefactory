import {InfoBox} from "./InfoBox";
import pcbImage from "../../../assets/resources/pcb_logo.jpg";

export function Pcb() {
    const pcbTitle = "PCB";
    const pcbParagraph =
        "Take advantage of your opportunity to learn about and create your own custom PCB (printed circuit board) with the Factory! The Factory contains a CNC machine, which allows you to mill PCB on specialized copper boards. Check out our extra resources for all the information you need to get started!";
    const pcbUrl = "/pcbpage"
    return <InfoBox image={pcbImage} title={pcbTitle} paragraph={pcbParagraph} pageUrl={pcbUrl} />;
}
