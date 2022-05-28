
import React from 'react';
import {Box} from '@mui/material';
const Icon = ({icon, ...props}:any) =>{
    return (
        <Box {...props} sx={{padding: '0px'}} testid="icon">
         {icon}   
        </Box>
    );  }
export default Icon;