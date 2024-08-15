import Typography from "@mui/material/Typography";
import {Divider, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import ManagerCard from "./ManagerCard.tsx";
import {useState} from "react";
import ManagerInfo from "./ManagerInfo.tsx";
import { FactoryManager } from "../types/FactoryManager.ts";

export function ManagerSection() {
    const [open, setOpen] = useState(false);
    const [selectedManager, setSelectedManager] = useState<FactoryManager | null>(null);
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
    const generalManagers: FactoryManager[] = [
        {
            personId: 7,
            name: 'Joseph Feghaly',
            position: 'General Manager',
            image: '/static/images/avatar/7.jpg',
        },
        {
            personId: 8,
            name: 'Sehr Moosabhoy',
            position: 'General Manager',
            image: '/static/images/avatar/8.jpg',
        },
        {
            personId: 9,
            name: 'Sabrina Mansour',
            position: 'General Manager',
            image: '/static/images/avatar/9.jpg',
        },
        {
            personId: 10,
            name: 'Jill',
            position: 'General Manager',
            image: '/static/images/avatar/10.jpg',
        },
        {
            personId: 11,
            name: 'James',
            position: 'General Manager',
            image: '/static/images/avatar/11.jpg',
        },
        {
            personId: 12,
            name: 'Jenny',
            position: 'General Manager',
            image: '/static/images/avatar/12.jpg',
        },
        {
            personId: 13,
            name: 'John',
            position: 'General Manager',
            image: '/static/images/avatar/13.jpg',
        },
        {
            personId: 14,
            name: 'Jane',
            position: 'General Manager',
            image: '/static/images/avatar/14.jpg',
        },
        {
            personId: 15,
            name: 'Jack',
            position: 'General Manager',
            image: '/static/images/avatar/15.jpg',
        },
        {
            personId: 16,
            name: 'Jill',
            position: 'General Manager',
            image: '/static/images/avatar/16.jpg',
        },
        {
            personId: 17,
            name: 'James',
            position: 'General Manager',
            image: '/static/images/avatar/17.jpg',
        },
        {
            personId: 18,
            name: 'Jenny',
            position: 'General Manager',
            image: '/static/images/avatar/18.jpg',
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
                {steeringCommittee.map((manager) => {
                    return (
                        <Grid item xs={12} sm={4} md={3} lg={2}>
                            <ManagerCard manager={manager} key={manager.personId} onClick={selectManager}/>
                        </Grid>
                    );
                })}
            </Grid>
            <Typography variant="h6" className="self-center mt-20">General Managers</Typography>
            <Grid container className="justify-center w-full  max-w-7xl">
                {generalManagers.map((manager) => {
                    return (
                        <Grid item xs={12} sm={4} md={3} lg={2}>
                            <ManagerCard manager={manager} key={manager.personId} onClick={selectManager}/>
                        </Grid>
                    );
                })}
            </Grid>
            <ManagerInfo manager={selectedManager} open={open} onClose={() => setOpen(false)}/>
        </Box>
    );
}