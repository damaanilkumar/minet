
import { Box, Tabs, Tab } from '@mui/material';
export default function ChartTabs() {
    return (
<Box maxWidth='90%' height='40px' border={'1px solid #E8E8F7'} justifyContent='center' padding={'10px'}>
    <Tabs
        value={'1H'}
        textColor="primary"
        indicatorColor="primary"
    >
        <Tab sx={{ maxWidth: '5px' }} value="1H" label="1H" />
        <Tab sx={{ maxWidth: '5px' }} value="24H" label="24H" />
        <Tab sx={{ maxWidth: '5px' }} value="1W" label="1W" />
        <Tab sx={{ maxWidth: '5px' }} value="1M" label="1M" />
        <Tab sx={{ maxWidth: '5px' }} value="1Y" label="1Y" />
        <Tab sx={{ maxWidth: '5px' }} value="ALL" label="ALL" />
    </Tabs>
</Box>

    )
}