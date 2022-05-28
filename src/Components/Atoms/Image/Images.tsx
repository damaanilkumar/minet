import React from "react";
import { Box } from "@mui/material";
function Image(props:any) {
  return (
    <Box {...props} alt="no image" component="img" src={props.src} sx={{width:props.width , height:props.height}} />
  );
}
export default Image;