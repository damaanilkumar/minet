import React from 'react';
import './style.css';
import Stack from '@mui/material/Stack';


export type NavProps ={
    width?: string,
    height?: string,
    size?: string,
    onClick?: Function
    
  }



 const navBarLoad : React.FC < NavProps > = (props:any) =>{
    
   
    return (
       

        <Stack direction={'column'} spacing={5} data-testid="navbar">
            <img src='assets/logo.jpeg' alt='logo' height={'19px'} width={'20px'} />
            <img src='assets/2.jpg' alt='dashboard' height={'19px'} width={'20px'} onClick={props.onClick} />
            <img src='assets/3.jpg' alt='portfolio' height={'19px'} width={'20px'} />
            <img src='assets/4.jpg' alt='trade' height={'19px'} width={'20px'} />
            <img src='assets/5.jpg' alt='notification' height={'19px'} width={'20px'} />
            <img src='assets/6.jpg' alt='logout' height={'19px'} width={'20px'} />
        </Stack>

        
    );
}

export default navBarLoad;
