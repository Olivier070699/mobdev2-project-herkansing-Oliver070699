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
import RoomsTablePage from '../rooms-table';
import RoomsFormPage from '../room-form';

const tabs = [
  { id: 'List', link: '/admin/rooms' },
  { id: 'Create new room', link: '/admin/rooms/create' },
];

class RoomsOverviewPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContentLayout title="Rooms Overview" tabs={tabs}>
        { children }
        <Route exact path="/admin/rooms" component={ RoomsTablePage }></Route>
        <Route path="/admin/rooms/create" component={ RoomsFormPage }></Route>
        <Route path="/admin/rooms/:id/edit" component={ RoomsFormPage }></Route>
      </ContentLayout>
    )
  }
}

export default (RoomsOverviewPage);