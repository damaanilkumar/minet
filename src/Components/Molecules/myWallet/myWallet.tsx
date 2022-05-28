import React from 'react';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Typography from '../../Atoms/Typography/Typography';
import { Box, Stack } from '@mui/material';


export default function MyWallet(props:any) {
    return (
    <Box  padding={'20px'}>
        <Typography variant={'subtitle 1'} content={'My wallets'}  />        
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
            <MonetizationOnOutlinedIcon color="primary" fontSize="large" />
       
            <Stack direction="column" justifyContent="center" alignItems="flex-end" spacing={0}>
                <Typography variant={'body 1'} content={'USD Coin'}  />
                <Typography variant={'caption 2'} content={'US Dollar'} styles={{color:'#7D7D89'}}  />          
            </Stack>   
            <Typography variant={'body 1'} content={props.content} />
        </Stack> 
    </Box>
    )
}