import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ChooseDates_AllEvents from "./ChooseDates_AllEvents";
import ChooseDates_Times from "./ChooseDates_Times";
import ChooseDates_Days from "./ChooseDates_Days";
import { styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import { getCompanyEvents } from "../../../functions/events";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(pink[500]),
  backgroundColor: pink[500],
  "&:hover": {
    backgroundColor: pink[400],
  },
}));

function createData(events, days, times) {
  var result = [];

  for (let i = 0; i < events.length; i++) {
    for (let j = 0; j < days.length; j++) {
      for (let q = 0; q < times.length; q++) {
        result.push({ id: events[i], day: days[j], time: times[q] });
      }
    }
  }
  return result;
}

export default function ChooseDates(props) {
  const [allEvents, setAllEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedDays, setDays] = useState([]);
  const [selectedTimes, setTimes] = useState([]);
  const [eventsErr, setEventsErr] = useState(false);

  useEffect(() => {
    const search = async () => {
      try {
        const data = await getCompanyEvents(props.token);
        if (data == null) {
          setEventsErr(true);
        }
        setAllEvents(data);
      } catch (error) {
        console.log(props.token);
        console.log(error);
        setEventsErr(true);
      }
    };
    search();
  }, []);

  useEffect(() => {
    console.log(`Selected Events: ${selectedEvents}`);
  }, [selectedEvents]);

  useEffect(() => {
    console.log(`Selected days: ${selectedDays}`);
  }, [selectedDays]);

  useEffect(() => {
    console.log(`Selected times: ${selectedTimes}`);
  }, [selectedTimes]);

  useEffect(() => {
    console.log(`All events: ${allEvents}`);
  }, []);

  const handleSubmit = async (event) => {
    const data = createData(selectedEvents, selectedDays, selectedTimes);
    console.log(data);
  };

  // if (isCreated === 1) {
  //   return <SignupS setIsSignUp={setIsSignUp} setToken={props.setToken} />;
  // }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <ChooseDates_AllEvents
              token={props.token}
              setSelectedEvents={setSelectedEvents}
              selectedEvents={selectedEvents}
              allEvents={allEvents}
            />
          </Paper>
        </Grid>
        {/* Chart */}
        <Grid item xs={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 310,
            }}
          >
            <ChooseDates_Days setDays={setDays} />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 200,
                }}
              >
                <ChooseDates_Times setTimes={setTimes} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  flexDirection: "column",
                  height: 87,
                  textAlign: "center",
                  // color: theme.palette.text.secondary,
                }}
              >
                <ColorButton
                  variant="contained"
                  onClick={(event) => {
                    handleSubmit(event);
                  }}
                >
                  Confirm
                </ColorButton>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
