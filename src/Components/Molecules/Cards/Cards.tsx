import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardMedia } from '@mui/material';
import {useState} from 'react';
import Typography from '../../Atoms/Typography/Typography';
const Cards = (props:any) =>{
const [selectedCardAmount] = useState(props.amount);
 function onCardClickHandler() {
    props.OnCardSelectionChange(selectedCardAmount);
}
return (
 <Card sx={{ width: '159px', height:'156px' }}  >
    <CardActionArea onClick={onCardClickHandler}>
      <CardMedia 
      component='img'      
      sx={{height:'56px', width:'56px',  paddingTop:'5%', paddingLeft:'30%'}}
      image={props.imagePath}
      alt='bitcoin'      
      data-testid="card" />      
      <CardContent sx={{ textAlign:'center'}}>
      <div  ><Typography variant='body1'  content={props.name} styles={{ color:'#4B4B60'}} /></div>
      <div><Typography variant='caption1' content={selectedCardAmount} styles={{color:'#7D7D89'}} /></div>
        </CardContent>
      </CardActionArea>
</Card>
 ); }
 export default Cards;


