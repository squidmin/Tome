import * as React from 'react';
import PropTypes from 'prop-types';


import Button from '@material-ui/core/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


import { lightTheme, darkTheme, } from '../../../../../src/stories/MUI/themes/commonThemes';
import { consolasFontTheme, } from '../../themes/fontOverrideTheme';
import { deepmerge } from '@mui/utils';
import { ThemeProvider, createTheme, } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


import { useFormik } from 'formik';
import * as yup from 'yup';


import { columns, rows, } from '../shared/tokens/DataGrid_generic';


const validationSchema = yup.object({
  name: yup
    .string('Name must be a string')
    .required('Name is required'),
  type: yup
    .string('Type must be string')
    .required('Type is required'),
});


const SchemaEditor = ({ ...props }) => {

  const [schemaData, setSchemaData] = React.useState([]);

  const addSchemaDataItem = () => {
    let temp = schemaData;
    temp.push({
      name: '',
      type: '',
    });
    setSchemaData(temp);
    console.log('schemaData === ' + JSON.stringify(schemaData));
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let temp = [];
      schemaData.forEach(item => { temp.push(item); });
      temp.push(values);
      setSchemaData(temp);
      console.log('schemaData === ' + JSON.stringify(schemaData));
    },
  });

  return (
    <div>
      <IconButton
        sx={{ marginBottom: '20px', }}
        onClick={addSchemaDataItem}
        color="primary"
        aria-label="example"
      >
        <AddIcon />
      </IconButton>
      <form onSubmit={formik.handleSubmit}>
        {/* <TextField
          size="small"
          sx={{ marginBottom: '20px', }}
          inputProps={{ style: { fontFamily: 'Consolas' } }}
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          size="small"
          sx={{ marginBottom: '20px', }}
          inputProps={{ style: { fontFamily: 'Consolas' } }}
          fullWidth
          id="type"
          name="type"
          label="Type"

          type="type"
          value={formik.values.type}
          onChange={formik.handleChange}
          error={formik.touched.type && Boolean(formik.errors.type)}
          helperText={formik.touched.type && formik.errors.type}
        /> */}
        {schemaData.map((item, index) => {
          <Box key={index}>
            {console.log('item === ' + JSON.stringify(item))}
            <TextField
              size="small"
              sx={{ marginBottom: '20px', }}
              inputProps={{ style: { fontFamily: 'Consolas' } }}
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              size="small"
              sx={{ marginBottom: '20px', }}
              inputProps={{ style: { fontFamily: 'Consolas' } }}
              fullWidth
              id="type"
              name="type"
              label="Type"
              type="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              error={formik.touched.type && Boolean(formik.errors.type)}
              helperText={formik.touched.type && formik.errors.type}
            />
          </Box>
        })}
        <Button
          color="primary"
          variant="outlined"
          // fullWidth
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};


export const DataGridBuilder = ({ ...props }) => {
  const theme = props.theme === 'dark' ?
    createTheme(deepmerge(consolasFontTheme, darkTheme)) :
    createTheme(deepmerge(consolasFontTheme, lightTheme)) ;
  return (
    <div style={{ height: 400, width: '100%' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SchemaEditor />
      </ThemeProvider>
    </div>
  );
};


DataGridBuilder.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

DataGridBuilder.defaultProps = {
  theme: 'dark',
};