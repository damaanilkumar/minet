import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropDown from './DropDown';




export default {
    title: 'Molecules/dropdown',
    component: DropDown
}  as ComponentMeta<typeof DropDown>;

const Template : ComponentStory<typeof DropDown> = (args)=><DropDown />

  
  export const contents = Template.bind({});
  contents.args = {
      width: '44px',
      height: '22px',
      size: 'large',
  };