import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Amount from './Amount';


export default {
    title: 'Organisms/Amount ',
    component: Amount 
}  as ComponentMeta<typeof Amount >;

const Template : ComponentStory<typeof Amount > = (args)=><Amount  {...args}>{args.children}</Amount>

  
  export const details = Template.bind({});
  details.args = {
    
    
  };