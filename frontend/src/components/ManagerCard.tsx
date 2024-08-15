import Box from "@mui/material/Box";
import {Avatar, Link} from "@mui/material";
import Typography from "@mui/material/Typography";
import { FactoryManager } from "../types/FactoryManager";

export default function ManagerCard(props: {
    manager: FactoryManager,
    onClick: (managerDTO: FactoryManager) => void
}) {
    

    return (
        <Box className="flex flex-col items-center p-4"
             sx={{
                 borderRadius: '0.15rem',
             }}>
            <Avatar
                alt={props.manager.name}
                src="/static/images/avatar/1.jpg"
                sx={{width: '6rem', height: '6rem'}}
            />
            <Typography variant="h6" className="text-center">{props.manager.name}</Typography>
            <Typography variant="caption" className="text-center">{props.manager.position}</Typography>
            <Link
                className="text-center"
                color='#57bf94'
                underline="hover"
                onClick={() => props.onClick(props.manager)}
            >
                <Typography variant="caption">View Profile</Typography>
            </Link>
        </Box>
    );
}