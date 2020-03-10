import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from 'microcomponents/typography';
import Icon from 'microcomponents/icon'
import BadgeCart from './badge-cart';


const styles = theme => ({
	root:{
		marginTop: 15
	},
  menuHeader: {
		display:'flex',
		listStyle:'none',
		margin:0,
		padding: 0,
		justifyContent: 'flex-end',
		'& li':{
			'& a':{
				display:'block',
				padding: '10px 15px',
				fontWeight: 'bold'
			}
		}
	},
	widgetMenu:{
		display:'flex',
		listStyle:'none',
		margin:0,
		padding: 0,
		justifyContent: 'flex-end',
		alignItems:'center'
	}
});

class AppBar extends React.Component {
  render() {
		const {classes} = this.props
    return (
      <header className={classes.root}>
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={2}>
              <Link to={'/'}>
                <Typography variant="h5" component="h5">
                  TheLoke
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={8}>
              <ul className={classes.menuHeader}> 
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/'}>Shop</Link>
                </li>
                <li>
                  <Link to={'/'}>Collections</Link>
                </li>
                <li>
                  <Link to={'/'}>Blog</Link>
                </li>
                <li>
                  <Link to={'/'}>Page</Link>
                </li>
              </ul>
            </Grid>
          
						<Grid>
							<ul className={classes.widgetMenu}>
								<li>
									<Icon>search</Icon>
								</li>
								<li>
								<BadgeCart/>
								</li>
							</ul>
						</Grid>
					</Grid>
        </Container>
      </header>
    );
  }
}

export default withStyles(styles)(AppBar);
