import { Box, Grid} from '@mui/material';
import React from 'react';
import CurrencyCard from '../../Molecules/CurrencyCard/CurrencyCard';

export default function Countables() {
    return ( 
      
        <Box padding={'15px'} width='840px' height='263px'>     
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CurrencyCard coinName='Bitcoin' coinImage='/assets/Bitcoin.jpg' coinValue='$3,00,439.93' coinGraph='/assets/graph.jpg' graph='+1.2%' graphColor='#7D7D89' />
                </Grid>
                <Grid item xs={6}>
                    <CurrencyCard coinName='Ethereum' coinImage='/assets/Ethereum.jpg' coinValue='$26,128.24' coinGraph='/assets/Graph2.jpg' graph='-1.3%' graphColor='#7D7D89' />
                </Grid>
                <Grid item xs={6}>
                <CurrencyCard coinName='Ethereum 2' coinImage='/assets/Ethereum 2.jpg' coinValue='$26,128.24' coinGraph='/assets/Graph2.jpg' graph='-1.3%' graphColor='#7D7D89' />
                </Grid>
                <Grid item xs={6}>
                <CurrencyCard coinName='Tether' coinImage='/assets/Tether.jpg' coinValue='$26,128.24' coinGraph='/assets/graph.jpg' graph='-1.3%' graphColor='#7D7D89' />
                </Grid>
            </Grid>          
        
        </Box>
    
    )
}