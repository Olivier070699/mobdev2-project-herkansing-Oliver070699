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
            values: { name, museums_id, rooms_id, question, imageUrl, },
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
                id="name"
                name="name"
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                label="name"
                value={name}
                onChange={this.change.bind(null, "name")}
                fullWidth
        
              />
              <TextField
                id="museums_id"
                name="museums_id"
                helperText={touched.museums_id ? errors.museums_id : ""}
                error={touched.museums_id && Boolean(errors.museums_id)}
                label="museums_id"
                fullWidth
                multiline
                rows="4"
                value={museums_id}
                onChange={this.change.bind(null, "museums_id")}
        
              />
        
              <TextField
                id="rooms_id"
                name="rooms_id"
                helperText={touched.rooms_id ? errors.rooms_id : ""}
                error={touched.rooms_id && Boolean(errors.rooms_id)}
                label="rooms_id"
                fullWidth
                multiline
                rows="10"
                value={rooms_id}
                onChange={this.change.bind(null, "rooms_id")}
        
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