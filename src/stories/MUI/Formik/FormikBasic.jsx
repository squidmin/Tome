import React from 'react';
import PropTypes from 'prop-types';


import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';  // Breaks MUI dark mode theme
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


import { ThemeProvider, } from '@mui/material/styles';
import { lightTheme, darkTheme, } from '../../../../src/stories/MUI/themes/commonThemes';
import CssBaseline from '@mui/material/CssBaseline';


import { useFormik } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});


export const FormikBasic = ({ ...props }) => {
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={props.theme === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        <form onSubmit={formik.handleSubmit}>
          <TextField
            size="small"
            sx={{ marginBottom: '20px', }}
            // fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            size="small"
            sx={{ marginBottom: '20px', }}
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </ThemeProvider>
    </Box>
  );
};


FormikBasic.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

FormikBasic.defaultProps = {
  theme: 'dark',
};
