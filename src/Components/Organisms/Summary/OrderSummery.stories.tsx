import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  OrderSummery from './OrderSummery';
import { BrowserRouter } from 'react-router-dom';


export default {
    title: 'Organisms/OrderSummery ',
    component: OrderSummery
}  as ComponentMeta<typeof OrderSummery>;



const Template:ComponentStory<typeof OrderSummery> = (args) => (
 <BrowserRouter><OrderSummery {...args}>{args.children}</OrderSummery></BrowserRouter>
);
  
  export const summary = Template.bind({});
  summary.args = {
  buttonText: 'Buy',
  buttonColor: 'secondary' ,
  captionText:'Template'
    
  };