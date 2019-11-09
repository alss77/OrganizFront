import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types/prop-types';
import { addTaskTeam, createTask } from '../../store/actions/socketActions';

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

const mapStateToProps = (state) => ({
  taskList: state.socket.taskList,
  user: state.auth.user,
  socket: state.socket.socket,
});

function TaskForm(props) {
  const { user, taskList, socket } = props;
  const [modal, changeModalState] = useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [tcardName, changeName] = useState('');
  const [tcontent, changeContent] = useState('');

  const toggle = () => {
    changeModalState(!modal);
  };

  const handleSubmit = () => {
    const body = {
      content: tcontent, cardName: tcardName, team: taskList, users: [{ id: user.id }],
    };
    console.log('body: ', body);
    if (Object.keys(taskList).includes('task')) {
      props.addTaskTeam(body, socket);
    } else {
      props.createTask(body, socket);
    }
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
          <div>
            <FormControl>
              <InputLabel htmlFor="component-simple">Nom</InputLabel>
              <Input className="form-control" name="cardName" id="cardName" onChange={(e) => changeName(e.target.value)} type="text" required />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="component-simple">Description</InputLabel>
              <Input className="form-control" name="content" id="content" onChange={(e) => changeContent(e.target.value)} type="text" />
            </FormControl>
          </div>
          <div>
            <Button variant="contained" onClick={handleSubmit}>
              Create
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

TaskForm.propTypes = {
  addTaskTeam: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  taskList: PropTypes.oneOfType([PropTypes.object]),
  user: PropTypes.oneOfType([PropTypes.object]),
  socket: PropTypes.oneOfType([PropTypes.object]),
};

TaskForm.defaultProps = {
  taskList: null,
  user: null,
  socket: null,
};

export default connect(mapStateToProps, { addTaskTeam, createTask })(TaskForm);
