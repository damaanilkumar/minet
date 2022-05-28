import React from 'react';
import Header from './Header';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import avatar from '../../Atoms/Avatar/Avatar';
import { BrowserRouter } from 'react-router-dom';


export default {
  title: 'Organisms/Header',
  component: Header,

  } as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args:any) => <BrowserRouter> < Header {...args} /> </BrowserRouter>;

export const buttons = Template.bind({});
buttons.args = {
    variant: 'contained',
    children: 'SELL',
    color:'primary',
    size: 'large',
    onclick: '/'
  };

  export const Avatar = Template.bind({})
  Avatar.args = {
height: '32px',
width: '32px',
left: '0px',
top: '0px',
src: avatar
};

