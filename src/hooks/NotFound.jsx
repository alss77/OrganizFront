import React from 'react';
import Helmet from 'react-helmet';

const NotFound = () => (
    <div>
        <Helmet>
            <style>{'body { background-color: #F7F5FF; }'}</style>
        </Helmet>
        <h1>Erreur 404</h1>
    </div>
);

export default NotFound;
