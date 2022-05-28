import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Deposit from './deposit';


export default {
    title: 'Molecules/Deposit',
    parameters:
    { docs : { page:null }},
    component: Deposit
}  as ComponentMeta<typeof Deposit>;

const Template : ComponentStory<typeof Deposit> = (args)=><Deposit />

  
  export const deposits = Template.bind({});
  deposits.args = {
    position: 'static',
    width: '710px',
    height: '152px',
    left: '0px',
    top: '990px',
    
  };