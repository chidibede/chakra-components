import React from 'react';
import { chakraStorybook } from '../../../enums';

import Alert from './Alerts';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `${chakraStorybook}/Notification/Alerts`,
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Alert {...args} />;

export const Alerts = Template.bind({});

