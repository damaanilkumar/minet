import { Chip, Stack } from '@mui/material';
import React from 'react';
import Typography from '../../Atoms/Typography/Typography';
import ImageComponent from '../../Atoms/Image/Images'

const CurrencyCard = (props: any) => {
    return (
        <Stack direction="row" width='100%' spacing={4} border='1px solid #E8E8F7' justifyContent={'space-between'} alignItems={'center'} padding={'10px'}>
            <Stack direction={'row'} spacing={2} alignItems='center'>
                <ImageComponent src={props.coinImage} height='42px' width='42px' />
                <div>
                    <Typography variant="body1" content={props.coinName} />
                    <Typography variant="body1" content={props.coinValue} />
                    <Chip label="24H" />
                </div>
            </Stack>
            <Stack direction='column' alignItems={'end'}>
                <Typography variant="caption1" content={props.growth} styles={{ color: props.growthColor, padding: '10px' }} data-testid='currency' />
                <ImageComponent src={props.coinGraph} height='78px' width='188.5px' position='bottom' />
            </Stack>
        </Stack>

    )
};

export default CurrencyCard;