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
import QuestionsTable from '../../components/questions-table';

class QuestionsTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <QuestionsTable />
          </Grid>
      </Grid>
    )
  }
}

export default (QuestionsTablePage);