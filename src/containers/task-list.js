import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Task from '../components/task'
import addTask from '../actions/index'

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
        <div>
            <Button variant="contained" color="primary"
            onClick={e => this.generate()}>
                Generer
            </Button>
            <div>
            {
                this.props.taskList.map((r,index) => {
                   return <Task key={this.getRandomId()} rateExchange={r}/>
                    })
                }
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        taskList : state.taskListReducer.taskList
    };
};

const mapDispatchToProps = {
    addTask
}

  export default connect(mapStateToProps, mapDispatchToProps)(TaskList)