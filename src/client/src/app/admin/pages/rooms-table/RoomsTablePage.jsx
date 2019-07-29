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
import RoomsTable from '../../components/rooms-table';

class RoomsTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <RoomsTable />
          </Grid>
      </Grid>
    )
  }
}

export default (RoomsTablePage);