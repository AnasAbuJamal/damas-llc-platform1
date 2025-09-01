import React from 'react';
import { TextField, InputLabel, Box } from '@mui/material';

export const StyledTextField = ({ id, name, label, ...props }) => {
  return (
    <Box >
      <InputLabel htmlFor={id} sx={{ mb: 1, fontWeight: 500, color: 'text.primary' }}>
        {label}
      </InputLabel>
      <TextField
        id={id}
        name={name}
        variant="standard"
        fullWidth
        sx={{
          '& .MuiInput-underline:before': { borderBottomColor: 'rgba(46, 46, 46, 0.2)' },
          '&:hover .MuiInput-underline:before': { borderBottomColor: 'rgba(46, 46, 46, 0.6)' },
          '& .MuiInput-underline:after': { borderBottomColor: 'secondary.main' },
        }}
        {...props}
      />
    </Box>
  );
};