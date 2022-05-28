import React from 'react';
import Typography from '../../Atoms/Typography/Typography';
import { Box, Chip, Grid, Stack } from '@mui/material';



export default function RecentTransaction() {
  return (
    <Box width={'374px'} height={'400px'} justifyContent={'center'} alignItems={'center'}>
      <Typography variant="caption2" content='June 23' />
      
      <Stack direction='row' alignItems='center'>
      <img src='/assets/success.jpeg' alt='Purchase' height='50px' width='50px' />
      <Grid container width='100%' rowSpacing={2} columnSpacing={{ xs: 12 }} padding='10px'>      
        <Grid item xs={6}>        
          <Typography variant={'body 1'} content={'Bitcoin BTC'} />
        </Grid>         
        <Grid item xs={6} sx={{ textAlign: 'right' }}>
          <Typography variant={'body1'} content={'-0.0234510BTC'} />
        </Grid>         
        <Grid item xs={6}>
          <Chip label="Sold" />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'right' }}>
          <Typography variant={'caption2'} content={'+$34,000.00'} />
        </Grid>
      </Grid>      
      </Stack>
      
      <Typography variant="caption2" content='June 14' />
      <Stack direction='row' alignItems='center'>
      <img src='/assets/success.jpeg' alt='Purchase' height='50px' width='50px' />
      <Grid container width='100%' rowSpacing={2} columnSpacing={{ xs: 12 }} padding='10px'>
        <Grid item>
          <Typography variant={'body 1'} content={'Bitcoin BTC'} />
        </Grid>

        <Grid item sx={{ textAlign: 'right' }}>
          <Typography variant={'body1'} content={'+0.0010 BTC'} />
        </Grid>

        <Grid item xs={6}>
          <Chip label="Purchase" />
        </Grid>

        <Grid item sx={{ textAlign: 'right' }}>
          <Typography variant={'caption2'} content={'+$34,000.00'} />
        </Grid>
      </Grid>
      </Stack>
    </Box>

  );
}