import React from 'react';
import  Typography  from '../../Atoms/Typography/Typography';
import { Box, Stack } from '@mui/material';



export default function Balance() {
    return(
        <Box border= {'1px solid #E8E8F7'} padding={'24px'} width={'711px'} height={'146px'}>
          <Typography variant="body1" content='Total Balance' />
    
      <Box border= {'1px solid #E8E8F7'}  > 
     <Stack direction="row" spacing={4} alignContent={'center'} justifyContent="space-between" padding={'10px'}  >
        
     <img src='./assets/Bitcoin.jpg' alt="Bitcoin" />
     <Typography variant="caption1" content='Bitcoin' />
    
     <div>
        <Typography variant="subtitle1" content='0.0234510 BTC' />
        </div>
     </Stack>
   </Box>
</Box>

    );
}