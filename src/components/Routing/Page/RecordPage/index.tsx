import React, { useState } from 'react';
import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Typography,
    RadioGroup, Radio,
} from '@mui/material';
import dayjs from 'dayjs';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ru';
import {TIME_INTERVAL} from '../../../../config/constants';

const RecordPage = () => {
    dayjs.locale('ru');

    const [selectedDate, SetSelectedDate] = useState(new Date());

    const handleDateChange = (date: any) => {
        SetSelectedDate(date);
    }

    return (
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
        >
            <Box sx={{ display: 'flex' }}>
                <DateCalendar
                    onChange={handleDateChange}
                />
                <FormControl>
                    <FormLabel>
                        <Typography variant='h6'>
                            {dayjs(selectedDate).format('DD MMMM')}
                        </Typography>
                    </FormLabel>
                    <RadioGroup>
                        {TIME_INTERVAL.map((time) => (
                          <FormControlLabel
                            key={time}
                            value={time}
                            control={<Radio />}
                            label={time}
                          />
                        ))}
                    </RadioGroup>
                </FormControl>
            </Box>
        </LocalizationProvider>
    );
};
export default RecordPage;