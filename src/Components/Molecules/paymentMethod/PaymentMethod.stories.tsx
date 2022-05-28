import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PayMethod from './PaymentMethod';


export default {
    title: 'Molecules/PayMethod',
    component: PayMethod
}  as ComponentMeta<typeof PayMethod>;

const Template : ComponentStory<typeof PayMethod> = (args)=><PayMethod />

  
  export const deposits = Template.bind({});
  deposits.args = {
    position: 'static',
    width: '710px',
    height: '152px',
    left: '0px',
    top: '990px'
    
  };