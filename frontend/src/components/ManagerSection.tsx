import Typography from "@mui/material/Typography";
import {Divider, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import ManagerCard from "./ManagerCard.tsx";
import {useState} from "react";
import ManagerInfo from "./ManagerInfo.tsx";
import { FactoryManager } from "../types/FactoryManager.ts";

type ManagerSectionProps = {
    managers: FactoryManager[];
}


export function ManagerSection(props:ManagerSectionProps) {
    const [open, setOpen] = useState(false);
    const [selectedManager, setSelectedManager] = useState<FactoryManager | null>(null);

    const roleOrder = [
        "Head Manager",
        "Technical Director",
        "Finance Manager",
        "Workshop Manager",
        "Communications Manager"
      ];

    let steeringCommitteeTest: FactoryManager[] = props.managers.filter((manager) => 
        manager.attributes.Role === "Head Manager" || 
        manager.attributes.Role === "Technical Director" || 
        manager.attributes.Role === "Communications Manager" || 
        manager.attributes.Role === "Finance Manager" || 
        manager.attributes.Role === "Workshop Manager"
      );
    
      let sortedSteeringCommitee: FactoryManager[] = steeringCommitteeTest.sort((a, b) => {
        // Get the index of each manager's role in the roleOrder array
        const roleIndexA = roleOrder.indexOf(a.attributes.Role);
        const roleIndexB = roleOrder.indexOf(b.attributes.Role);
        
        // Compare the indices to determine the sort order
        return roleIndexA - roleIndexB;
      });

      

      let generalManagersTest: FactoryManager[] = props.managers.filter((manager) => manager.attributes.Role === "General Manager" );
    



    const steeringCommittee: FactoryManager[] = [
        {
            personId: 1,
            name: 'Tom Haene',
            position: 'Head Manager',
            image: '/static/images/avatar/1.jpg',
            skills: ['Leadership', 'Management', 'Finance', '3D Printing',
                'Software Development', 'Project Management', 'Quality Assurance'],
            courses: ['ECSE 321', 'ECSE 429', 'ECSE 211',
                'ECSE 223', 'ECSE 323', 'ECSE 324', 'ECSE 425', 'ECSE 426'
            ],
        },
        {
            personId: 2,
            name: 'Ari Smith',
            position: 'Technical Director',
            image: '/static/images/avatar/2.jpg',
        },
        {
            personId: 3,
            name: 'Allison Hall',
            position: 'Communications Manager',
            image: '/static/images/avatar/3.jpg',
        },
        {
            personId: 4,
            name: 'Natalia Lucena',
            position: 'Finance Manager',
            image: '/static/images/avatar/4.jpg',
        },
        {
            personId: 5,
            name: 'Bilar Mokhtari',
            position: 'Workshop Manager',
            image: '/static/images/avatar/5.jpg',
        },
        {
            personId: 6,
            name: 'Uriel Sarfati-Magill',
            position: 'Workshop Manager',
            image: '/static/images/avatar/6.jpg',
        },
    ]
    

    function selectManager(manager: FactoryManager) {
        setSelectedManager(manager);
        setOpen(true);
    }

    return (
        <Box
            className="py-10 px-8 flex flex-col basis-full items-center"
            bgcolor='#2C3139'
            color='#FFFFFF'
        >
            <Typography variant="h2" className="self-center ">Managers</Typography>
            <Divider aria-hidden="true" sx={{
                opacity: 1,
                borderColor: '#FFFFFF',
                borderWidth: 2,
                width: '10%',
                alignSelf: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
            }}/>
            <Typography variant="h6" className="self-center">Steering Committee</Typography>
            <Grid container className="justify-center w-full  max-w-7xl">
                {sortedSteeringCommitee.map((manager) => {
                    return (
                        <Grid item xs={12} sm={4} md={3} lg={2}>
                            <ManagerCard manager={manager} key={manager.id} onClick={selectManager}/>
                        </Grid>
                    );
                })}
            </Grid>
            <Typography variant="h6" className="self-center mt-20">General Managers</Typography>
            <Grid container className="justify-center w-full  max-w-7xl">
                {generalManagersTest.map((manager) => {
                    return (
                        <Grid item xs={12} sm={4} md={3} lg={2}>
                            <ManagerCard manager={manager} key={manager.id} onClick={selectManager}/>
                        </Grid>
                    );
                })}
            </Grid>
            <ManagerInfo manager={selectedManager} open={open} onClose={() => setOpen(false)}/>
        </Box>
    );
}