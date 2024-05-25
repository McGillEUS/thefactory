import {InfoBox} from "./InfoBox";
import image from "../../../assets/resources/soldering_logo.jpg";

export function Soldering() {
    const title = "Soldering";
    const paragraph =
        "Soldering is the art of melting a metal alloy to join components together, and the Factory has the perfect station for you to take advantage of this skill! Whether you are a beginner or more experiences, explore the resources below for safety instructions and tip and tricks when soldering!"
    const solderingUrl = "/solderingpage"
    return <InfoBox image={image} title={title} paragraph={paragraph} pageUrl={solderingUrl}/>;
}
