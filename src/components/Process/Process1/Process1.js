/**
* This is a page component which returns the process page containing information 
* of events and number of players selection button.
* Images is the component displaying the image by the url from database. 
* API: http://localhost:4000/event/info
* Context is the component displaying all text contributes of the 
* event, titles, num_of_players, descriptions, etc
*
* @param  event   an event fetched from database
* @return         the page displayed on browsers
* @see            Images with url
*/


import Context from './context';
import Images from  './images';
import { CssBaseline, Box, Container } from '@mui/material';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer'
import React from 'react';
import { displayOnDesktop } from '../../../themes/commonStyles';
import { useState } from 'react';
import { useEffect } from 'react';


function App(props) {
  const [event, setEvent] = useState({});
  // const handleChange = (newEvent) => {
  //   setEvent(newEvent);
  // };
  const getApiData = async () => {
    const response = await fetch("http://localhost:4000/event/info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: 2}),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
    setEvent(response);
  }
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <CssBaseline />
        <Box>
          <Header />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}
        >
        <Container maxWidth="xl" sx={{ mb: 3 }}>
            <Images image = 'https://media.istockphoto.com/photos/dancing-friends-picture-id501387734?k=20&m=501387734&s=612x612&w=0&h=1mli5b7kpDg428fFZfsDPJ9dyVHsWsGK-EVYZUGWHpI=' />
            <Context title = {event.title} regular_price = {event.regular_price} num_player = {event.num_player} additional_price = {event.additional_price} limit_player = {event.limit_player} description = {event.description} />
        </Container>
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
    </Box>
  );
}

export default App;
