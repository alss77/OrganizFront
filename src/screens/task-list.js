import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Task from '../components/task'
import addTask from '../actions/index'
import Helmet from 'react-helmet'
import Header from '../components/header'
import {Link} from 'react-router-dom'

 class TaskList extends Component {

    generate = () => {
        this.props.addTask()
    }

    getRandomId() {
        const min = 1
        const max = 1000
        return (min + Math.floor(Math.random() * (max - min)))
    }

    render() {

    return (
        <div className='App'>
            <Helmet>
                <style>{'body { background-color: #F7F5FF; }'}</style>
            </Helmet>
            <Header/>
            <Link to={'/task-form'}>
                <Button variant="contained" color="primary">Ajouter une tâche</Button>
            </Link>
            <div>
            {
                
                this.props.taskList.map((r,index) => {
                   return <Task key={r} id={r}/>
                    })
                }
            </div>
            {console.log('-----------')}
        </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        taskList : store.taskListReducer.taskList
    };
};

const mapDispatchToProps = {
    addTask
}

  export default connect(mapStateToProps, mapDispatchToProps)(TaskList)