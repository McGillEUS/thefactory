import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Avatar, Link} from "@mui/material";
import {ManagerDTO} from "../../../model/ManagerDTO.ts";
import Typography from "@mui/material/Typography";

export function ManagerCard(props: {
    manager: ManagerDTO,
    onClick: (managerDTO: ManagerDTO) => void
}) {
    const theme = useTheme();

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
                color={theme.palette.secondary.main}
                underline="hover"
                onClick={() => props.onClick(props.manager)}
            >
                <Typography variant="caption">View Profile</Typography>
            </Link>
        </Box>
    );
}
