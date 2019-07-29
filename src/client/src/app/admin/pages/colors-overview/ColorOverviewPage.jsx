/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

/*
Layout
*/
import { ContentLayout } from '../../layouts';

/*
Pages
*/
import ColorsTablePage from '../colors-table';
import ColorFormPage from '../color-form';

const tabs = [
  { id: 'List', link: '/admin/colors' },
  { id: 'Create new color', link: '/admin/colors/create' },
];

class ColorsOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Colors Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/colors" component={ ColorsTablePage }></Route>
        <Route path="/admin/colors/create" component={ ColorFormPage }></Route>
        <Route path="/admin/colors/:id/edit" component={ ColorFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (ColorsOverviewPage);