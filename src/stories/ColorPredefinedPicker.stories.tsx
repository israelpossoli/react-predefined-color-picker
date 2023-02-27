import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ColorPredefinedPicker from '../components/ColorPredefinedPicker';

export default {
    /* ?? The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Example/ColorPredefinedPicker',
    component: ColorPredefinedPicker,
  } as ComponentMeta<typeof ColorPredefinedPicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: ComponentStory<typeof ColorPredefinedPicker> = () => <ColorPredefinedPicker onChange={(e) => console.log(e)}/>;
export const SelectedColor: ComponentStory<typeof ColorPredefinedPicker> = () => <ColorPredefinedPicker color="red" onChange={(e) => console.log(e)}/>;

export const Columns: ComponentStory<typeof ColorPredefinedPicker> = () => <ColorPredefinedPicker columns={4} onChange={(e) => console.log(e)}/>;

export const Small: ComponentStory<typeof ColorPredefinedPicker> = () => <ColorPredefinedPicker size="small" onChange={(e) => console.log(e)}/>;
export const Large: ComponentStory<typeof ColorPredefinedPicker> = () => <ColorPredefinedPicker size="large" onChange={(e) => console.log(e)}/>;
