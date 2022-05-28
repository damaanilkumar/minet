import React from "react";
import Avatar from '../../Atoms/Avatar/Avatar'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';

export default function Profile() {
    return (
        <div>
            <Stack direction="row" spacing={1} data-testid="profile">        
        <Avatar /> 
        <ExpandMoreIcon />       
       </Stack>
        </div>
    );
}