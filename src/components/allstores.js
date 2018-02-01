import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { inject, observer } from 'mobx-react';


import { store } from '../store/store';
import Modal from './dialog';

const styles = theme => ({
    card: {
        maxWidth: 250, 
        margin: 10       
    },
    container: {
        margin: 20
    },
  });

class AllStores extends Component {
    constructor(props) {
        super(props);
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

    componentDidMount() {
        this.props.store.fetchAll((msg)=>{
           console.log(msg)
        })
    }

    deleteStore = (item) => {
        this.props.store.deleteOneStore(item, (msg) => {
            this.notify.success(msg)
        });
    }

    render() {

        const { classes } = this.props;
        return(
        <div>       
        <Modal />
        <Grid container className={classes.container} spacing={0}>
            <Grid item xs={12}>
                <Grid container direction={'row'}>
                    {this.props.store.listStore.map((data, i) => (
                        <Card className={classes.card} key={i}>                
                            <CardContent>
                                <Typography type="headline" component="h2">
                                    {data.name}
                                </Typography>
                                <Typography component="p">
                                    {data.address}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button dense color="primary">
                                    <Link to={`/add-schedule/${data.id_store}/${data.name}/${data.topic}`} style={{ textDecoration: 'none' }}>Schedule</Link>
                                </Button>
                                <Button dense color="accent" onClick={this.deleteStore.bind(this, data.id_store)}>
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Grid>
            </Grid>         
        </Grid>
        <ToastContainer />  
       </div>
        )
    }
}

AllStores.propTypes = {
    classes: PropTypes.object.isRequired,
  };

AllStores = inject('store')(observer(AllStores));
export default withStyles(styles)(AllStores);