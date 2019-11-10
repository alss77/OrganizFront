import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import useForm from 'react-hook-form';
import io from 'socket.io-client';
import Header from '../components/header';

const TaskForm = () => {
  const socket = io();
  const { register, handleSubmit } = useForm();

  function generateToken() {
    return ((Math.random().toString(36).substr(2)) + (Math.random().toString(36).substr(2)));
  }

  const sendForm = (values) => {
    Object.assign(values, { token: generateToken() });
    console.log(values);
    socket.emit('createGroup', values);
  };

  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #F7F5FF; }'}</style>
      </Helmet>
      <div className="App">
        <Header />
      </div>
      <h1>Ajout d'un groupe</h1>
      <form onSubmit={handleSubmit(sendForm)}>
        <div className="form-group">
          <label>Nom du groupe</label>
          <input className="form-control" type="text" ref={register} name="groupName" required />
          <div />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input className="form-control" type="text" ref={register} name="content" />
          <div />
        </div>
        <div className="form-group">
          <label>Auteur</label>
          <input className="form-control" type="text" ref={register} name="author" required />
          <div />
        </div>
        <Link to="/group-list" className="button_space">
          <button type="button" className="btn btn-danger">Retour</button>
        </Link>
        <button type="submit" className="btn btn-primary">Créer</button>
      </form>
    </div>
  );
};

export default connect(null, null)(TaskForm);