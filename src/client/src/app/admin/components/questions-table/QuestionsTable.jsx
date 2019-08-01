/*
External libraries
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Enum from "es6-enum";

/*
Material UI
*/
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import IconCreate from '@material-ui/icons/Create';
import IconDelete from '@material-ui/icons/Delete';
import IconDeleteForever from '@material-ui/icons/DeleteForever';
import Paper from '@material-ui/core/Paper';

const POSTACTIONSENUM = Enum('DELETE', 'SOFTDELETE', 'SOFTUNDELETE');

/*
Styles
*/
const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
  },
});

class QuestionsTable extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    questions: null,
    questionId: null,
    postAction: null,
    dialogOpen: false,
    dialogTitle: '',
    dialogMessage: ''
  };

  

  handleDialogOpen = (questionId, postAction) => {
    let title = '';
    let message = '';

    switch(postAction) {
      case POSTACTIONSENUM.DELETE:
        title = 'Delete from the database?';
        message= `Do you wish permenantly delete the post with id ${questionId}?`;
        break;
      case POSTACTIONSENUM.SOFTDELETE:
        title = 'Soft-delete from the database?';
        message= `Do you wish to soft-delete the post with id ${questionId}?`;
        break;
      case POSTACTIONSENUM.SOFTUNDELETE:
        title = 'Soft-undelete from the database?';
        message= `Do you wish to soft-undelete the post with id ${questionId}?`;
        break;
    }

    this.setState({
      questionId: questionId,
      postAction: postAction,
      dialogOpen: true,
      dialogTitle: title,
      dialogMessage: message
    });
  };

  handleDialogClose = () => {
    this.setState({dialogOpen: false});
  };

  handleDialogSubmit = () => {
    let url = '';
    let options = {};

    switch(this.state.postAction) {
      case POSTACTIONSENUM.DELETE:
        url = `/api/v1/questions/${this.state.questionId}`;
        options = {
          method: 'DELETE'
        }
        break;
      case POSTACTIONSENUM.SOFTDELETE:
        url = `/api/v1/questions/${this.state.questionId}?mode=softdelete`;
        options = {
          method: 'DELETE'
        }
        break;
      case POSTACTIONSENUM.SOFTUNDELETE:
        url = `/api/v1/questions/${this.state.questionId}?mode=softundelete`;
        options = {
          method: 'DELETE'
        }
        break;
    }

    fetch(url, options)
      .then(res => res.json())
      .then(results => {
        if(results.mode && results.mode === 'delete') {
          this.loadQuestions();
        } else {
          const question = results.question;
          const i = this.state.questions.findIndex((obj, index, array) => {
            return obj._id === question._id;
          });
          const questions = this.state.question;
          questions[i] = question;
  
          this.setState(prevState => ({
            ...prevState,
            questions: questions
          }));
        }
        }
      );

    this.handleDialogClose();
  }

  componentWillMount() {
    this.loadQuestions();
  }

  loadQuestions = () => {
    fetch('/api/v1/questions')
      .then( response => response.json())
      .then( item => this.setState({ questions: item })); 
  }

  render() {
    const { classes } = this.props;
    const { questions } = this.state;

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell>Answer</TableCell>
                <TableCell>Wrong 1</TableCell>
                <TableCell>Wrong 2</TableCell>
                <TableCell>Wrong 3</TableCell>
                <TableCell>Room</TableCell>
                <TableCell>Museum</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {questions && questions.map( (question, index) => (
                <TableRow key={question.id}>
                  <TableCell>{question.question}</TableCell>
                  <TableCell>{question.trueAnswer}</TableCell>
                  <TableCell>{question.falseAnswerOne}</TableCell>
                  <TableCell>{question.falseAnswerTwo}</TableCell>
                  <TableCell>{question.falseAnswerThree}</TableCell>
                  <TableCell>{question.room}</TableCell>
                  <TableCell>{question.museums && question.museums.name}</TableCell>
                  <TableCell>{question.created_at}</TableCell>
                  <TableCell>
                    <IconButton
                      component={Link} to={ `/admin/questions/${question.id}/edit`}>
                      <IconCreate />
                    </IconButton>
                    <IconButton
                      onClick={() => this.handleDialogOpen(question.id, (question.deleted_at)?POSTACTIONSENUM.SOFTUNDELETE:POSTACTIONSENUM.SOFTDELETE)} style={{ opacity: ((question.deleted_at)?0.3:1) }}>
                      <IconDelete/>
                    </IconButton>
                    <IconButton
                      onClick={() => this.handleDialogOpen(question.id, POSTACTIONSENUM.DELETE)}>
                      <IconDeleteForever />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Dialog
          fullScreen={false}
          open={this.state.dialogOpen}
          onClose={this.handleDialogClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{this.state.dialogTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.state.dialogMessage}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleDialogClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.handleDialogSubmit()} color="primary" autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    );  
  }
}

export default withStyles(styles)(QuestionsTable);
