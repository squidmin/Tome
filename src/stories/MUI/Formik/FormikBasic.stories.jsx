import React from 'react';

import { FormikBasic } from './FormikBasic';

// import { columns, rows, } from '../shared/tokens/DataGrid_generic';

export default {
  title: 'MUI/Formik/FormikBasic',
  component: FormikBasic,
};

const Template = (args) => <FormikBasic {...args} />

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
};