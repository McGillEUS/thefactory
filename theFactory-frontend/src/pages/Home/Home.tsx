import {About} from "./Content/About.tsx";
import {Membership} from "./Content/Membership.tsx";
import {LearnMore} from "./Content";
import Box from "@mui/material/Box";

export function Home() {
    return (
          <Box>
              <About />
              <Membership />
              <LearnMore />
          </Box>
    );
}
