import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { FaRegHeart } from "react-icons/fa";
import {
  flexBetween,
  fixedIcon,
  carouselImage,
} from "../../../themes/commonStyles";
import "./CarouselCard.css";
import { ThemeProvider } from "@emotion/react";

const CarouselCard = ({ event }) => {
  const theme = () =>
    createTheme(theme, {
      typography: {
        body1: {
          color: "#949494",
        },
      },
    });

  return (
    <Box
      className="carouselCard"
      sx={{
        flexGrow: 1,
        position: "relative",
      }}
    >
      <Box sx={fixedIcon}>
        <FaRegHeart size={24} color="#fff" />
      </Box>

      <Box>
        <div>
          <Box
            component="img"
            sx={carouselImage}
            src={event.image}
            alt={`${event.title} event`}
          ></Box>
        </div>
      </Box>

      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <ThemeProvider theme={theme}>
            <Typography variant="h6"> {event.title}</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ m: 1 }}>
              {" "}
              {event.description}
            </Typography>
            <Typography variant="body2">
              {" "}
              {`- $ ${event.regular_price} up to ${event.num_player} players`}
            </Typography>
            <Typography variant="body2">
              {" "}
              {`- $ ${event.additional_price} per additional player`}
            </Typography>
            <Typography variant="body2">
              {" "}
              {`- Max ${event.additional_price} players`}
            </Typography>
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselCard;
