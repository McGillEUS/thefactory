
export type Attributes = {
    First_Name: string;
    Modified_First_Name?: string;
    Last_Name: string;
    McGill_Email: string;
    Office_Hour_Day: string;
    Role: string;
    End_Time: Date; 
    Start_Time: Date;
    Year_Major:string;
    picture : {
        data: {
            attributes:{
                url:string;
            }
        }
    }
    Skills: managerSkill[];
}

type managerSkill = {
    skill: string;
}


export type FactoryManager = {
   
id: number;
attributes: Attributes;


    
}