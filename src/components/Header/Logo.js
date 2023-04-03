import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// react icons
import { GiLaserBurst } from "react-icons/gi";
import { flexCenter } from "../../themes/commonStyles";
import { pink } from "@mui/material/colors";

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <GiLaserBurst size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: "20px",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
        component="h3"
      >
        PartyBooking
      </Typography>
    </Box>
  );
};

export default Logo;
