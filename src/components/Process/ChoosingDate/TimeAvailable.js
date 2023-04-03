/**
 * The component of available time.
 * 
 * @param   checked   a boolean checking whether the button is clicked
 * @param   time      an array consisting all available time
 * @return            A component
 * 
 */


import React from 'react'
import { ListItem, Checkbox, ListItemButton, ListItemText, List } from '@mui/material';
import { useState, useEffect } from 'react';

function TimeAvailable(props) {
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekday = weekdays[props.weekday];
    const [time, setTime] = useState([]);

    const getWeekday = async () => {
      await fetch("http://localhost:4000/event/time", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({day: `${weekday}`}),
      })
        .then((response) => response.json())
        .then(data => setTime(data))
        .catch((err) => console.log(err));
      // setTime(time => [...time, response]);
    }
    useEffect(() => {
      getWeekday();
    },[weekday]);
    console.log(time);
    console.log(weekday);

    
    // const time = ['8:00 AM', '3:00 PM', '9:00 PM'];
    var idx = 1;
  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {time.map((value) => {
      const labelId = `checkbox-list-secondary-label-${idx++}`;
      return (
        <ListItem
          key={value}
          secondaryAction={
            <Checkbox
              edge="end"
              onChange={handleToggle(value)}
              checked={checked.indexOf(value) !== -1}
            />
          }
          disablePadding
        >
          <ListItemButton>
                <ListItemText id={labelId} primary={`${value.time}`} />
                </ListItemButton>
        </ListItem>
        );
      })}
      </List>
  )
}

export default TimeAvailable
