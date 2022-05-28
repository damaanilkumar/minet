import { Box, Link, Stack } from '@mui/material';
import React from 'react';
import Wallet from '../../Molecules/myWallet/myWallet'
import Typography from '../../Atoms/Typography/Typography';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import RecentTransaction from '../../Molecules/reacentTransaction/recentTransaction';
import CryptoList from '../../Molecules/CryptoList/CryptoList';

export default function ActiveTransaction() {

  
    return (
<Box border={'1px solid #E8E8F7'} width={'398px'} height={'805px'} padding='20px' >
      <Stack direction={'row'} spacing={2} justifyContent="space-between" alignItems="center" >
        <Typography variant={'subtitle 1'} content={'My portfolio'} />
        <div>          
          <DonutLargeIcon />
          <FormatAlignJustifyIcon color="primary" />
        </div>
      </Stack>
      <CryptoList />
      <Stack direction={"row"} borderTop={'2px solid #E8E8F7'} borderBottom={'2px solid #E8E8F7'} padding={'20px'} justifyContent={"space-between"} margin={'5px'}>
        <Typography variant={'body 1'} content={'Total Balance'} styles={{ color: '#7D7D89' }} />
        <Typography variant={'body 1'} content={'$ 0.00'} />
      </Stack>
    
    <Wallet content={'$34000'} />

<Stack direction='row' height={'50px'} paddingTop={'30px'} justifyContent={'space-between'}>
        <Typography variant={'subtitle 1'} content={'Recent transactions'} />
        <Link href='#'>view all</Link>
        </Stack>
        <RecentTransaction />

</Box>
    )
}