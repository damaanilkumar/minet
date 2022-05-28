import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  CryptoList from './CryptoList';



export default {
    title: 'Molecules/CryptoList ',
    component: CryptoList
}  as ComponentMeta<typeof CryptoList>;

const Template : ComponentStory<typeof CryptoList> = (args)=>< CryptoList />
  
  export const crypto = Template.bind({});
  crypto.args = {
    height: '34px',
    width: '23px',
  };