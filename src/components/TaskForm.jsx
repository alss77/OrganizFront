import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TaskForm() {
  const [modal, changeModalState] = useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [task, setTask] = useState({ taskName: '', taskDesc: '', taskAuthor: '' });

  const handleChange = (event) => {
    const {
      name, value,
    } = event.target;
    setTask({
      ...task, [name]: value,
    });
  };

  const toggle = () => {
    changeModalState(!modal);
  };

  const handleSubmit = () => {
    toggle();
  };

  return (
    <div>
      <Button onClick={toggle}>
        Ajouter une task
      </Button>
      <Modal open={modal} onClose={() => changeModalState(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Ajout de task </h2>
          <FormControl>
            <InputLabel htmlFor="component-simple">Nom</InputLabel>
            <Input className="form-control" name="taskName" id="taskName" onChange={handleChange} type="text" required />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-simple">Description</InputLabel>
            <Input className="form-control" name="taskDesc" id="taskDesc" onChange={handleChange} type="text" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-simple">Auteur</InputLabel>
            <Input className="form-control" name="taskAuthor" id="taskAuthor" onChange={handleChange} type="text" required />
          </FormControl>
          <Button variant="contained" onClick={handleSubmit}>
            Create
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default TaskForm;
