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
import ColorForm from '../../components/color-form';

class ColorFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <ColorForm postId={id} />
              ) : (
              <ColorForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (ColorFormPage);