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
import ColorsTable from '../../components/colors-table';

class ColorsTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <ColorsTable />
          </Grid>
      </Grid>
    )
  }
}

export default (ColorsTablePage);