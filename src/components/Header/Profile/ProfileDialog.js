import * as React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";

import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";

import ProfileForm from "./ProfileForm";

function ProfileDialog(props) {
  const { onClose, open } = props;
  const [formOpen, setFormOpen] = React.useState(false);

  const handleClose = () => {
    onClose();
    setFormOpen(false);
  };

  const handleClickOpen = () => {
    setFormOpen(true);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      {/* <DialogTitle>Set backup account</DialogTitle> */}
      <List sx={{ pt: 0 }}>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <CgProfile />
            </Avatar>
          </ListItemAvatar>
          <Button onClick={handleClickOpen}>
            <ListItemText>Edit Profile</ListItemText>
          </Button>
          <ProfileForm open={formOpen} onClose={handleClose} />
        </ListItem>

        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <FiSettings />
            </Avatar>
          </ListItemAvatar>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </List>
    </Dialog>
  );
}

ProfileDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ProfileDialog;
