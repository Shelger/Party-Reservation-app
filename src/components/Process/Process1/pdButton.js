import { TextField, Box, Typography } from "@mui/material"
import NextButton from "../nextButton"

const pdButton = (props) => {
  return (
    <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        pl: 60
        }}
        noValidate
        autoComplete="off"
    >
        <Typography align="justify">How many people will be attending the event?</Typography>
        <TextField
          id="outlined-number"
          size="small"
          label="Players"
          type="number"
          defaultValue={10}
          InputLabelProps={{
            shrink: true,
          }} />
          <br />
        <NextButton  path="process/date" word="NEXT" />
    </Box>
  )
}

export default pdButton
