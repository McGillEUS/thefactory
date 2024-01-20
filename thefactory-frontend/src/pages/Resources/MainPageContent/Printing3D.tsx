import {InfoBox} from "./InfoBox";
import printingImage from "../../../assets/resources/printing3d_logo.png";

export function Printing3D() {
    const printingTitle = "3D Printing";
    const printingParagraph =
        "The Factory has two top-notch 3D printers at your disposal, so you can create anything your heart desires! Choose from multiple colour options to add extra flair and impress your friends with your unique designs. Check out the resources below for how to get started using the printers!"
    const print3DUrl = "/printing3Dpage"
    return <InfoBox image={printingImage} title={printingTitle} paragraph={printingParagraph} pageUrl={print3DUrl}/>;
}
