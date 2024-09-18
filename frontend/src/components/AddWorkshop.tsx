import {Add, CloudUploadOutlined} from "@mui/icons-material";
import {Dialog, DialogActions, DialogContent, DialogTitle, Fab} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useGlobalState } from "../state/GlobalState";

export function AddWorkshop() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [state, ] = useGlobalState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [workshopNameError, setWorkshopNameError] = useState(false);
    const [workshopNameHelperText, setWorkshopNameHelperText] = useState("");
    const [dateTimeError, setDateTimeError] = useState(false);
    const [dateTimeHelperText, setDateTimeHelperText] = useState("");
    const [locationError, setLocationError] = useState(false);
    const [locationHelperText, setLocationHelperText] = useState("");
    const [signupLinkError, setSignupLinkError] = useState(false);
    const [signupLinkHelperText, setSignupLinkHelperText] = useState("");
    const [descriptionError, setDescriptionError] = useState(false);
    const [descriptionHelperText, setDescriptionHelperText] = useState("");
    const [driveLinkError, setDriveLinkError] = useState(false);
    const [driveLinkHelperText, setDriveLinkHelperText] = useState("");


    const handleInvalid = (setError: any, setHelperText: any, event: React.FormEvent<HTMLDivElement>) => {
        event.preventDefault();
        setError(true);
        const {validationMessage} = event.target as HTMLInputElement;
        setHelperText(validationMessage);
    };

    const handleInput = (setError: any, setHelperText: any) => {
        setError(false);
        setHelperText("");
    };

    return (
        <React.Fragment>
            {state.isEditing &&
                <Fab
                    sx={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        height: '4rem',
                        width: '4rem',
                        color: theme.palette.common.white,
                        backgroundColor: theme.palette.secondary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.secondary.light,
                        },
                    }}
                    onClick={handleClickOpen}
                >
                    <Add/>
                </Fab>
            }
            <Dialog
                open={open}
                fullScreen
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: Event) => {
                        event.preventDefault();
                        handleClose();
                    }

                }}
            >
                <DialogTitle>
                    <Typography variant="h4">New Workshop</Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="h6" className="text-left">Header</Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Workshop Name"
                        type="text"
                        error={workshopNameError}
                        helperText={workshopNameHelperText}
                        onInvalid={(event) => handleInvalid(setWorkshopNameError, setWorkshopNameHelperText, event)}
                        onInput={() => handleInput(setWorkshopNameError, setWorkshopNameHelperText)}
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="date"
                        label="Date and Time"
                        type="datetime-local"
                        defaultValue={new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16)} // default to current date and time
                        error={dateTimeError}
                        helperText={dateTimeHelperText}
                        onInvalid={(event) => handleInvalid(setDateTimeError, setDateTimeHelperText, event)}
                        onInput={() => handleInput(setDateTimeError, setDateTimeHelperText)}
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="location"
                        label="Location"
                        type="text"
                        error={locationError}
                        helperText={locationHelperText}
                        onInvalid={(event) => handleInvalid(setLocationError, setLocationHelperText, event)}
                        onInput={() => handleInput(setLocationError, setLocationHelperText)}
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="signupLink"
                        label="Sign Up Form"
                        type="url"
                        error={signupLinkError}
                        helperText={signupLinkHelperText}
                        onInvalid={(event) => handleInvalid(setSignupLinkError, setSignupLinkHelperText, event)}
                        onInput={() => handleInput(setSignupLinkError, setSignupLinkHelperText)}
                        fullWidth
                    />
                    <Button
                        component="label"
                        variant="outlined"
                        startIcon={<CloudUploadOutlined/>}
                        className="my-1"
                        fullWidth
                    >
                        Upload Image
                        <input
                            type="file"
                            hidden
                        />
                    </Button>
                    <Typography variant="h6" className="text-left mt-8">Description</Typography>
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        error={descriptionError}
                        helperText={descriptionHelperText}
                        onInvalid={(event) => handleInvalid(setDescriptionError, setDescriptionHelperText, event)}
                        onInput={() => handleInput(setDescriptionError, setDescriptionHelperText)}
                        multiline
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="googleDriveLink"
                        label="Google Drive Link"
                        type="url"
                        error={driveLinkError}
                        helperText={driveLinkHelperText}
                        onInvalid={(event) => handleInvalid(setDriveLinkError, setDriveLinkHelperText, event)}
                        onInput={() => handleInput(setDriveLinkError, setDriveLinkHelperText)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Add</Button>
                </DialogActions>

            </Dialog>
        </React.Fragment>


    );
}