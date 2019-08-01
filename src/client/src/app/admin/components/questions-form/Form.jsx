/*
Import external libraries
*/
import React, { Component } from "react";
import PropTypes from 'prop-types';

/*
Material UI
*/
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";

import RichEditor from "../rich-editor";

const styles = {
  selectCategories: {
      minWidth: 240
  }
};

class Form extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    }

    change = (name, e) => {
        e.persist();
        this.props.handleChange(e);
        this.props.setFieldTouched(name, true, false);
    };

    render() {
        const {
            values: { question, trueAnswer, falseAnswerOne, falseAnswerTwo, falseAnswerThree, room, museumsId, },
            errors,
            touched,
            handleChange,
            handleSubmit,
            isValid,
            setFieldTouched,
            museums, //museums
            classes
        } = this.props;

        return (
            <form
                action = '/questions'
              onSubmit={(e) => {
                this.props.handleSubmit(e);
              }}
              method="POST"
          >
              <TextField
                id="question"
                name="question"
                helperText={touched.question ? errors.question : ""}
                error={touched.question && Boolean(errors.question)}
                label="question"
                value={question}
                onChange={this.change.bind(null, "question")}
                fullWidth
        
              />
              <TextField
                id="trueAnswer"
                name="trueAnswer"
                helperText={touched.trueAnswer ? errors.trueAnswer : ""}
                error={touched.trueAnswer && Boolean(errors.trueAnswer)}
                label="trueAnswer"
                fullWidth
                multiline
                rows="4"
                value={trueAnswer}
                onChange={this.change.bind(null, "trueAnswer")}
        
              />
        
              <TextField
                id="falseAnswerOne"
                name="falseAnswerOne"
                helperText={touched.falseAnswerOne ? errors.falseAnswerOne : ""}
                error={touched.falseAnswerOne && Boolean(errors.falseAnswerOne)}
                label="falseAnswerOne"
                fullWidth
                multiline
                rows="10"
                value={falseAnswerOne}
                onChange={this.change.bind(null, "falseAnswerOne")}
        
                />
                
                <TextField
                id="falseAnswerTwo"
                name="falseAnswerTwo"
                helperText={touched.falseAnswerTwo ? errors.falseAnswerTwo : ""}
                error={touched.falseAnswerTwo && Boolean(errors.falseAnswerTwo)}
                label="falseAnswerTwo"
                fullWidth
                multiline
                rows="10"
                value={falseAnswerTwo}
                onChange={this.change.bind(null, "falseAnswerTwo")}
        
              />

                <TextField
                id="falseAnswerThree"
                name="falseAnswerThree"
                helperText={touched.falseAnswerThree ? errors.falseAnswerThree : ""}
                error={touched.falseAnswerThree && Boolean(errors.falseAnswerThree)}
                label="falseAnswerThree"
                fullWidth
                multiline
                rows="10"
                value={falseAnswerThree}
                onChange={this.change.bind(null, "falseAnswerThree")}
        
              />

                <TextField
                id="room"
                name="room"
                helperText={touched.room ? errors.room : ""}
                error={touched.room && Boolean(errors.room)}
                label="room"
                fullWidth
                multiline
                rows="10"
                value={room}
                onChange={this.change.bind(null, "room")}
        
              />
        
              <FormControl>
                <InputLabel htmlFor="categoryId">Museum</InputLabel>
                <Select
                  className={classes.selectCategories}
                  value={museumsId} // museumid
                  onChange={this.change.bind(null, "museums")} //museum?
                  inputProps={{
                    name: 'museumsId', //museumid
                    id: 'museumsId', //museumid
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {museums && museums.map((museum, index) => ( //museums && museum
                    <MenuItem key={museum.id} value={museum.id}>{museum.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
        
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!isValid}
              >
                Submit
              </Button>
          </form>
        );
    }
}

export default withStyles(styles)(Form);