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
            values: { parentMuseumId, room, question, answer, imageUrl, },
            errors,
            touched,
            handleChange,
            handleSubmit,
            isValid,
            setFieldTouched,
            categories,
            classes
        } = this.props;

        return (
            <form
                action = '/question'
              onSubmit={(e) => {
                this.props.handleSubmit(e);
              }}
              method="POST"
          >
              <TextField
                id="parentMuseumId"
                name="parentMuseumId"
                helperText={touched.parentMuseumId ? errors.parentMuseumId : ""}
                error={touched.parentMuseumId && Boolean(errors.parentMuseumId)}
                label="museums"
                fullWidth
                multiline
                rows="4"
                value={parentMuseumId}
                onChange={this.change.bind(null, "parentMuseumId")}
        
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
                
                <TextField
                id="question"
                name="question"
                helperText={touched.question ? errors.question : ""}
                error={touched.question && Boolean(errors.question)}
                label="question"
                fullWidth
                multiline
                rows="10"
                value={question}
                onChange={this.change.bind(null, "question")}
        
                />
                
                <TextField
                id="answer"
                name="answer"
                helperText={touched.question ? errors.question : ""}
                error={touched.question && Boolean(errors.question)}
                label="answer"
                fullWidth
                multiline
                rows="10"
                value={answer}
                onChange={this.change.bind(null, "answer")}
        
                />
                
                <TextField
                id="imageUrl"
                name="imageUrl"
                helperText={touched.imageUrl ? errors.imageUrl : ""}
                error={touched.imageUrl && Boolean(errors.imageUrl)}
                label="imageUrl"
                fullWidth
                multiline
                rows="10"
                value={imageUrl}
                onChange={this.change.bind(null, "imageUrl")}
        
              />
        
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