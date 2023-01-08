import React from 'react';
import PropTypes from 'prop-types';


import Box from '@mui/material/Box';
import Form from '@rjsf/material-ui/v5';


import { category, fd, } from './RJSFBasic.tokens';


const onSubmit = ({ formData }, e) => {
  const stringifiedFormData = JSON.stringify(formData);
  console.log(stringifiedFormData);
};


export const RJSFBasic = ({ ...props }) => {
  const [formData, setFormData] = React.useState({});
  return (
    <Box>
      <Box sx={{ display: 'flex', }}>
        <Form
          schema={props.schema}
          formData={formData} liveValidate
          onChange={e => setFormData(e.formData)}
          onSubmit={onSubmit}
          onError={err => console.log('ERROR: ' + err)} />
      </Box>
      <br />
      <hr />
      <br />
      <Box>
        <code>{JSON.stringify(formData)}</code>
      </Box>
    </Box>
  );
};


RJSFBasic.propTypes = {
  schema: PropTypes.any,
  formData: PropTypes.any,
};

RJSFBasic.defaultProps = {
  schema: category,
  formData: fd,
};
