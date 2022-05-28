import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavBar from './NavBarLoad';
import navBarLoad from './NavBarLoad';

export default {
    title: 'Organisms/Nav-Bars',
    component: navBarLoad
}  as ComponentMeta<typeof navBarLoad>;

const Template : ComponentStory<typeof navBarLoad> = (args)=>< NavBar  />

  
  export const contents = Template.bind({});
  contents.args = {
    width: '44px',
    height: '22px',
    size: 'large',
  };