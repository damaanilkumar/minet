

import * as React from 'react';

import {makeStyles} from '@mui/styles';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '../../Atoms/Typography/Typography';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/material';

export default function DropDown() {

  const dropdownStyles = makeStyles({
    root: {      
      "& .MuiInputLabel-root": {
        color: "#FFFFFF"
      },     
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#FFFFFF"
      }, 
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#FFFFFF"
      },      
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#FFFFFF"
      },
      height:'74px',
      width:'663px',
      "& .MuiSelect-icon":{
        float: 'right'
      }
    },

    deliveryIcon:{
      textAlign:'center',
      padding:'15px'
      },

    deliveryCost: {
      textAlign:'right',
    },
    1:{

    }

  });

  const classes = dropdownStyles();
  
  return (
    <Box height={'130px'} width={'711px'} border={'1px solid #E8E8F7'} padding={'24px'} >  
      <div><Typography variant='body1' content='Select Speed Delivery' /></div>   
      <Stack direction={'row'} spacing={1} border={'1px solid #E8E8F7'} borderRadius={'4px'} alignContent={'center'}>
        <div className={classes.deliveryIcon}> <LocalShippingOutlinedIcon /> </div>
          
        <Select className={classes.root} value={'1'} variant="outlined" IconComponent={() =>(<ExpandMoreIcon/>)}>
         
          <MenuItem value= '1'><Stack direction='row' width='100%' justifyContent={'space-between'} alignContent={'center'} >
            <Typography variant="body1" content="Instant : 2-5 minutes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
            <Typography variant ='caption2' content='Delivery fees : 0.001 BTC' styles={{color:'#7D7D89'}} />
            </Stack>
          </MenuItem>    
          
          <MenuItem value='2'><Stack direction='row' width='100%' justifyContent={'space-between'} alignContent={'center'} >
            <Typography variant="body1" content="Faster : 4 hours" />            
            <Typography variant ='caption2' content='Delivery fees : 0.0001 BTC' styles={{color:'#7D7D89' }} />
          </Stack></MenuItem>
         
          <MenuItem value='3'><Stack direction='row' width='100%' justifyContent={'space-between'} alignContent={'center'} >
            <Typography variant="body1" content="Fast : 120 hours" />
            <Typography variant ='caption2' content='Delivery fees : 0.00001 BTC' styles={{color:'#7D7D89',}}  />
          </Stack></MenuItem>
          
          <MenuItem value='4'><Typography variant="body2" content="None" /></MenuItem>
        </Select>
      </Stack>
    </Box>
  );
}