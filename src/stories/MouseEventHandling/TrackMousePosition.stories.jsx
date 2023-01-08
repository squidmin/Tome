import React from 'react';

import { TrackMousePosition } from './TrackMousePosition';

export default {
  title: 'MouseEventHandling/TrackMousePosition',
  component: TrackMousePosition,
};

const Template = (args) => <TrackMousePosition {...args} />;

export const Default = Template.bind({});

Default.args = {
  
};