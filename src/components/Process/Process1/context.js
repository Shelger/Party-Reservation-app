// all stuffs here should be input from the main page
import { Box, Typography } from '@mui/material';
import PdButton from './pdButton.js';

const card = (props) => {
  return (
    <Box sx={{ pl:38 }}>
      <Typography fontSize={25} mt={5} >
        {props.title}
      </Typography>
      <Typography >
        ${props.regular_price} up to {props.num_player} <br/>
        ${props.additional_price} per additional player <br/>
        Max {props.limit_player} players <br/>
        Party for {props.num_player} players <br/>
        Two (2) non-private Laser Tag games <br/>
        Cheese pizza for all players (toppings +$2) <br/>
      </Typography>
      <Typography>
        {props.description}
      </Typography>
      <PdButton />
    </Box>
  )
}

export default card
