import {Box, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useTheme} from "@mui/material/styles";

export function Login() {
    const theme = useTheme();
    return (
        <Box className="flex flex-col items-center mt-10">
            <Typography variant="h2">Login</Typography>
            <Divider aria-hidden="true" sx={{
                opacity: 1,
                borderColor: theme.palette.common.black,
                borderWidth: 2,
                width: '10%',
                alignSelf: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
            }}/>
            <form className="flex flex-col w-full max-w-md min-w-fit">
                <TextField
                    type="email"
                    id="email"
                    label="Email"
                    variant="outlined"
                    className="m-4"
                />
                <TextField type="password" id="password" label="Password" variant="outlined" className="m-4"/>
                <Button variant="contained" type="submit" className="m-4">Login</Button>
                <a href="/forgot-password" className="m-4">Forgot Password</a>
            </form>
        </Box>
    );
}
