import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { ToastContainer, toast } from 'react-toastify';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Alarm from 'material-ui-icons/AlarmAdd';
import moment from 'moment';

const styles = theme => ({
    container: {
      flex: 1,
      flexDirection: 'row-reverse',
      margin: 20,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 150,
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
      paddingRight: 30
    },
    icon: {
      color: '#000',
      backgroundColor: 'transparent'
    },
    word: {
        flexGrow: 1
    },
    word2: {
        justify: 'center'
    }
  });


class ScheduleList extends Component {

  
    render() {
        const { classes } = this.props; 
             
        return(
            <Grid item xs={12} sm={6}>
            {this.props.schedule.length === 0 ? <Grid item xs={12} sm={6} className={classes.word}><Typography type="headline" className={classes.word2}>Please add a schedule</Typography></Grid> : 
            <Paper className={classes.paper}>  
                <div className={classes.header}>
                    <Typography type="headline"  align="justify">Schedule</Typography>
                </div> 
                <hr />                           
                <List>                   
                    {this.props.schedule.map((data, i) => {
                        return (
                            
                                <ListItem key = {i}>
                                <Avatar className={classes.icon}>
                                    <Alarm />
                                </Avatar>
                                <ListItemText primary={`${data.day}`} secondary={`Time ON = ${moment(data.time_on, "hhmm").format("HH:mm")} - Time OFF = ${moment(data.time_off, "hhmm").format("HH:mm")} `} />
                                </ListItem>
                        )
                    })}
                </List>
            </Paper>
            }
           </Grid>
        )
    }
}

ScheduleList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ScheduleList);