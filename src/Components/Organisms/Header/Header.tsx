import * as React from "react";

import {makeStyles} from '@mui/styles';
import { Toolbar } from "@mui/material";
import Typography from '../../Atoms/Typography/Typography';
import Button from "../../Atoms/Button/Buttons";
import Stack from '@mui/material/Stack';
import Profile from '../../Molecules/Profile/Profile';
import { useNavigate } from 'react-router-dom';

 

export default function Header() {
	const navigate = useNavigate();
	const useStyles = makeStyles({
		
		RightOptions: {
			float:'right',
			textAlign:'right',
			width:'50%',
			height:'100%',
			display: 'flex',
			flexDirection:'row'
		},
		heading:{
			width:'50%',
			height:'100%',
			float:'left',
			marginTop:'30px'
		},
		ops:{
			width:'50%',
			height:'100%',
			padding:'20px',
			display:'flex',
			flexDirection:'row'

		},
		avatardiv:{
			width:'50%',
			height:'100%'
		},
		buttonspace:{
			padding:'10px',
			width:'50%',
			height:'100%'

		}
	
	  });
	
	  const classes = useStyles();

return (	
		<Toolbar>
			<div className={classes.heading}>
			<Typography variant="h6" content='Checkout' />
			</div>
				<div className={classes.RightOptions}> 
				<Stack direction={'row'}  spacing={1}>
					<Button variant="contained" color="secondary" children='SELL' disabled={false} size={"small"} onClick={() => navigate('/sell')} />
					<Button variant="contained" color='primary' children='BUY' disabled={false} size={"small"} onClick={() => navigate('/UpdatedDashboard')} />    

					<Profile />
				</Stack>
			</div>
		</Toolbar>	
);
}
