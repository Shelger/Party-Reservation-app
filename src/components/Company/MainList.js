import * as React from "react";
import { useHistory } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LayersIcon from "@mui/icons-material/Layers";
import LiquorIcon from "@mui/icons-material/Liquor";
import MessageIcon from "@mui/icons-material/Message";

const MainList = (props) => {
  const history = useHistory();
  const { setEvent } = props;
  const { setOrder } = props;
  const { setAllEvents } = props;

  const handleEvent = () => {
    setEvent(true);
    setOrder(false);
    setAllEvents(false);
  };

  const handleOrder = () => {
    setEvent(false);
    setOrder(true);
    setAllEvents(false);
  };

  const handleAllEvents = () => {
    setAllEvents(true);
    setEvent(false);
    setOrder(false);
  };

  const handleHomepage = () => {
    history.push("/");
  };

  return (
    <React.Fragment>
      <ListItemButton onClick={handleHomepage}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Homepage" />
      </ListItemButton>

      <ListItemButton onClick={handleEvent}>
        <ListItemIcon>
          <LiquorIcon />
        </ListItemIcon>
        <ListItemText primary="Create Events" />
      </ListItemButton>

      <ListItemButton onClick={handleAllEvents}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Choose Dates" />
      </ListItemButton>

      <ListItemButton onClick={handleOrder}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Orders" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Messages" />
      </ListItemButton>
    </React.Fragment>
  );
};

export default MainList;
