import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Dashboard = () => (
    <div>
        Dashboard
    </div>
);

const AddNewExpense = () => (
    <div>
        Add New Expense
    </div>
);

const EditExpense = () => (
    <div>
        Edit Expense
    </div>
);

const Help = () => (
    <div>
        Help
    </div>
);

const NotFound = () => (
    <div>
        404 - Page Not Found! - <Link to = "/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expense Tracking</h1>
        <NavLink to = "/" activeClassName = "is-active" exact = {true}>Dashboard</NavLink>
        <NavLink to = "/add" activeClassName = "is-active">Add Expense</NavLink>
        <NavLink to = "/edit" activeClassName = "is-active">Edit Expense</NavLink>
        <NavLink to = "/help" activeClassName = "is-active">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/add" component={AddNewExpense} />
                <Route path="/edit" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
