import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { flexCenter } from "../../themes/commonStyles";
import faker from "faker";
import CompanyDialog from "./Profile/CompanyDialog";

const AccountInfo = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={flexCenter}>
      {!props.token && <Link href="/company/login"> Become A Host</Link>}
      {props.token && <Link href="/company">Create An Event</Link>}
      <Stack>
        <Button>
          <AiOutlineShoppingCart size={20} />
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
          onClick={handleClickOpen}
        >
          <Stack>
            <AiOutlineMenu size={20} />
            {!props.token && <FaRegUserCircle size={20} />}
            {props.token && (
              <Avatar
                alt="Remy Sharp"
                src={faker.image.image()}
                sx={{ width: 24, height: 24 }}
              />
            )}
          </Stack>
        </Button>
        {props.token && (
          <CompanyDialog
            open={open}
            onClose={handleClose}
            setToken={props.setToken}
          />
        )}
      </Stack>
    </Box>
  );
};

export default AccountInfo;
