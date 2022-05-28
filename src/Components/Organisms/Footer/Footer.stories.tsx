import React from "react";
import Footer from "./Footer";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: "Organisms/Footer",
  component: Footer,
}as ComponentMeta<typeof Footer>;

const template: ComponentStory<typeof Footer> = (args:any) => <Footer {...args} />;
export const FooterComponent = template.bind({});
FooterComponent.args = {
  size: 'large',
  
};