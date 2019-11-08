import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types/prop-types';
import { createGroup } from '../../store/actions/socketActions';

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
  user: state.auth.user,
});

function GroupForm(props) {
  const [modal, changeModalState] = useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { socket, user } = props;
  const [group, changeGroup] = useState({ name: '', users: [{/* id: user.id */ }] });

  const handleChange = (event) => {
    const {
      name, value,
    } = event.target;
    changeGroup({
      ...group, [name]: value,
    });
  };

  const toggle = () => {
    changeModalState(!modal);
  };

  const handleSubmit = () => {
    props.createGroup(group, socket);
    toggle();
  };

  return (
    <div>
      <Button onClick={toggle}>
        Creer un groupe
      </Button>
      <Modal open={modal} onClose={() => changeModalState(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Création de groupe </h2>
          <FormControl>
            <InputLabel htmlFor="component-simple">Nom du groupe</InputLabel>
            <Input className="form-control" id="name" onChange={handleChange} type="text" name="name" required />
          </FormControl>
          <Button variant="contained" onClick={handleSubmit}>
            Create
          </Button>
        </div>
      </Modal>
    </div>
  );
}

GroupForm.propTypes = {
  createGroup: PropTypes.func.isRequired,
  socket: PropTypes.oneOfType([PropTypes.object]),
  user: PropTypes.oneOfType([PropTypes.object]),
};

GroupForm.defaultProps = {
  socket: null,
  user: null,
};

export default connect(mapStateToProps, { createGroup })(GroupForm);
