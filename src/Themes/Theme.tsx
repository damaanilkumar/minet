import { createTheme } from "@mui/material";
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

declare module '@mui/material/styles' {
  interface Theme {
    bitcoin: {
      main: string;
      contrastText: string;
    };
    xrp: {
      main: string;
      contrastText: string;
    };
    polkadot: {
      main: string;
      contrastText: string;
    };
    ethereum: {
      main: string;
      contrastText: string;
    };
    tether: {
      main: string;
      contrastText: string;
    };
    ethereum2: {
      main: string;
      contrastText: string;
    };
    doge: {
      main: string;
      contrastText: string;
    };
    
  }
  interface Palette {
    bitcoin: Palette['primary'];
    xrp: Palette['primary'];
    polkadot: Palette['primary'];
    ethereum: Palette['primary'];
    tether: Palette['primary'];
    ethereum2: Palette['primary'];
    doge: Palette['primary'];
  }
  interface PaletteOptions {
    bitcoin: PaletteOptions['primary'];
    xrp: PaletteOptions['primary'];
    polkadot: PaletteOptions['primary'];
    ethereum: PaletteOptions['primary'];
    tether: PaletteOptions['primary'];
    ethereum2: PaletteOptions['primary'];
    doge: PaletteOptions['primary'];
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    bitcoin?: {
      main?: string;
      contrastText?:string;
    };
    xrp?: {
      main?: string;
      contrastText?: string;
    };
    polkadot?: {
      main?: string;
      contrastText?: string;
    };
    ethereum?: {
      main?: string;
      contrastText?: string;
    };
    tether?: {
      main?: string;
      contrastText?: string;
    };
    ethereum2?: {
      main?: string;
      contrastText?: string;
    };
    doge?: {
      main?: string;
      contrastText?: string;
    };
  }
}

const Theme = createTheme({
  palette: {
    primary:{
      light: '#FAFCFF',
       main: '#0052FF'       
    },
    secondary:{
      main:'#FFA74F',
      contrastText:'#FAFCFF'
    },
    bitcoin:{
      main:'#F7931A33',
      contrastText:'#343446'
    },
    xrp: {
      main: '#22222233',
    },
    polkadot: {
      main: '#E6007A33'
    },
    ethereum: {
      main: '#627EEA33'
    },
    tether: {
      main: '#26A17B33'
    },
    ethereum2: {
      main: '#19197133'
    },
    doge: {
      main: '#DBC98433'
    },
    },
    
  components:{
    MuiOutlinedInput: {
      styleOverrides: {
        root: {       
         [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderWidth: 0,
          }
        }
      }
    }
  }  

});

export default Theme;
