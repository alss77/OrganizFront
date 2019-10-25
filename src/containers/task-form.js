import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from '../components/header'
import Helmet from 'react-helmet'

function TaskForm(){
        return (
            <div>
                <Helmet>
                    <style>{'body { background-color: #F7F5FF; }'}</style>
                </Helmet>
                <div className='App'>
                    <Header/>
                </div>
                <h1>Nouvelle tâche</h1>
                <form>
                    <div className='form-group'>
                        <label>Titre</label>
                        <input className='form-control' type='text'/>
                        <div></div>
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <input className='form-control' type='text'/>
                        <div></div>
                    </div>
                    <div className='form-group'>
                        <label>Auteur</label>
                        <input className='form-control' type='text'/>
                        <div></div>
                    </div>
                    <Link to={'/task-list'} className='button_space'><button className='btn btn-danger'>Retour</button></Link>
                    <button type='submit' className='btn btn-primary'>Créer</button>
                </form>
            </div>
        )
}

export default connect(null,null)(TaskForm)