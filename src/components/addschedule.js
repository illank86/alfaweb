import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { ToastContainer, toast } from 'react-toastify';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TimeInput from 'material-ui-time-picker';
import moment from 'moment';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { inject, observer } from 'mobx-react';


import store from '../store/store';
import ScheduleList from './schedulelist';



const styles = theme => ({
  container: {
    flex: 1,
    margin: 20,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 100,
  },
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  paper: {
    padding: 16,
    color: theme.palette.text.secondary,
  },
  header: {   
    margin: 10,
    paddingRight: 30,
  },
  icon: {
    color: '#000',
    backgroundColor: 'transparent'
  },
  cells: {
      width: 90
  },
  time: {
    position: 'relative'
  }
});

class AddSchedule extends Component {
    constructor(props) {
        super(props);

        this.state = {             
            senin_on: new Date(),
            senin_off: new Date(),
            selasa_on: new Date(),
            selasa_off: new Date(),
            rabu_on: new Date(),
            rabu_off: new Date(),
            kamis_on: new Date(),
            kamis_off: new Date(),
            jumat_on: new Date(),
            jumat_off: new Date(),
            sabtu_on: new Date(),
            sabtu_off: new Date(),
            minggu_on: new Date(),
            minggu_off: new Date(),
        }
    }


    componentDidMount() {
        const id = this.props.match.params._id;
        console.log(this.props.match.params._name)
        console.log(this.props.match.params._topic)
        this.props.store.getOneSchedule(id, (msg) => {
            return null
        })
    }

    handleSeninOn = (senin_on) => {
        this.setState({senin_on})
    }

    handleSeninOff = (senin_off) => {
        this.setState({senin_off})
    }

    handleSelasaOn = (selasa_on) => {
        this.setState({selasa_on})
    }

    handleSelasaOff = (selasa_off) => {
        this.setState({selasa_off})
    }
    handleRabuOn = (rabu_on) => {
        this.setState({rabu_on})
    }

    handleRabuOff = (rabu_off) => {
        this.setState({rabu_off})
    }
    handleKamisOn = (kamis_on) => {
        this.setState({kamis_on})
    }

    handleKamisOff = (kamis_off) => {
        this.setState({kamis_off})
    }
    handleJumatOn = (jumat_on) => {
        this.setState({jumat_on})
    }

    handleJumatOff = (jumat_off) => {
        this.setState({jumat_off})
    }
    handleSabtuOn = (sabtu_on) => {
        this.setState({sabtu_on})
    }

    handleSabtuOff = (sabtu_off) => {
        this.setState({sabtu_off})
    }

    handleMingguOn = (minggu_on) => {
        this.setState({minggu_on})
    }

    handleMingguOff = (minggu_off) => {
        this.setState({minggu_off})
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

    updateSchedule = (e) => {
        e.preventDefault();
        let senin_on = moment(this.state.senin_on, 'hhmm').format('HH:mm');
        let senin_off = moment(this.state.senin_off, 'hhmm').format('HH:mm');
        let selasa_on = moment(this.state.selasa_on, 'hhmm').format('HH:mm');
        let selasa_off =moment(this.state.selasa_off, 'hhmm').format('HH:mm');
        let rabu_on =moment(this.state.rabu_on, 'hhmm').format('HH:mm');
        let rabu_off =moment(this.state.rabu_off, 'hhmm').format('HH:mm');
        let kamis_on =moment(this.state.kamis_on, 'hhmm').format('HH:mm');
        let kamis_off =moment(this.state.kamis_off, 'hhmm').format('HH:mm');
        let jumat_on =moment(this.state.jumat_on, 'hhmm').format('HH:mm');
        let jumat_off =moment(this.state.jumat_off, 'hhmm').format('HH:mm');
        let sabtu_on =moment(this.state.sabtu_on, 'hhmm').format('HH:mm');
        let sabtu_off =moment(this.state.sabtu_off, 'hhmm').format('HH:mm');
        let minggu_on =moment(this.state.minggu_on, 'hhmm').format('HH:mm');
        let minggu_off =moment(this.state.minggu_off, 'hhmm').format('HH:mm');
        
       

        let senin = {
            day: "Senin",
            time_on : senin_on,
            time_off : senin_off,
        }
        let selasa = {
            day: "Selasa",
            time_on : selasa_on,
            time_off : selasa_off,
        }
        let rabu = {
            day: "Rabu",
            time_on : rabu_on,
            time_off : rabu_off,
        }
        let kamis = {
            day: "Kamis",
            time_on : kamis_on,
            time_off : kamis_off,
        }
        let jumat = {
            day: "Jumat",
            time_on : jumat_on,
            time_off : jumat_off,
        }
        let sabtu = {
            day: "Sabtu",
            time_on : sabtu_on,
           time_off : sabtu_off,
        }
        let minggu = {
            day: "Minggu",
            time_on : minggu_on,
            time_off : minggu_off,
        }  
        let id_store = this.props.match.params._id;
        let topic = this.props.match.params._topic;
        let data = {
            senin,
            selasa,
            rabu,
            kamis,
            jumat,
            sabtu,
            minggu,
            id_store,
            topic
        }
        
        this.props.store.updateSchedule((msg) => {
            alert(msg)
        },id_store, {...data});
        
    }

    saveSchedule = (e) => {
        e.preventDefault();
        let senin_on = moment(this.state.senin_on, 'hhmm').format('HH:mm');
        let senin_off = moment(this.state.senin_off, 'hhmm').format('HH:mm');
        let selasa_on = moment(this.state.selasa_on, 'hhmm').format('HH:mm');
        let selasa_off =moment(this.state.selasa_off, 'hhmm').format('HH:mm');
        let rabu_on =moment(this.state.rabu_on, 'hhmm').format('HH:mm');
        let rabu_off =moment(this.state.rabu_off, 'hhmm').format('HH:mm');
        let kamis_on =moment(this.state.kamis_on, 'hhmm').format('HH:mm');
        let kamis_off =moment(this.state.kamis_off, 'hhmm').format('HH:mm');
        let jumat_on =moment(this.state.jumat_on, 'hhmm').format('HH:mm');
        let jumat_off =moment(this.state.jumat_off, 'hhmm').format('HH:mm');
        let sabtu_on =moment(this.state.sabtu_on, 'hhmm').format('HH:mm');
        let sabtu_off =moment(this.state.sabtu_off, 'hhmm').format('HH:mm');
        let minggu_on =moment(this.state.minggu_on, 'hhmm').format('HH:mm');
        let minggu_off =moment(this.state.minggu_off, 'hhmm').format('HH:mm');
        

        let senin = {
            day: "Senin",
            time_on : senin_on,
            time_off : senin_off,
        }
        let selasa = {
            day: "Selasa",
            time_on : selasa_on,
            time_off : selasa_off,
        }
        let rabu = {
            day: "Rabu",
            time_on : rabu_on,
            time_off : rabu_off,
        }
        let kamis = {
            day: "Kamis",
            time_on : kamis_on,
            time_off : kamis_off,
        }
        let jumat = {
            day: "Jumat",
            time_on : jumat_on,
            time_off : jumat_off,
        }
        let sabtu = {
            day: "Sabtu",
            time_on : sabtu_on,
            time_off : sabtu_off,
        }
        let minggu = {
            day: "Minggu",
            time_on : minggu_on,
            time_off : minggu_off,
        }  
        let id_store = this.props.match.params._id;
        let topic = this.props.match.params._topic;
        let data = {
            senin,
            selasa,
            rabu,
            kamis,
            jumat,
            sabtu,
            minggu,
            id_store,
            topic
        }
        
        this.props.store.saveSchedule((msg) => {
            console.log(msg)
        }, {...data});
    }

    render() {
        const { classes } = this.props; 
        return(
            <div className={classes.root}>
            <ToastContainer />
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>

                    <Grid
                        container                        
                        direction={'row'}
                        justify={'space-between'}
                        className={classes.header}
                    >
                        <Typography type="headline" align="justify">
                            {this.props.match.params._name} Store
                        </Typography>
                        {this.props.store.schedules.length === 0 ?  <Button raised color="primary" onClick={this.saveSchedule.bind(this)}>ADD SCHEDULE</Button> : <Button raised color="primary" onClick={this.updateSchedule.bind(this)}>UPDATE SCHEDULE</Button> }
                    </Grid>
                    <hr /> 
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Days</TableCell>
                                <TableCell>Time ON</TableCell>
                                <TableCell>Time OFF</TableCell>
                            </TableRow>
                        </TableHead>
                    <TableBody>            
                        <TableRow>
                            <TableCell>Senin</TableCell>
                            <TableCell className={classes.cells}>                   
                                <TimeInput                                    
                                    mode='24h'                                                                                                        
                                    onChange={(time) => this.handleSeninOn(time)}
                                />
                            </TableCell>
                            <TableCell>
                                <TimeInput
                                    mode='24h'
                                    value = {this.state.senin_off}
                                    onChange={(time) => this.handleSeninOff(time)}
                                />
                            </TableCell>                            
                        </TableRow>
                        <TableRow>
                            <TableCell>Selasa</TableCell>
                            <TableCell className={classes.cells}>                   
                                <TimeInput
                                    mode='24h'
                                    onChange={(time) => this.handleSelasaOn(time)}
                                />
                            </TableCell>
                            <TableCell  className={classes.cells}>
                                <TimeInput                                   
                                    mode='24h'
                                    onChange={(time) => this.handleSelasaOff(time)}
                                />
                            </TableCell>                            
                        </TableRow>
                        <TableRow>
                            <TableCell>Rabu</TableCell>
                            <TableCell className={classes.cells}>                   
                                <TimeInput
                                    mode='24h'
                                    onChange={(time) => this.handleRabuOn(time)}
                                />
                            </TableCell>
                            <TableCell  className={classes.cells}>
                                <TimeInput
                                    mode='24h'
                                    onChange={(time) => this.handleRabuOff(time)}
                                />
                            </TableCell>                            
                        </TableRow>
                        <TableRow>
                            <TableCell>Kamis</TableCell>
                            <TableCell className={classes.cells}>                   
                                <TimeInput
                                    mode='24h'
                                    onChange={(time) => this.handleKamisOn(time)}
                                />
                            </TableCell>
                            <TableCell  className={classes.cells}>
                                <TimeInput
                                    mode='24h'
                                    onChange={(time) => this.handleKamisOff(time)}
                                />
                            </TableCell>                            
                        </TableRow>
                        <TableRow>
                            <TableCell>Jumat</TableCell>
                            <TableCell className={classes.cells}>                   
                                <TimeInput
                                    mode='24h'
                                    onChange={(time) => this.handleJumatOn(time)}
                                />
                            </TableCell>
                            <TableCell  className={classes.cells}>
                                <TimeInput
                                    mode='24h'
                                    onChange={(time) => this.handleJumatOff(time)}
                                />
                            </TableCell>                            
                        </TableRow>
                        <TableRow>
                            <TableCell>Sabtu</TableCell>
                            <TableCell className={classes.cells}>                   
                                <TimeInput
                                    mode='24h'
                                    onChange={(time) => this.handleSabtuOn(time)}
                                />
                            </TableCell>
                            <TableCell  className={classes.cells}>
                                <TimeInput
                                    mode='24h'
                                    onChange={(time) => this.handleSabtuOff(time)}
                                />
                            </TableCell>                            
                        </TableRow>
                        <TableRow>
                            <TableCell>Minggu</TableCell>
                            <TableCell className={classes.cells}>                   
                                <TimeInput
                                    mode='24h'
                                    onChange={(time) => this.handleMingguOn(time)}
                                />
                            </TableCell>
                            <TableCell  className={classes.cells}>
                                <TimeInput
                                    mode='24h'
                                    onChange={(time) => this.handleMingguOff(time)}
                                />
                            </TableCell>                            
                        </TableRow>
                    </TableBody>
                    </Table>
                </Paper>
                </Grid>
                <ScheduleList id={this.props.match.params._id} schedule={this.props.store.schedules} />
            </Grid>
            
            </div>
        )
    }
}

AddSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

AddSchedule = inject('store')(observer(AddSchedule));

export default withStyles(styles)(AddSchedule);