import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import 'typeface-roboto';

import ButtonAppBar from './appbar';
import Routes from '../routes/index';


const theme = createMuiTheme({
  container: {
    margin: 10
  },
  palette: {
    primary: blue,
    secondary: red,
    
  },
  status: {
    danger: 'orange',
  },
});


class Home extends Component {
  render() {   
    return (
      <MuiThemeProvider theme={theme}>       
          <ButtonAppBar /> 
          <Routes />                                
      </MuiThemeProvider>
    );
  }
}

export default Home;
