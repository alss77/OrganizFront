import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { loadGroup } from '../actions/index';
import Header from '../components/header';
import Group from '../components/group';

function GroupList({ groupList }) {
  useEffect(() => {
    loadGroup();
  });

  { /* const getRandomId = () => {
    const min = 1;
    const max = 1000;
    return (min + Math.floor(Math.random() * (max - min)));
  }; */ }

  return (
      <div className="App">
        <Helmet>
          <style>{'body { background-color: #F7F5FF; }'}</style>
        </Helmet>
        <Header />
        <div>
          <Link to="/group-form">
            <Button variant="contained" color="primary">Ajouter un groupe</Button>
          </Link>
        </div>
        <div>
          {
            groupList.map((r) => (
              <Group
                key={r}
                id={r}
                title={r.groupName}
                content={r.content}
                author={r.author}
              />
            ))
                }
        </div>
        {console.log('-----------')}
      </div>
  );
}

GroupList.propTypes = {
  loadGroup: PropTypes.func.isRequired,
  groupList: PropTypes.node,
};

GroupList.defaultProps = {
  groupList: [],
};

const mapStateToProps = (store) => ({
  groupList: store.groupListReducer.groupList,
});

export default connect(mapStateToProps, { loadGroup })(GroupList);
