import Avatar from "./Avatar";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import avatar from "./Avatar";
export default {
  title: "atoms/Avatar",
  component: avatar,
} as ComponentMeta<typeof Avatar>;
const template:ComponentStory< typeof avatar >  = (args) =>  <Avatar {...args}  />;
export const MyAvatar = template.bind({});
MyAvatar.args={
     height: '32px',
     width: '32px',
};