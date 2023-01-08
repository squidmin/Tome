import * as React from 'react';

import { ButtonGroupSplit } from './ButtonGroupSplit';


export default {
  title: 'MUI/ButtonGroup/ButtonGroupSplit',
  component: ButtonGroupSplit,
};

const Template = (args) => <ButtonGroupSplit {...args} />


export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  variant: 'text',
  options: ['Create a merge commit', 'Squash and merge', 'Rebase and merge'],
  ariaLabel: 'vertical outlined button group',
};