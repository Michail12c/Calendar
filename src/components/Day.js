import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CreateEvent from './CreateEvent';
import EditModal from './menu/EditModal';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    position: "relative",
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(14),
      height: theme.spacing(14),
      cursor: 'pointer',
    },
  },
  modal: {
    position: 'absolute',
    bottom: '15px',
    right: '20px',
    fontSize: '.5rem',

  },
  event: {
    textAlign: 'center',
    marginTop: '10px'
  },
  wrapperIcon: {
    display: 'flex',
  }
}));

const Day = props => {
  const {
    title,
    createEvent,
    deleteEvent,
    editEvent,
    event,
  } = props;
  const classes = useStyles();

  const dateDay = new Date().getMonth() + 1;
  const deleteElem = () => {
    deleteEvent({title: event, date: `${title}.${dateDay}`});
  }

  return (
    <div className="inner-day">
     <div className={classes.root}>
      <Paper elevation={0}>
        <div>
          {title && title}
        </div>
         { event && <div className={classes.event}>
           { event }
         </div> }
        <div className={classes.modal} title={event ? 'edit event' : ''}>
          {title && !event && <CreateEvent
                                createEvent={createEvent}
                                title={title}/>}

          {event && <div className={classes.wrapperIcon}>
                      <div className={classes.deleteIcon} title="delete event">
                        <DeleteIcon color='secondary' onClick={deleteElem}/>
                      </div>
                      <div>
                        <EditModal
                        title={title}
                        event={event}
                        editEvent={editEvent}/>
                      </div>
                     </div>}
         </div>
      </Paper>
     </div>
    </div>

  )
}

export default Day;