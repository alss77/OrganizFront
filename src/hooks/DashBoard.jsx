import React from 'react';
import Helmet from 'react-helmet';
import GroupForm from '../components/Dashboard/GroupForm';
import CardDashboard from '../components/Dashboard/CardDashboard';

function DashBoard() {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #F7F5FF; }'}</style>
      </Helmet>
      <GroupForm />
      <CardDashboard />
    </div>
  );
}

export default DashBoard;
