import React from "react";
import { useHistory } from "react-router-dom";
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

function CompanyDialog(props) {
  const { onClose, open } = props;
  const [formOpen, setFormOpen] = React.useState(false);
  const history = useHistory();

  const handleClose = () => {
    onClose();
    setFormOpen(false);
  };

  const handleLogOut = () => {
    props.setToken(0);
    history.push("/");
    onClose();
  };

  const handleClickOpen = () => {
    setFormOpen(true);
  };

  // const handleListItemClick = (value) => {
  //   onClose(value);
  // };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>
        <ListItem
          button
          // onClick={() => handleListItemClick(email)}
          // key={email}
        >
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
          <Button onClick={handleLogOut}>
            <ListItemText>Logout</ListItemText>
          </Button>
        </ListItem>
      </List>
    </Dialog>
  );
}

CompanyDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default CompanyDialog;
