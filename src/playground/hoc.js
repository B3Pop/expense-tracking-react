// Higher Order Component (HOC)
// A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>WARNING: This is confidential. Do not share.</p>}
        <WrappedComponent { ...props }/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? <WrappedComponent { ...props } /> : <p>You are not logged in.</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin = {true} info="Dinner is ready" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = {true} info="Dinner is ready" />, document.getElementById('app'));