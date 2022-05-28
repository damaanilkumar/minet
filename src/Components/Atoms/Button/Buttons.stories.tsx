import {ComponentStory, ComponentMeta} from '@storybook/react';
import ButtonComponent from "./Buttons";



export default {
  title: "Atoms/Button",
  component: ButtonComponent,
}as ComponentMeta<typeof ButtonComponent>;

const ButtonTemplate:ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args}>{args.children}</ButtonComponent>
);




export const PrimaryButton = ButtonTemplate.bind({});
PrimaryButton.args = {
    variant: 'contained',
    children:  'BUY',
    color: 'primary',
    size: 'large',
    disabled: true
};

export const useButton = ButtonTemplate.bind({});
useButton.args = {
    variant: 'outlined',
    children:  'SELL',
    color: 'secondary',
    size: 'small',
    disabled: true
};