import React from 'react';
import './Style.css';
import Header from '../../Organisms/Header/Header';
import Navs from '../../Organisms/Nav-Bars/NavBarLoad';
import Footer from '../../Organisms/Footer/Footer';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Template(props: any) {
    
    const navigate = useNavigate();
    return(
        
        <Stack direction={'row'} spacing={2} padding={'30px'}>
            <Navs onClick={() => navigate('/InitialDashboard')} width={'44px'} height={'22px'} size={'large'} />
            <Stack direction={'column'} spacing={'4'} justifyContent={'space-between'} alignItems={'center'} >
            <div className='header-footer'><Header  /></div>     
                <div id='content-wrap'>{props.children}</div>
                <div className='header-footer'><Footer /></div>
            </Stack>
        </Stack>
    );
}