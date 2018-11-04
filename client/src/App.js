import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#C8E6C9',
			main: '#4CAF50',
			dark: '#2E7D32',
			contrastText: '#fff'
		},
		secondary: {
			light: '#EF9A9A',
			main: '#F44336',
			dark: '#C62828',
			contrastText: '#000'
		},
		openTitle: green['400'],
		protectTitle: red['400'],
		type: 'dark'
	}
});

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<MuiThemeProvider theme={theme}>
					<Routes />
				</MuiThemeProvider>
			</BrowserRouter>
		);
	}
}

export default App;
