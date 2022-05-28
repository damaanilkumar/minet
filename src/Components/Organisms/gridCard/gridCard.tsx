 import { Box, Grid } from "@mui/material";
 import Typography from '../../Atoms/Typography/Typography';
 import React, { useEffect, useState } from "react";
 import CardComponent from '../../Molecules/Cards/Cards'
 import {makeStyles} from '@mui/styles';
 

interface Crypto {
  id: number,
  title: string,
  image: string,
  value: string
}

const useStyles = makeStyles({
  menu: {
   height: '340px',
   width: '708px',
   left: '0px',
   top: '40px',
   padding: '24px',
   overflowY: 'scroll',  
   '&::-webkit-scrollbar': {
    width: '8px'
  },
  
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#B4B4CF',
    borderRadius:'4px'
  }
   
  }
})
const GridCard = (props: any) => {

  function CardChangeHandler(selectedAmount : any)
  {
    console.log(selectedAmount);
   props.onAmoutChangeEvent(selectedAmount);
  }

 const [data,setData] = useState<Crypto[]>([]); 

 useEffect(() => {
   const processor = async () => {
  let response = await fetch("http://localhost:8086/crypto");
  let result = await response.json();
  setData(result);
   };
   processor();
  }, []);
  
  
    
      const cards = () => {
        return data.map((currData: Crypto) => {
          return (<Grid item width={'156'} height={'159'} >
        <CardComponent 
          id={currData.id}
          name={currData.title}
          amount={currData.value}
          imagePath={currData.image}
          OnCardSelectionChange={CardChangeHandler} />
          </Grid>
          );
        });
      }
      const classes = useStyles();

    return(
      <Box border={'1px solid #E8E8F7'} className={classes.menu} > 
       <div data-testid = {`${props.name}`}><Typography variant={'body1'} content="Choose crypto"></Typography></div>
      <Grid container spacing={2} paddingTop={'30px'} >
        {cards()}
      </Grid>
      </Box>
    );
    }

      export default GridCard;