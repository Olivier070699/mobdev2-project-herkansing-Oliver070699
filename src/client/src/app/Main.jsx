/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Redirect, Switch } from 'react-router-dom';

/*
Utilities
*/
import { RouteWithLayout } from './utilities';

/*
Layout
*/
import { LoginLayout, PageLayout } from './layouts';
import { AdminLayout } from './admin/layouts';

/*
Page components
*/
import HomePage from './pages/home';
import AdminPage from './admin/pages/admin';
import LoginPage from './pages/login';
import NewsPage from './pages/news';
import PostDetailPage from './pages/post-detail';
import HomeDetail from './pages/home-detail';
import RoomsPage from './pages/rooms';
import QuestionDetailPage from './pages/question-detail';
import SignUpPage from './pages/sign-up';

/*
Import styling
*/
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <RouteWithLayout exact path='/museums' layout={PageLayout} component={HomePage} />
          <RouteWithLayout path="/login" layout={ LoginLayout } component={ LoginPage }></RouteWithLayout>
          {/* <Redirect from="/" to="/login" /> */}
          <RouteWithLayout exact path='/museums/:id' layout={ PageLayout } component={ HomeDetail }/>
          <RouteWithLayout exact path='/news' layout={ PageLayout } component={ NewsPage }/>
          <RouteWithLayout exact path='/news/:id' layout={ PageLayout } component={ PostDetailPage }/>
          <RouteWithLayout path="/admin" layout={AdminLayout} component={AdminPage}></RouteWithLayout>
          <RouteWithLayout path="/rooms" layout={PageLayout} component={RoomsPage}></RouteWithLayout>
          <RouteWithLayout path="/questions" layout={PageLayout} component={QuestionDetailPage}></RouteWithLayout>
          <RouteWithLayout path="/signup" layout={ LoginLayout } component={ SignUpPage }></RouteWithLayout>
        </Switch>
      </div>
    );
  }
}

export default Main;