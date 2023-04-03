import React from 'react'
import { Box } from '@mui/material';


const images = (props) => {
  return (
    <Box sx={{ width: 1200, height: 450, display:'flex', flexDirection:'row', overflowX:'scroll', margin: 'auto' } }>
      <img src = {props.image} alt="" style={{ margin: 'auto' }} />
    </Box>
  );
}

export default images
