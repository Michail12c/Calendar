import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CreateCalendar from './CreateCalendar';
import { Redirect } from 'react-router-dom';
import CreateEvent from './CreateEvent';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: '10rem',
      padding: '10px 15px',
      fontWeight: 'bold'
    },
  },
}));

const HomePage = ({
 createCalendar,
 calendar
}) => {

  const classes = useStyles();
  const [create, setCreate] = useState(false);

  return (
    <div className='homePage'>
      { !calendar.length && !create && <div className={classes.root}>
          <Button variant="contained" onClick={() => setCreate(true)}>
            Create calendar
          </Button>
        </div> }

      { create && <CreateCalendar
                    setCreate={setCreate}
                    createCalendar={createCalendar}/> }

      { calendar.length > 0 && <Redirect to='/month'/> }

    </div>
  )
}

export default HomePage;