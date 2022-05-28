import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/styles";
import theme from '../../../Themes/Theme'


 
export type buttonprops = {
  variant:  'contained' | 'outlined' | 'text',
    children: string,
    color: string,
    size : 'small' | 'large',
    disabled: boolean,
   onClick? : Function
    
    
}
const ButtonComponent : React.FC < buttonprops > = (props:any) =>{
    return(
      <ThemeProvider theme={theme}>
         <Button variant={props.variant} color={props.color}  size={props.size} onClick={props.onClick} href={props.href} >
          {props.children}
        </Button>
        </ThemeProvider>
    )
  }
  
  export default ButtonComponent;
  