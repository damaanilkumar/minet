import React, { useState } from 'react';
import Template from '../../Templates/Base/Template'
import Summery from '../../Organisms/Summary/OrderSummery';
import Amount from '../../Organisms/AmountDetails/Amount';
import Balance from '../../Molecules/TotalBalance/Balance';
import GridCard from '../../Organisms/gridCard/gridCard';
import {Stack} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Deposit from '../../Molecules/Deposit/deposit';


export default function Sell() {
    const navigate = useNavigate();
    const [BitcoinAmount, SetBitcoinAmount] = useState('$0');
    let totalPrice = 0.0234510 ;

    function AmountChangeEventHandler(newAmount: string )
    {
        console.log('In Purchase');
        console.log(newAmount);
        newAmount = newAmount.replace('$','');
        newAmount = newAmount.replaceAll(',','');
        console.log('After string ops');
        console.log(newAmount);
        let result = totalPrice * Number(newAmount) 
        console.log(result);
        SetBitcoinAmount(result.toString());

    }

    return (
        <Template>
            <Stack direction={'row'} spacing={4} padding={'20px'}  alignContent={'space-between'}> 
            <Stack direction={'column'} spacing={4} alignContent={'space-between'}>
                <GridCard onAmoutChangeEvent={AmountChangeEventHandler}></GridCard>
                <Balance></Balance>
                <Amount buttonColor="primary" buttonText='SELL MAX' content='USD coin (cash)' price="0.0234510" convertedPrice={BitcoinAmount}></Amount>            
                <Deposit></Deposit>
           
           </Stack>
           <Summery buttonColor='secondary' buttonText='SELL NOW' captionText='You are selling' onClick={() =>  navigate('/successsell')} ></Summery>
           
           </Stack>
        </Template>
    )
    
}