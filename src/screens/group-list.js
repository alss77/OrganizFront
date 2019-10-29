import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { loadGroup } from '../actions/index'
import Helmet from 'react-helmet'
import Header from '../components/header'
import {Link} from 'react-router-dom'
import Group from '../components/group'

 class GroupList extends Component {

    UNSAFE_componentWillMount = () => {
        this.props.loadGroup()
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
            <div>
                <Link to={'/group-form'}>
                    <Button variant="contained" color="primary">Ajouter un groupe</Button>
                </Link>
            </div>
            <div>
                {
                    this.props.groupList.map((r,index) => {
                        return <Group key={r} id={r} title={r.groupName} content={r.content} author={r.author}/>
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
        groupList : store.groupListReducer.groupList
    };
};

const mapDispatchToProps = {
    loadGroup
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)