import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function Login() {
  return (
    <div className="flex flex-col justify-center min-h-[500px]">
      <Box className="flex flex-col items-center ">
        <Typography variant="h2">Login</Typography>
        <Divider
          aria-hidden="true"
          sx={{
            opacity: 1,
            borderColor: "black",
            borderWidth: 2,
            width: "10%",
            alignSelf: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        />
        <form className="flex flex-col w-full max-w-md min-w-fit gap-y-3">
          <TextField
            type="email"
            id="email"
            label="Email"
            variant="outlined"
            className="m-4"
          />
          <TextField
            type="password"
            id="password"
            label="Password"
            variant="outlined"
            className="m-4"
          />
          <Button
            variant="contained"
            type="submit"
            className="m-4"
            sx={{
              backgroundColor: "#57bf94", // Set your desired color
              color: "white", // Text color
              "&:hover": {
                backgroundColor: "#4ca981", // Hover state color
              },
            }}
          >
            Login
          </Button>
          <a href="/forgot-password" className="m-4">
            Forgot Password
          </a>
        </form>
      </Box>
    </div>
  );
}

export default Login;
