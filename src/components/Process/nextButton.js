import { Button  } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const nextButton = (props) => {
  return (
    <Button data-testid="nb" variant="contained" href={props.path} endIcon={<ArrowForwardIosIcon />}>
        {props.word}
    </Button>
  )
}

export default nextButton
