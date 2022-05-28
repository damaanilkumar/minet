import React from 'react';
import Typography from '../../Atoms/Typography/Typography';
import Button from '../../Atoms/Button/Buttons';
import {makeStyles} from '@mui/styles';
import { Stack } from '@mui/material';

const useStyles = makeStyles(
    {
    lined: {
        display: 'flex',        
        flexDirection:'column',
        justifyContent:'center',
        position:'relative',
        top:'20%',
        left:'20%',
        width:'50%',
        padding: '50px'
    }, 
    textClass:{
        textAlign:'center'
    },
    imageDiv :{
        textAlign:'center'
    },
    buttonsArea:{
        textAlign:'center'
        

    }
}
)    

export default function SellSuccessScreen() {
    const classes = useStyles();
    return (
        <div className={classes.lined}>
            <div className={classes.imageDiv}>
                <img src='/assets/success.jpeg' alt='success'/><br/>
            </div>
            <div className={classes.textClass}>
                <Typography variant="h4" content='0.0234510 BTC'/><br/>
                <Typography variant="body2" content='Sell is completed, please check your'/>
                <Typography variant="body2" content=' balance in your crypto wallet'/>
            </div>
            <div className={classes.buttonsArea}>
                <Stack direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'} padding={'20px'}>
                <Button variant="outlined" color='primary' children='BUY CRYPTO' disabled={false} size={'large'} />
                <Button variant="contained" color='primary' children='GO TO USD COIN' disabled={false} size={'large'} />
                </Stack>
            </div>
        </div>
    )
}