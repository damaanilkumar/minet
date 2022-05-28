import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CurrencyCard from './CurrencyCard';
export default {
    title: 'Molecules/CurrencyCard',
    component: CurrencyCard
}  as ComponentMeta<typeof CurrencyCard>;
const Template : ComponentStory<typeof CurrencyCard> = (args)=><CurrencyCard {...args}>{args.children}</CurrencyCard>
  export const cards = Template.bind({});
  cards.args = {
    coinImage: '/assets/Bitcoin.jpg',
    coinName:'Bitcoin',
    coinValue: '$3,00,439.93',
    coinGraph: '/assets/graph.jpg',
    growth:'+1.2%',
    growthColor:'#7D7D89'
  };