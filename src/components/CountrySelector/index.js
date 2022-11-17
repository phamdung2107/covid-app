import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@mui/material';
import { margin } from '@mui/system';
import React from 'react';


function CountrySelector({value,handleOnChange,countries}) {


    return (
        <FormControl style={{
            marginTop: 24,
            marginBottom: 24,
            minWidth: 120,
        }}>
            <InputLabel shrink htmlFor='country-selector'>
                Quốc Gia
            </InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                name: 'country',
                id: 'country-selector',
                }}
            >
                {countries.map(({ Country, ISO2 }) => (
                <option key={ISO2} value={ISO2.toLowerCase()}>
                    {Country}
                </option>
                ))}
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
);
}

CountrySelector.defaultProps = {
    countries: [],
};

export default CountrySelector;