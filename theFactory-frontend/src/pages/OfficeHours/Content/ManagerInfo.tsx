import {useTheme} from "@mui/material/styles";
import {Avatar, Chip, Dialog, DialogContent, Divider, Grid} from "@mui/material";
import {ManagerDTO} from "../../../model/ManagerDTO.ts";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";

export function ManagerInfo(props: {
    manager: ManagerDTO | null,
    open: boolean,
    onClose: () => void
}) {
    const theme = useTheme();

    return (
        <Dialog open={props.open} maxWidth="sm" fullWidth onClose={props.onClose}>
            <DialogContent className="flex flex-col items-start">
                <Box className="flex flex-row w-full justify-between">
                    <Box className="flex flex-row items-center pb-4">
                        <Avatar
                            alt={props.manager?.name}
                            src="/static/images/avatar/1.jpg"
                            sx={{width: '6rem', height: '6rem'}}
                        />
                        <Box className="flex flex-col ml-4">
                            <Typography variant="h6">{props.manager?.name}</Typography>
                            <Typography variant="caption">{props.manager?.position}</Typography>
                            <Typography variant="caption">Office Hours: {props.manager?.name}</Typography>
                        </Box>
                    </Box>
                    <IconButton className="self-start" onClick={props.onClose}>
                        <Close/>
                    </IconButton>
                </Box>
                {(props.manager?.courses || props.manager?.skills) &&
                    <Divider className="w-full"/>
                }
                <Grid container columns={50} className="w-full flex-grow basis-full">
                    {props.manager?.skills &&
                        <Grid item xs={12} md={24} className="flex flex-col h-fit">
                            <Typography variant="h6" className="text-left basis-full">Skills</Typography>
                            <Box className="flex flex-wrap gap-1 h-fit max-h-48 overflow-scroll">
                                {props.manager?.skills?.map((skill, index) => (
                                    <Chip key={index} className="text-center" label={skill} onClick={() => undefined}/>
                                ))}
                            </Box>
                        </Grid>
                    }
                    {props.manager?.courses && props.manager?.skills &&
                        <Grid item xs={0} md={2} className="flex w-full basis-full">
                            <Divider orientation="vertical" variant="fullWidth" flexItem className="mt-2"/>
                        </Grid>
                    }
                    {props.manager?.courses &&
                        <Grid item xs={12} md={24}
                              className="flex flex-col h-fit">
                            <Typography variant="h6" className="text-left basis-full">Complete Courses</Typography>
                            <Box className="flex flex-wrap gap-1 h-fit max-h-48 overflow-scroll">
                                {props.manager?.courses?.map((course, index) => (
                                    <Chip key={index} className="text-center" label={course} onClick={() => undefined}/>
                                ))}
                            </Box>
                        </Grid>
                    }
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
