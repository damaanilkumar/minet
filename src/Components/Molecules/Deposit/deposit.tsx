import React from 'react';
import  Typography  from '../../Atoms/Typography/Typography';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Box, Stack } from '@mui/material';

export default function Deposit() {
    return (
        <Box border= {'1px solid #E8E8F7'} padding={'30px'}>
        
             <Typography variant="body1" content="Deposit to" />
      

      <Box border= {'1px solid #E8E8F7'}>
      <Stack direction="row" spacing={4} justifyContent={'space-between'} alignItems={'center'} padding={'10px'}>
        <Stack direction="row" spacing={2}>
        <MonetizationOnOutlinedIcon color="primary" fontSize="small" data-testid={'deposit'}/>
<div>
        
        <Typography variant='caption1' content='USD Coin (Cash)' />
</div>
</Stack>
        <Typography variant='caption1' content='Default' styles={{color:'#7D7D89'}} />
        </Stack>
    </Box>
  </Box>


    )
}