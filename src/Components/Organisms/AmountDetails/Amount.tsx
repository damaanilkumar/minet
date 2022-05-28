import React from "react";
import  Typography from '../../Atoms/Typography/Typography'
import Button from '../../Atoms/Button/Buttons';
import {Box, Stack } from '@mui/material';


export type AmountProps ={
    buttonText:string,
    buttonColor: 'warning' | 'primary',
    content: string,
    price:string,
    convertedPrice:string
}
const  AmountDetails : React.FC < AmountProps > = (props:any) => 
{
    return (
       
        <Box border={'1px solid #E8E8F7'} height={'318px'} width={'711px'} padding={'24px'}>
            <div>
                <Typography variant="body1" content='Amount Details' />
            </div>
            <Stack direction="column" justifyContent="space-evenly" alignItems="center"  spacing={4}>
            <Box border= {'1px solid #E8E8F7'} width={'660px'} height={'74px'} padding = {'20px'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack direction='row' spacing='5' justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant='subtitle1' content={props.price} />
                    <Button variant="outlined" color={props.buttonColor} children={props.buttonText} disabled={false} size={"large"} />                    
                </Stack>
            </Box>

        
        <Typography variant='caption1' content="1BTC = $3,406,069.54" styles={{color:'#7D7D89'}} />        
       
   
    <Box border= {'1px solid #E8E8F7'} width={'660px'} height={'40px'} padding = {'20px'} bottom={'-20px'} justifyContent={'space-between'} alignItems={'center'} >
            <Stack direction='row' spacing='40' justifyContent={'space-between'}>
            <Typography variant='subtitle1' content={props.convertedPrice} />
            <Typography variant='body1'  content={props.content} styles={{color:'#7D7D89'}} />
            </Stack>
    </Box>
    </Stack>
</Box>
    )
}

export default AmountDetails;