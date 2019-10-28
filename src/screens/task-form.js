import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from '../components/header'
import Helmet from 'react-helmet'




function TaskForm(){

    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const post = {titre: title, description: content, auteur: author}

        return (
            <div>
                <Helmet>
                    <style>{'body { background-color: #F7F5FF; }'}</style>
                </Helmet>
                <div className='App'>
                    <Header/>
                </div>
                <h1>Nouvelle tâche</h1>
                <form onSubmit={console.log(post)}>
                    <div className='form-group'>
                        <label>Titre</label>
                        <input className='form-control' type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <div></div>
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <input className='form-control' type='text' value={content} onChange={(e) => setContent(e.target.value)}/>
                        <div></div>
                    </div>
                    <div className='form-group'>
                        <label>Auteur</label>
                        <input className='form-control' type='text' value={author} onChange={(e) => setAuthor(e.target.value)}/>
                        <div></div>
                    </div>
                    <Link to={'/task-list'} className='button_space'><button className='btn btn-danger'>Retour</button></Link>
                    <button type='submit' className='btn btn-primary'>Créer</button>
                </form>
            </div>
        )
}

export default connect(null,null)(TaskForm)