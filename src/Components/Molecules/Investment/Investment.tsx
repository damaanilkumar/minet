import React from "react";
import { Box, Stack } from '@mui/material'
import Typography from "../../Atoms/Typography/Typography";
import CallMadeIcon from '@mui/icons-material/CallMade';
import ChartTabs from "../ChartTabs/ChartTabs";

export default function Investment() {
    return (
        <div>
        <Typography variant={"subtitle1"} content={"My portfolio value"} />
        <Box border= {'1px solid #E8E8F7'} padding={'12px'} width={'840px'} height={'422px'} margin={'12px'}>
          
         
            <Stack direction="row" justifyContent="space-between" padding={'15px'} alignItems="center"  spacing={2} width='100%'>
            <Stack direction='row' width='100%' paddingTop={'24px'} paddingLeft={'24px'}>
                <div>
                 <Typography variant={"caption1"} content={"Total Investment"} styles={{color:'#7D7D89'}} />
                 <Typography variant={"H6"} content={"$0.00"} />
                 </div>
                 <Stack direction='row'>
                 <CallMadeIcon color="success"/>
                 <Typography variant={"overlined"} content={"+0.00%"}  />
                 </Stack>
             </Stack>
             <ChartTabs/>
    </Stack>
           <img src="/assets/value.jpeg" alt="Value" width={'240px'} height={'183px'} />
  </Box >
</div>
    )

}