import * as React from 'react';
import PropTypes from 'prop-types';


import { styled, alpha, useTheme, } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import { ThemeProvider, } from '@mui/material/styles';


import { lightTheme, darkTheme, } from '../../themes/commonThemes';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const DrawerCustom = ({ ...props }) => {

  const theme = useTheme();
  const [isDrawerBorderHovered, setIsDrawerBorderHovered] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  // let open = props.open;
  const [isCategoryOpen, setIsCategoryOpen] = React.useState(false);

  const handleDrawerBorderHovered = () => {

  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  if (open) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '95vh',
          '& > :not(style)': {
            m: 1,
            width: 300,
            // height: 900,
          },
        }}
      >
        <ThemeProvider theme={props.theme === 'dark' ? darkTheme : lightTheme}>
          <Paper elevation={3}>
          <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <Box sx={{ display: 'flex', }}>
                    <Grid sx={{ display: 'flex', paddingTop: '8px', paddingBottom: '8px', paddingLeft: '10px', gap: '150px', }}>
                      <Item>Logo</Item>
                      <IconButton sx={{ alignItems: 'right', }} onClick={handleDrawer}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                      </IconButton>
                    </Grid>
                  </Box>
                </ListSubheader>
              }
            >
              <React.Fragment>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Introduction'} primaryTypographyProps={{ fontSize: 14 }} />
                  {isCategoryOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {
                  Object.keys(props.config).forEach(key => console.log('props.config[key] == ' + JSON.stringify(props.config[key])))
                }
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Category A'} primaryTypographyProps={{ fontSize: 14 }} />
                  {isCategoryOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={isCategoryOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {['Test 1', 'Test 2', 'Test 3'].map((text, index) => {
                      return <React.Fragment key={index}>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={text} primaryTypographyProps={{ fontSize: 14 }} />
                      </ListItemButton>
                      </React.Fragment>
                    })}
                  </List>
                </Collapse>
              </React.Fragment>
            </List>
          </Paper>
        </ThemeProvider>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '95vh',
          '& > :not(style)': {
            m: 1,
            width: 100,
          },
        }}
      >
        <ThemeProvider theme={props.theme === 'dark' ? darkTheme : lightTheme}>
          <Paper elevation={3}>
          <List
              sx={{ width: '100%', maxWidth: 105, }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <Box sx={{ display: 'flex', }}>
                    <IconButton sx={{ alignItems: 'right', }} onClick={handleDrawer}>
                      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                  </Box>
                </ListSubheader>
              }
            >
              <React.Fragment>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon><InboxIcon sx={{fontSize: '18px'}} /></ListItemIcon>
                  {isCategoryOpen ? <ExpandLess sx={{ fontSize: '18px', }} /> : <ExpandMore sx={{ fontSize: '18px', }} />}
                </ListItemButton>
                <Collapse in={isCategoryOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {['', '', ''].map((text, index) => {
                      return <React.Fragment key={index}>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon><StarBorder sx={{fontSize: '18px'}} /></ListItemIcon>
                        {/* <ListItemText primary={text} primaryTypographyProps={{ fontSize: 14 }} /> */}
                      </ListItemButton>
                      </React.Fragment>
                    })}
                  </List>
                </Collapse>
              </React.Fragment>
            </List>
          </Paper>
        </ThemeProvider>
      </Box>
    );
  }
  
}


DrawerCustom.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  config: PropTypes.object.isRequired,
};

DrawerCustom.defaultProps = {
  theme: 'dark',
  config: {
    1: [
        {
            "Test 1": "/Test_1"
        },
        {
            "Test 2": "/Test_2"
        },
        {
            "Test 3": "/Test_3"
        }
      ]
  },
};
