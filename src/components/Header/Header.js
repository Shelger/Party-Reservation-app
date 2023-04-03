import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

// components
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from "../../themes/commonStyles";
import Logo from "./Logo";
import LocationSearch from "./LocationSearch";
import AccountInfo from "./AccountInfo";
import MobileSearch from "../MobileSearch/MobileSearch";

const Header = (props) => {
  return (
    <Box
      sx={{
        ...dFlex,
        height: 82,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
          <Box sx={displayOnDesktop}>
            <Link href="/" underline="none">
              <Logo />
            </Link>
          </Box>
          <Box sx={displayOnDesktop}>
            <LocationSearch />
          </Box>
          <Box sx={displayOnDesktop}>
            <AccountInfo token={props.token} setToken={props.setToken} />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <MobileSearch />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
