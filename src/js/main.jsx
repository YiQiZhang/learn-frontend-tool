import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import {createStore} from 'redux'

import todoApp from './reducers.jsx'

import App from './containers/app.jsx'
import CommentBox from './components/commentBox.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Comment from './components/comment.jsx'
import SignIn from './components/signin.jsx'
import TodoListContainer from './components/todoList/todoListContainer.jsx'

let store = createStore(todoApp);

export default class qingwei {
    static start() {
        ReactDOM.render((
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="about" component={About} />
                    <Route path="comment" component={Comment} />
                    <Route path="signin" component={SignIn} />
                    <Route path="todoList" component={TodoListContainer} />
                </Route>
            </Router>

          ),document.getElementById('main-container')
        );
    }
};