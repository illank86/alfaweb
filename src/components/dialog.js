import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog, {
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import AddIcon from 'material-ui-icons/Add';
import Slide from 'material-ui/transitions/Slide';

import AddStore from './addstore';

const styles = theme => ({
    container: {
        margin: 20
    },
    button: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    }
  });

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
  

class Modal extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {

    const { classes } = this.props;
    return (
      <div>
        <Button fab onClick={this.handleClickOpen} color="primary" aria-label="add" className={classes.button}>
            <AddIcon />
        </Button>        
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}  transition={Transition}>
          <DialogTitle>Add Store</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You need to add store first, then you can add a schedule
            </DialogContentText>
                <AddStore close={this.handleRequestClose} />
            </DialogContent>
        </Dialog>
      </div>
    );
  }
}

Modal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Modal);