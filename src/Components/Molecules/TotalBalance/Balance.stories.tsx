import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Balance from './Balance';




export default {
    title: 'Molecules/Balance',
    component: Balance
}  as ComponentMeta<typeof Balance>;

const Template : ComponentStory<typeof Balance> = (args)=><Balance />

  
  export const Bal = Template.bind({});
  Bal.args = {
    position: 'static',
    width: '710px',
    height: '146px',
    left: '0px',
    top: '478px'
    
      
  };