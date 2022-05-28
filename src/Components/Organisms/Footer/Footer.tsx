import * as React from 'react';
import './Style.css'

import Link from '@mui/material/Link';
import Select from '@mui/material/Select';
import { Stack } from '@mui/material';
import  Button from '../../Atoms/Button/Buttons';
import {makeStyles} from '@mui/styles';


const Footer = () => {

  const useStyles = makeStyles({
    body:{
      height:'370px',
      width:'100vw',
      paddingTop:'38px'
    },
    rightFooter:
    {
      float:'right',
      width:'50%'
    }
  });

  const classes = useStyles();

  return (
  
    <div className={classes.body} data-testid="footer">
      <Stack direction={'row'} spacing={'1'}>
      <div>
          <Stack direction='row' spacing={3} alignContent={'center'}>
             <Link>DashBoard</Link> 
             <Link>Careers</Link> 
             <Link>Legal & Privacy</Link>
             &nbsp; &copy; 2021 Minet
            </Stack>  
      
      </div>
      <div className={classes.rightFooter}>
      <Stack direction={'row'} spacing={2} justifyContent={'end'}>
        <Select defaultValue={'menu'} className='dropdownClass'>          
            <option value='menu'>English</option>
        </Select>        
        <Button variant="outlined" children='need Help' color='primary' disabled={false} size={'small'} />
      </Stack>
      </div>
      </Stack>
    </div>
    
  );
  }

  export default Footer;
