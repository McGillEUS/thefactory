import { ManagerSection } from "../components/ManagerSection";
import { WeekViewSection } from "../components/WeekViewSection";
import { FactoryManager } from "../types/FactoryManager";



function OfficeHours() {
    return (  
        <>
        <WeekViewSection/>
        <ManagerSection/>
        </>
    );
}

export default OfficeHours;