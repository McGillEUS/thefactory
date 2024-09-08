import { useEffect, useState } from "react";
import { ManagerSection } from "../components/ManagerSection";
import { WeekViewSection } from "../components/WeekViewSection";
import { FactoryManager } from "../types/FactoryManager";



function OfficeHours() {


    const [managers, setManagers] = useState<FactoryManager[]>([]);

    console.log(managers)


    useEffect(() => {
        fetch("https://strapi.smithdrive.space/api/managers" +
      "?populate=*", {
          method: "GET",

        })
          .then((response) => response.json())
          .then((data) => {
            setManagers(data.data);
          })
          .catch((error) => console.log(error));
      }, []);

    return (  
        <>
        <WeekViewSection managers={managers}/>
        <ManagerSection managers={managers}/>
        </>
    );
}

export default OfficeHours;