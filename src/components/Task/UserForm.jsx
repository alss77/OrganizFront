import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types/prop-types';
import { addUserTeam } from '../../store/actions/socketActions';

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
  socket: state.socket.socket,
  taskList: state.socket.taskList,
});

function GroupForm(props) {
  const [modal, changeModalState] = useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { socket, taskList } = props;
  const [newuser, changeNewUser] = useState('');

  const handleChange = (event) => {
    changeNewUser(event.target);
  };

  const toggle = () => {
    changeModalState(!modal);
  };

  const handleSubmit = () => {
    props.addUserTeam(taskList.id_team, newuser, socket);
    toggle();
  };

  return (
    <div>
      <Button onClick={toggle}>
        Ajouter un utilisateur
      </Button>
      <Modal open={modal} onClose={() => changeModalState(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Ajouter un utilisateur </h2>
          <FormControl>
            <InputLabel htmlFor="component-simple">Id de utilisateur</InputLabel>
            <Input className="form-control" id="id" onChange={handleChange} type="text" name="id" required />
          </FormControl>
          <Button variant="contained" onClick={handleSubmit}>
            Ajouter
          </Button>
        </div>
      </Modal>
    </div>
  );
}

GroupForm.propTypes = {
  addUserTeam: PropTypes.func.isRequired,
  socket: PropTypes.oneOfType([PropTypes.object]),
  taskList: PropTypes.oneOfType([PropTypes.object]),
};

GroupForm.defaultProps = {
  socket: null,
  taskList: null,
};

export default connect(mapStateToProps, { addUserTeam })(GroupForm);
