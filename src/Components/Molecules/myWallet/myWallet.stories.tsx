import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Wallet from './myWallet';



export default {
    title: 'Molecules/myWallet',
    component: Wallet
}  as ComponentMeta<typeof Wallet>;

const Template : ComponentStory<typeof Wallet> = (args)=><Wallet />

  
  export const wallet = Template.bind({});
  wallet.args = {
    position: 'absolute',
    width: '398px',
    height: '58px',
    left: '0px',
    top: '40px',
    
  };