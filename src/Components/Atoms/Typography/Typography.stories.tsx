import { ComponentStory } from '@storybook/react';
import Typography from './Typography';

export default {
    title: "Atoms/Typography",
    component: Typography,
    argTypes:{
        variant:{control:"select", options:["h4","h6","subtitile1","subtitile2","body1","body2","button","caption1","caption2","overline"]},
    },
};

const Template:ComponentStory<typeof Typography> = (args) => <Typography{...args}/>

export const text = Template.bind({});

text.args={
    variant:"h4",
    content:"Buy Bitcoin",

};


