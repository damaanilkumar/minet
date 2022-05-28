import React from 'react';
import  Button  from '../../Atoms/Button/Buttons';
import  Typography from '../../Atoms/Typography/Typography'
import Stack from '@mui/material/Stack';
import Icon from '../../Atoms/Icons/Icon'
import  {Box} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';



export type SummeryProps ={
  buttonText:string,
  buttonColor: 'secondary' | 'primary',
  captionText:string,
  onClick?: Function
  
}




const Summery : React.FC < SummeryProps > = (props:any) =>{
  
  
    return(
      <Box border={'1px solid #E8E8F7'} width={'527px'} height={'646px'}  >  
        
      <Stack direction={'column'} spacing={1} justifyContent={'center'} alignItems={'center'} padding={'20px'} borderBottom={'1px solid #E8E8F7'}>
        <Typography variant='caption1' content={props.captionText} styles={{color:'#7D7D89'}} />          
        <Typography  variant="h6" content='0.0234510 BTC' />          
        <Typography variant='caption1' content='1BTC = $3,297,866.84' styles={{color:'#7D7D89'}} />          
      </Stack>
      <Stack direction={'column'} spacing={2} padding={'24px'} borderBottom={'1px solid #E8E8F7'}>
        <Stack direction={'row'} spacing={2}>
          <Icon icon={<CreditCardIcon />}></Icon>
          <div>
              <Typography variant="caption2" content='Payment method' styles={{color:'#7D7D89'}} />
              <Typography variant="body1" content='Visa credit ...8845'/>
          </div>
        </Stack>
        <Stack direction={'row'} spacing={2}>
        <Icon icon={<LocalShippingOutlinedIcon />}></Icon>
          <div>
          <Typography variant="caption2" content='Delivery Fees' styles={{color:'#7D7D89'}} />
              <Typography variant="body1" content='0.001 BTC'/>
          </div>
        </Stack>
        <Stack direction={'row'} spacing={2}>
        <Icon icon={<AccountBalanceWalletIcon />}></Icon>
          <div>
          <Typography variant="caption2" content='Deposit to' styles={{color:'#7D7D89'}} />
              <Typography variant="body1" content='Bitcoin wallet'/>
          </div>
        </Stack>
      </Stack>

          
           
            
          

          <Stack direction={'column'} spacing={2} justifyContent={'center'} padding={'24px'} alignContent={'center'}>
          <Stack direction="row" spacing={40} justifyContent="space-between"
  alignItems="center" padding={'5px'}>
          
              <Typography variant="overline" content='0.0234510 BTC' />
              <Typography variant="overline" content='$34,000.00' />
            </Stack>
              
            <Stack direction="row" spacing={40} justifyContent="space-between"
  alignItems="center" padding={'5px'}>
            <Typography variant="overline" content='Transaction fee' /> 
            <Typography variant="overline" content='$1,000.00' />
            </Stack>
             
            <Stack direction="row" spacing={40} justifyContent="space-between"
  alignItems="center" padding={'5px'}>
              <Typography variant="body1" content='Total' />
              
              <Typography variant="body1" content='$35,000.00' />               
           
           </Stack>   
                   
             <Button onClick={props.onClick} variant='contained' color={props.buttonColor} children={props.buttonText}  disabled={false} size='large' />
          
            </Stack>
              
            </Box>
        );

    }

export default Summery;