/**
 * @param value     the date users choose
 * 
 */


import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import TimeAvailable from './TimeAvailable';


function DatePicker() {
    const [value, setValue] = React.useState(new Date('2022-01-03T21:11:54'));
    
    const handleChange = (newValue) => {
        setValue(newValue);
    };


    // fetch post get
    return (
        <div style={{margin: 'auto'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Date"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                <TimeAvailable weekday={value.getDay()} />
            </LocalizationProvider>
        </div>
    )
}

export default DatePicker
