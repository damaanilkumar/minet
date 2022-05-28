import React, { useState } from 'react';
import Template from '../../Templates/Base/Template'
import Summery from '../../Organisms/Summary/OrderSummery';
import Amount from '../../Organisms/AmountDetails/Amount';
import DropDown from '../../Molecules/dropDown/DropDown';
import PayMethod from '../../Molecules/paymentMethod/PaymentMethod';
import GridCard from '../../Organisms/gridCard/gridCard';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Purchase() {
    const navigate = useNavigate();
    const [BitcoinAmount, SetBitcoinAmount] = useState('$0');
    let totalPrice = 34000;

    function AmountChangeEventHandler(newAmount: string )
    {
        console.log('In Purchase');
        console.log(newAmount);
        newAmount = newAmount.replace('$','');
        newAmount = newAmount.replaceAll(',','');
        console.log('After string ops');
        console.log(newAmount);
        let res = totalPrice / Number(newAmount) 
        console.log(res);
        SetBitcoinAmount(res.toString());

    }

    return (
        <Template>
            <Stack direction={'row'} spacing={4} padding={'20px'} alignContent={'space-between'}> 
            <Stack direction={'column'} spacing= {4}  >
                <GridCard onAmoutChangeEvent={AmountChangeEventHandler}></GridCard>
                <PayMethod></PayMethod>
                <Amount buttonColor='primary' buttonText='Buy Max' content='BTC' convertedPrice={BitcoinAmount} price="$34,000.00" ></Amount>            
                <DropDown></DropDown>
           </Stack>
           <Summery buttonText='BUY NOW' buttonColor='primary' captionText='You are buying' onClick={() => navigate('/successbuy')}></Summery>
           </Stack>
        </Template>


    )
    
}