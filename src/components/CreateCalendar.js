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

const CreateCalendar = ({
  setCreate,
  createCalendar,
}) => {
  const classes = useStyles();
  const [form, setForm] = useState({title: '', description: ''});

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
   setCreate(false);
   createCalendar(form);
  }
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
       id="name"
       label="Calendar name"
       color="secondary"
       name ="title"
       value = {form.title}
       onChange = {changeHandler}
       />

       <TextField
       id="description"
       label="Description"
       color="secondary"
       name ="description"
       value = {form.description}
       onChange = {changeHandler}
       />
       <Button variant='contained' onClick={handleSubmit}>send</Button>
    </form>
  );
}

export default CreateCalendar;
