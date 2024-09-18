import {Accordion, AccordionDetails, AccordionSummary, Link} from "@mui/material";
import {DeleteOutlined, ExpandMoreOutlined, ModeEditOutlined} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {WorkshopDTO} from "../types/WorkshopDTO.ts";
import Button from "@mui/material/Button";
import {useTheme} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useGlobalState } from "../state/GlobalState";


export function WorkshopAccordion(props: {
    workshops: WorkshopDTO[],
    sx?: any
}) {
    const theme = useTheme();
    const [state,] = useGlobalState();

    const handleSignUp = (event: React.MouseEvent, workshop: WorkshopDTO) => {
        event.stopPropagation();
        window.open(workshop.signupLink, '_blank');
    }
    const handleDelete = (event: React.MouseEvent, workshop: WorkshopDTO) => {
        event.stopPropagation();
        //TODO: Backend request
    }
    const handleEdit = (event: React.MouseEvent, workshop: WorkshopDTO) => {
        event.stopPropagation();

        //TODO: Backend request

    }
    return (
        <Box className="flex flex-col">
            {props.workshops.map((workshop) => {
                return (
                    <Accordion
                        key={workshop.workshopId}
                        disableGutters={true}
                        sx={props.sx}
                    >
                        <AccordionSummary
                            expandIcon={
                                <div className="flex flex-row items-center">
                                    {state.isEditing &&
                                        <div className="flex flex-col items-center">
                                            <IconButton onClick={(event) => handleDelete(event, workshop)}>
                                                <DeleteOutlined/>
                                            </IconButton>
                                            <IconButton onClick={(event) => handleEdit(event, workshop)}>
                                                <ModeEditOutlined/>
                                            </IconButton>
                                        </div>
                                    }
                                    <ExpandMoreOutlined/>
                                </div>
                            }
                            sx={{
                                '.MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                    transform: state.isEditing ? 'rotate(0)' : 'rotate(180deg)',
                                }
                            }}
                            className="p-0 m-0"
                        >
                            <Box
                                component="img"
                                src={workshop.image}
                                alt={workshop.name + " Image"}
                                className="h-24 w-24 rounded-sm aspect-square contain-content"
                            />
                            <Box className="flex flex-col pl-4">
                                <Typography variant="h4">{workshop.name}</Typography>
                                <Typography>{workshop.location} on {workshop.dateTime.toLocaleDateString('en-CA', {})} at {workshop.dateTime.toLocaleTimeString('en-CA', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true
                                })}</Typography>
                                {workshop.signupLink && workshop.dateTime > new Date() &&
                                    <Link
                                        underline={"hover"}
                                        className="self-start"
                                        onClick={(event) => handleSignUp(event, workshop)}
                                        sx={{
                                            '&:hover': {
                                                color: '#57bf94'
                                            }
                                        }}
                                    >
                                        <Typography
                                            fontWeight='bold'
                                            color={'#57bf94'}
                                        >
                                            Sign Up Form
                                        </Typography>
                                    </Link>
                                }
                            </Box>

                        </AccordionSummary>
                        <AccordionDetails className="pt-4">
                            <Typography variant="h6" className="text-left">Details</Typography>
                            <Typography className="text-left">{workshop.description}</Typography>
                            {workshop.googleDriveLink &&
                                <Button href={workshop.googleDriveLink} className="h-10 mt-4">
                                    <Typography
                                        fontWeight='bold'
                                        color={theme.palette.secondary.main}
                                    >
                                        Resources
                                    </Typography>
                                </Button>
                            }
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </Box>
    );
}