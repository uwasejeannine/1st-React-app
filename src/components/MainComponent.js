import React from 'react'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Home from './HomeComponent';

import{Switch,Route,Redirect,withRouter} from 'react-router-dom'

function Main(){
    return(
        <React.Fragment>
        <Header/>
        <Switch>
            <Route path='/Home' component={Home}/>
            <Route path='/about' component={About}/>
            <Redirect to='/Home'/>
            </Switch>
        <Footer/>
        </React.Fragment>
    )
}
export default withRouter(Main);
