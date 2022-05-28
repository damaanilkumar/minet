import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Editor from './Editor';




export default {
    title: 'Molecules/Editor',
    component: Editor
}  as ComponentMeta<typeof Editor>;

const Template : ComponentStory<typeof Editor> = (args)=>< Editor  />

  
  export const cont = Template.bind({});
  cont.args = {
    

     
  };