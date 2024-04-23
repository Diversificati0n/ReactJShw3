import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        setFahrenheit((parseFloat(value) * 9 / 5 + 32).toFixed(2));
    };

    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);
        setCelsius(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
    };

    return (
        <Stack direction="row" spacing={2}>
            <TextField
                label="Celsius"
                value={celsius}
                onChange={handleCelsiusChange}
            />
            <TextField
                label="Fahrenheit"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
            />
        </Stack>
    );
};

export default TemperatureConverter;
