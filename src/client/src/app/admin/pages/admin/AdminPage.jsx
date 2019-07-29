/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/*
Pages
*/
import BlogsOverviewPage from '../blogs-overview';
import CategoriesOverviewPage from '../categories-overview';
import PostsOverviewPage from '../posts-overview';
import MuseumsOverviewPage from '../museums-overview';
import QuestionsOverviewPage from '../questions-overview';
import RoomsOverviewPage from '../rooms-overview';
import ColorsOverviewPage from '../colors-overview';

class AdminPage extends Component {
  render() {
    return (
      <div className="Admin">
        <Route path="/admin/blogs" component={ BlogsOverviewPage }></Route>
        <Route path="/admin/categories" component={ CategoriesOverviewPage }></Route>
        <Route path="/admin/posts" component={PostsOverviewPage}></Route>
        <Route path="/admin/museums" component={MuseumsOverviewPage}></Route>
        <Route path="/admin/questions" component={QuestionsOverviewPage}></Route>
        <Route path="/admin/rooms" component={RoomsOverviewPage}></Route>
        <Route path="/admin/colors" component={ColorsOverviewPage}></Route>
      </div>
    )
  }
}

export default (AdminPage);