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
            values: { name, museums_id, room_number, },
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
                action = '/room'
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
                id="room_number"
                name="room_number"
                helperText={touched.room_number ? errors.room_number : ""}
                error={touched.room_number && Boolean(errors.room_number)}
                label="room_number"
                fullWidth
                multiline
                rows="10"
                value={room_number}
                onChange={this.change.bind(null, "room_number")}
        
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