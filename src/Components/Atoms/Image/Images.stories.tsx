import Image from './Images';
import {ComponentMeta, ComponentStory} from '@storybook/react';
export default {
    title : 'Atoms/Images',
    component: Image
} as ComponentMeta<typeof Image>;
export const Template: ComponentStory<typeof Image>  = (args:any) => <Image {...args} />
Template.args = {
    height: '56px',
    width: '56px',
    src: '/assets/Bitcoin.jpg'
    }

