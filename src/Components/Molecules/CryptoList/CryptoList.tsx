import React from 'react';

import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export default function CryptoList(props: any) {
  return (   
    <Box maxHeight={'300px'} overflow={'auto'} paddingBottom={'10px'}>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src="/assets/Bitcoin.jpg" alt="BTC" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bitcoin" secondary="BTC" />
        <ListItemText sx={{textAlign:'right'}} primary='$0.00' secondary='+0.00%' />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src="/assets/Ethereum.jpg" alt="ETH" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ethereum" secondary="ETH" />
        <ListItemText sx={{textAlign:'right'}} primary='$0.00' secondary='+0.00%' />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src="/assets/Tether.jpg" alt="TEH" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Tether" secondary="USDT" />
        <ListItemText sx={{textAlign:'right'}} primary='$0.00' secondary='+0.00%' />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <img src="/assets/XRP.jpg" alt="XRP" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="XRP" secondary="XRP" />
        <ListItemText sx={{textAlign:'right'}} primary='$0.00' secondary='+0.00%' />
      </ListItem>
      </List>
    </Box>
  )
}



