import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types/prop-types';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import { createGroup, loadgroup } from '../../store/actions/socketActions';
import fr from '../../lang/fr';
import en from '../../lang/en';

counterpart.registerTranslations('fr', fr);
counterpart.registerTranslations('en', en);

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
  isLoading: state.socket.isLoading,
});

function GroupForm(props) {
  const [modal, changeModalState] = useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const {
    socket, user, token, isLoading,
  } = props;
  const [groupname, changeGroup] = useState('');
  const [clicked, changeClicked] = useState(false);

  useEffect(() => {
    if (!isLoading && clicked) {
      changeModalState(false);
    }
  }, [props, isLoading, clicked, token]);

  const openm = () => changeModalState(true);

  const handleSubmit = async () => {
    const body = { name: groupname, users: [{ id: user.id }] };
    await props.createGroup(body, socket);
    changeClicked(true);
  };

  return (
    <div>
      <Button onClick={openm}>
        <Translate content="groupForm.button" />
      </Button>
      <Modal open={modal} onClose={() => changeModalState(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">
            <Translate content="groupForm.title" />
          </h2>
          <FormControl>
            <InputLabel htmlFor="component-simple">
              <Translate content="groupForm.name" />
            </InputLabel>
            <Input className="form-control" id="name" onChange={(e) => changeGroup(e.target.value)} type="text" name="name" required />
          </FormControl>
          <Button variant="contained" onClick={handleSubmit} disabled={isLoading}>
            {
              (isLoading) ? (
                <CircularProgress />
              ) : (
                  <Translate content="groupForm.submit" />
                )
            }
          </Button>
        </div>
      </Modal>
    </div>
  );
}

GroupForm.propTypes = {
  // loadgroup: PropTypes.func.isRequired,
  createGroup: PropTypes.func.isRequired,
  socket: PropTypes.oneOfType([PropTypes.object]),
  user: PropTypes.oneOfType([PropTypes.object]),
  isLoading: PropTypes.bool,
  token: PropTypes.string,
};

GroupForm.defaultProps = {
  socket: null,
  user: null,
  isLoading: false,
  token: '',
};

export default connect(mapStateToProps, { createGroup, loadgroup })(GroupForm);
