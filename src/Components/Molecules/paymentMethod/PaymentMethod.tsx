import React from 'react';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import  Typography  from '../../Atoms/Typography/Typography';
import { Box, Stack } from '@mui/material';

export default function PaymentMethod(){
    return (
       <Box border= {'1px solid #E8E8F7'} padding={'30px'} alignContent={'center'}>
            <Typography variant="body1" content='Payment Method'  />  
          
            <Box border= {'1px solid #E8E8F7'} padding={'10px'}>     
                <Stack direction="row" spacing={4} justifyContent={'space-between'} alignItems={'center'} padding={'10px'}>
                    
                    <Stack direction={'row'} spacing={2}>
                        <MonetizationOnOutlinedIcon color="primary" fontSize="large" />
                        <div>
                        <Typography variant="caption1" content='USD Coin (Cash)' />                    
                        <Typography variant="subtitle1" content='Total Balance - $34,000' styles={{color:'#7D7D89'}} />
                        </div>
                    </Stack>
                    <Typography variant="caption1" content='default' styles={{color:'#7D7D89'}} />
                </Stack>
            </Box>
        </Box>
    
    )
}





