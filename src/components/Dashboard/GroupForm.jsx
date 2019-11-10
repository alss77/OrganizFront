import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types/prop-types';
import { createGroup, loadgroup } from '../../store/actions/socketActions';

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
  token: state.auth.token,
  isLoaded: state.socket.isLoaded,
});

function GroupForm(props) {
  const [modal, changeModalState] = useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const {
    socket, user, token, isLoaded,
  } = props;
  const [groupname, changeGroup] = useState('');

  const closem = async () => {
    let loading = 0;
    if (modal === true) {
      await props.loadgroup(token);
      loading = 1;
    }
    console.log('loading: ', { test: loading, load: isLoaded })
    if (loading === 1 && isLoaded) {
      changeModalState(false);
    }
  };

  const openm = () => changeModalState(true);

  const handleSubmit = () => {
    const body = { name: groupname, users: [{ id: user.id }] };
    props.createGroup(body, socket);
    closem();
  };

  return (
    <div>
      <Button onClick={openm}>
        Creer un groupe
      </Button>
      <Modal open={modal} onClose={() => changeModalState(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Création de groupe </h2>
          <FormControl>
            <InputLabel htmlFor="component-simple">Nom du groupe</InputLabel>
            <Input className="form-control" id="name" onChange={(e) => changeGroup(e.target.value)} type="text" name="name" required />
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
  loadgroup: PropTypes.func.isRequired,
  socket: PropTypes.oneOfType([PropTypes.object]),
  user: PropTypes.oneOfType([PropTypes.object]),
  token: PropTypes.string,
  isLoaded: PropTypes.bool,
};

GroupForm.defaultProps = {
  socket: null,
  user: null,
  token: '',
  isLoaded: false,
};

export default connect(mapStateToProps, { createGroup, loadgroup })(GroupForm);
