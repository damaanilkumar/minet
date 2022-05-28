import React from "react";
import GridViewIcon from '@mui/icons-material/GridView';
import FormatAlignJustifyIcon  from '@mui/icons-material/FormatAlignJustify';

import Stack from '@mui/material/Stack';

export default function Editor() {
    return (
        <div >
            <Stack direction="row" spacing={1} data-testid="editor" padding='5px'>        
        <GridViewIcon color="primary"/>
        <FormatAlignJustifyIcon />   
       </Stack>
        </div>
    );
}