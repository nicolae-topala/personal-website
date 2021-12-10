import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//Contexts
import { UserProvider } from 'contexts/UserContext';

// Pages
import { AboutPage } from 'pages/About/AboutPage';
import { ContactPage } from 'pages/Contact/ContactPage';
import { BlogPage } from 'pages/Blog/BlogPage';
import { history } from './libs/history';
import { BlogPostPage } from 'pages/BlogPost/BlogPostPage';
import { LoginPage } from 'pages/Login/LoginPage';

// SCSS
import './styles/index.scss';

ReactDOM.render(
  <UserProvider>
    <Router history={history}>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" exact={true} component={BlogPage} />
        <Route path="/blog/:id" component={BlogPostPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />

        <Route path="/" exact={true}>
          <Redirect to="/about" exact={true} />
        </Route>
      </Switch>
    </Router>
  </UserProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
