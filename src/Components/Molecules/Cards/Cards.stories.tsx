import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Cards';
export default {
    title: 'Molecules/Cards',
    component: Card
}  as ComponentMeta<typeof Card>;
const Template : ComponentStory<typeof Card> = (args)=><Card {...args}>{args.children}</Card>
  export const cards = Template.bind({});
  cards.args = {
    imagePath: '/assets/Bitcoin.jpg',
    id:1,
    name: 'bitcoin',
    amount: '$1,234,543'
  };