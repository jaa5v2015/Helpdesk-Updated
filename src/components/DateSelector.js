import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateSelector = props => {
  const [value, setValue] = React.useState(null);

    
  
  return (
    
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      
      <DatePicker
        label={props.label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          props.filterDate(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
        
      />

      
    </LocalizationProvider>
  );
}

export default DateSelector;