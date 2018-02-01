import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';
import { ToastContainer, toast } from 'react-toastify';
import { inject, observer } from 'mobx-react';

import store from '../store/store'

const styles = theme => ({
    container: {       
        paddingLeft: 0, 
        paddingRight: 0  
    },
    formControl: {
      margin: theme.spacing.unit,
      
    },
    formContainer: {
        display: 'flex',     
        flexDirection: 'column', 
        marginBottom: 15
    },
    root: {

      },
      paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  });

class AddStore extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            name: "",                       
        }
        
    } 
    
    notify = {
        success(msg) {
            toast.success(msg, {
                position: toast.POSITION.TOP_RIGHT
            })
        },

        error(msg) {
            toast.error(msg, {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    }

    addStore = (e) => {
        e.preventDefault();
        let name = document.getElementById("store-name").value;
        let address = document.getElementById("store-address").value;
        let topic = document.getElementById("topic").value;

        let data = {
            name,
            address,
            topic
        };

        if(name === "" || address === "" || topic === "") {
            this.notify.error('Name, Address and Topic cannot be empty');
            
        } else {

            this.props.store.addStore(name, address, topic, (msg) => {
                document.getElementById("store-name").value = "";
                document.getElementById("store-address").value = "";
                document.getElementById("topic").value = "";
                this.notify.success(msg); 
                this.props.store.fetchAll((msg) => {
                    return null
                })
                this.props.close();
            })            
        }       
    }
  

    render() {
        const { classes } = this.props;
        
        return(
            <div className={classes.root}>    
                    <div className={classes.container}>
                        <div className={classes.formContainer}>                
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="store-name">Name</InputLabel>
                                <Input id="store-name"/>                                   
                            </FormControl>
                            <FormControl className={classes.formControl}>         
                                <InputLabel htmlFor="store-address">Address</InputLabel>
                                <Input id="store-address"/>                    
                            </FormControl> 
                            <FormControl className={classes.formControl}>         
                                <InputLabel htmlFor="topic">Topic</InputLabel>
                                <Input id="topic"/>                    
                            </FormControl> 
                        </div>

                        <Button raised color="primary" className={classes.formControl} onClick={this.addStore}>
                            ADD STORE
                        </Button>                                 
                    </div>   
            <ToastContainer />            
          </div>

           
        )
    }
}

AddStore.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  AddStore = inject('store')(observer(AddStore))
  
  export default withStyles(styles)(AddStore);