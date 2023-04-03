import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { pink } from "@mui/material/colors";
import LayersIcon from "@mui/icons-material/Layers";
import eventAPI from "../../../api/eventAPI";

import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(pink[500]),
  backgroundColor: pink[500],
  "&:hover": {
    backgroundColor: pink[400],
  },
}));

export default function CreateEvents(props) {
  const [createError, setCreateError] = useState(0);
  const [isCreated, setIsCreated] = useState(0);

  async function createEvent(credentials) {
    try {
      console.log(credentials);
      console.log(props.token);
      const event = await eventAPI.post(
        "/create",
        JSON.stringify(credentials),
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${props.token}`,
          },
        }
      );
      setCreateError(0);
      console.log("create successfully!");
      console.log(event);
      return event;
    } catch (error) {
      console.log(error);
      setCreateError(1);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newEvent = await createEvent({
      title: data.get("title"),
      image:
        "https://images.unsplash.com/photo-1526336179256-1347bdb255ee?auto=format&fit=crop&w=400&h=250&q=60",
      num_player: data.get("numPlayer"),
      limit_player: data.get("limitPlayer"),
      regular_price: data.get("regularPrice"),
      additional_price: data.get("additionalPrice"),
      description: data.get("description"),
      event_type: data.get("eventType"),
    });

    if (newEvent.status === 400) {
      setCreateError(1);
    }
    if (newEvent.status === 200) {
      {
        setIsCreated(1);
      }
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        {/* <ThemeProvider theme={theme}> */}
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: pink[500] }}>
              <LayersIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create an Event
            </Typography>
            {createError === 1 && (
              <Typography component="h1" variant="body2" sx={{ mt: 2 }}>
                Sorry, you cannot create this event. Please try again!
              </Typography>
            )}
            {createError === 0 && isCreated === 1 && (
              <Typography component="h1" variant="body2" sx={{ mt: 2 }}>
                Created Successfully!
              </Typography>
            )}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Event Title"
                    // type="title"
                    fullWidth
                    variant="standard"
                    name="title"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    // id="numPlayer"
                    label="Number of Players"
                    // type="number"
                    fullWidth
                    variant="standard"
                    name="numPlayer"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    // id="limitPlayer"
                    label="Maximum of Players"
                    // type="number"
                    fullWidth
                    variant="standard"
                    name="limitPlayer"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    // id="regularPrice"
                    label="Regular Price"
                    // type="regularPrice"
                    fullWidth
                    variant="standard"
                    name="regularPrice"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    // id="additionalPrice"
                    label="Additional Price"
                    // type="additionalPrice"
                    fullWidth
                    variant="standard"
                    name="additionalPrice"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoFocus
                    margin="dense"
                    // id="description"
                    label="description"
                    // type="description"
                    fullWidth
                    variant="standard"
                    name="description"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="eventType"
                    label="Event Type"
                    type="eventType"
                    fullWidth
                    variant="standard"
                    name="eventType"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <IconButton
                      color="secondary"
                      aria-label="upload picture"
                      component="label"
                    >
                      <input hidden accept="image/*" type="file" />
                      <PhotoCamera />
                    </IconButton>
                    <ColorButton variant="contained" component="label">
                      Upload
                      <input hidden accept="image/*" multiple type="file" />
                    </ColorButton>
                  </Stack>
                </Grid>
              </Grid>
              <ColorButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create
              </ColorButton>
            </Box>
          </Box>
        </Container>
        {/* </ThemeProvider> */}
      </Box>
    </React.Fragment>
  );
}
