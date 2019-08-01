/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Material UI
*/
import Grid from '@material-ui/core/Grid';

/*
Components
*/
import RoomForm from '../../components/rooms-form';

class RoomFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <RoomForm postId={id} />
              ) : (
              <RoomForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (RoomFormPage);