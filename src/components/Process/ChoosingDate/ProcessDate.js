/**
* The processDate page returns a page enabling users to select date,
* and displaying available time by API: http://localhost:4000/event/time
* DatePicker is the component consisting both the selection and the list
* showing on the page.
* NextButton is the button component connected with other page.
*
* @param  path      url of nextbutton
* @param  word      string of nextbutton
* @return           the page of processdate
*/

import React from 'react'
import { Box } from '@mui/system';
import DatePicker from './DatePicker';
import NextButton from '../nextButton';
import { CssBaseline } from '@mui/material';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { Container } from '@mui/system';
import { displayOnDesktop } from '../../../themes/commonStyles';

function ProcessDate(props) {
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
            alignItems: 'center',
            justifyContent: 'center',
            pl: 66
          }}
        >
        <Container maxWidth="xl" sx={{ mb: 3, margin: 'auto'}}>
            <DatePicker />
            <NextButton path="checkout" word="PAY"/>
        </Container>
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
    </Box>
    )
}

export default ProcessDate
