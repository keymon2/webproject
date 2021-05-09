import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }
  setToken(token) {
    sessionStorage.setItem('token',JSON.stringify(token))
  }
  getToken(){
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }
  

  render() {
      return (
        <BrowserRouter>
            <React.Suspense fallback={loading}>
              <Switch>
                <Route path="/" name="Login Page" render={props => <Login setToken={this.setToken}/>} />
                <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
                <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
                <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              </Switch>
            </React.Suspense>
        </BrowserRouter>
      );
    
  }
}

export default App;
