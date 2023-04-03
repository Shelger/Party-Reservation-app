import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CarouselCard from "./CarouselCard";
import { getAllEvents } from "../../../functions/events";
import Link from "@mui/material/Link";

const LocationCards = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const search = async () => {
      const events = await getAllEvents();
      setCards(events);
    };
    search();
  }, []);

  if (!cards.length) {
    return null;
  }

  return (
    <Box sx={{ mx: 2, mt: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((event) => {
          return (
            <Grid key={event.id} item xs={12} sm={4} md={4} lg={3}>
              <Link href="/process">
                <CarouselCard event={event} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCards;
