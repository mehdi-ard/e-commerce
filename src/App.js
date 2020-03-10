import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './configs/routes';
import Router from './providers/router';
import styles from './styles';
import AppBar from 'components/app-bar';

class App extends React.Component{
  
  render(){
    const {classes} = this.props
    return (
      <BrowserRouter>
        <div className={classes.app}>
          <CssBaseline />
          <AppBar/>
          <main className={classes.content}>
            <Router routes={Routes} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}



export default styles(App);
