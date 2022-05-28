import { Box, Stack } from '@mui/material'
import Button from '../../Atoms/Button/Buttons';
import {useState} from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '../../Atoms/Typography/Typography';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../../../Themes/Theme';



const ActiveCoin = (props:any) =>{ 

    
    
    const [selectedCoin, setSelectedCoin] = useState(props.coinName);

    const buttons = [
        <Box key= 'bitcoin' margin={'2px'}><ThemeProvider theme={Theme}><Button variant={'contained'} children={'bitcoin'} color={'bitcoin'} size={'small'} disabled={false} onClick={onButtonClickHandler} /></ThemeProvider></Box>, 
        <Box key= 'XRP' margin={'2px'}><ThemeProvider  theme={Theme}><Button variant={'contained'} children={'XRP'} color={'xrp'} size={'small'} disabled={false} onClick={onButtonClickHandler} /></ThemeProvider></Box>,
        <Box key= 'Polkadot' margin={'2px'}><ThemeProvider theme={Theme}><Button variant={'contained'} children={'Polkadot'} color={'polkadot'} size={'small'} disabled={false} onClick={onButtonClickHandler} /></ThemeProvider></Box>,
        <Box key= 'Dogecoin'margin={'2px'}><ThemeProvider theme={Theme}><Button  variant={'contained'} children={'Dogecoin'} color={'doge'} size={'small'} disabled={false} onClick={onButtonClickHandler} /></ThemeProvider></Box>,
        <Box key= 'Ethereum' margin={'2px'}><ThemeProvider theme={Theme}><Button variant={'contained'} children={'Ethereum'} color={'ethereum'} size={'small'} disabled={false} onClick={onButtonClickHandler} /></ThemeProvider></Box>,
        <Box key= 'Tether' margin={'2px'}><ThemeProvider theme={Theme}><Button variant={'contained'} children={'Tether'} color={'tether'} size={'small'} disabled={false} onClick={onButtonClickHandler} /></ThemeProvider></Box>,
        <Box key= 'Ethereum2' margin={'2px'}><ThemeProvider  theme={Theme}><Button variant={'contained'} children={'Ethereum2'} color={'ethereum2'} size={'small'} disabled={false} onClick={onButtonClickHandler} /></ThemeProvider></Box>,
        ];

    function onButtonClickHandler(event:any) {
        setSelectedCoin(event.target.outerText);
        console.log(selectedCoin);
        props.onActiveCoinChange(event.target.outerText);
    }

    return (
        <div>
        <Stack direction="row" justifyContent={'space-between'} alignContent={'center'} padding={'20px'}>
        <Typography variant={'body 1'} content={'10 coins (3 active)'} />
            
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <InfoOutlinedIcon />
            <Typography variant={'caption2'} content={'Click on currency name below to display it on the graph'} />
           </Stack>
        </Stack>
        <Stack direction='row' spacing={2}  width='840px' height='30px'>
        <ChevronLeftIcon />
        { buttons }
        <ChevronRightIcon />        
        </Stack>  
        </div>
    )
};

export default ActiveCoin;