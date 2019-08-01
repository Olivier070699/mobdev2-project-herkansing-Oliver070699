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
import QuestionForm from '../../components/questions-form';

class QuestionFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <QuestionForm postId={id} />
              ) : (
              <QuestionForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (QuestionFormPage);