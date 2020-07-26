import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '10rem',
      display: 'flex',
      flexDirection: 'row',
    },
  },
}));

const EditForm = ({
 handleClose,
 editEvent,
 title,
 event,
}) => {
  const classes = useStyles();
  const actualDate = new Date().getMonth();
  const [date, setDate] = useState(`${title}.${actualDate + 1}`);
  const [form, setForm] = useState({title: event, date});

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
    handleClose();
    editEvent(form);
  }
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
       id="name"
       label="Event"
       color="secondary"
       name ="title"
       value = {form.title}
       onChange = {changeHandler}
       />

       <Button variant='contained' onClick={handleSubmit}>save</Button>
    </form>
  );
}

export default EditForm;