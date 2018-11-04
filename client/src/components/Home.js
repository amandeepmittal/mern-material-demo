import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.svg';

const styles = theme => ({
	card: {
		maxWidth: 700,
		margin: 'auto',
		marginTop: theme.spacing.unit * 5
	},
	title: {
		padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme
			.spacing.unit * 2}px`,
		color: theme.palette.text.secondary,
		fontSize: 24
	},
	media: {
		minHeight: 450
	}
});

class Home extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Card className={classes.card}>
					<Typography type="headline" component="h2" className={classes.title}>
						Welcome to the MERN APP
					</Typography>
					<CardMedia
						className={classes.media}
						image={logo}
						title="Auth with MERN"
					/>
					<CardContent>
						<Typography type="body1" component="p">
							This is a demo application that uses a Node + MongoDB API for user
							authentication. Built With React + Material UI.
						</Typography>
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default withStyles(styles)(Home);
