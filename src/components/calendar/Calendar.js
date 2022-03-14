import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import Grid from '@mui/material/Grid';


export default function Calendar() {
    const [date, setDate] = React.useState(new Date());
    return (
        <div className="bg-default rounded-md pt-4">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container>
                    <Grid item xs={12} md={12}>
                    <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
                    </Grid>
                </Grid>
            </LocalizationProvider>
        </div>
    );
}