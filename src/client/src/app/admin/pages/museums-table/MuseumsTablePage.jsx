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
import MuseumsTable from '../../components/museums-table';

class MuseumsTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <MuseumsTable />
          </Grid>
      </Grid>
    )
  }
}

export default (MuseumsTablePage);