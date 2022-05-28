import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Profile from './Profile';




export default {
    title: 'Molecules/profile',
    component: Profile
}  as ComponentMeta<typeof Profile>;

const Template : ComponentStory<typeof Profile> = (args)=>< Profile  />

  
  export const content = Template.bind({});
  content.args = {
    

     
  };