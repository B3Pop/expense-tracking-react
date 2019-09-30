import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const routes = (
    <BrowserRouter>
        <div>
            <Route path = "/" component = { Dashboard } exact = { true } />
            <Route path = "/add" component = { AddNewExpense } />
            <Route path = "/edit" component = { EditExpense } />
            <Route path = "/help" component = { Help } />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes , document.getElementById('app'));
