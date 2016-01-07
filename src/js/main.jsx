import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import CommentBox from './components/commentBox.jsx'
import App from './components/app.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Comment from './components/comment.jsx'
import SignIn from './components/signin.jsx'

module.exports = {
    start: function() {
        ReactDOM.render((
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="about" component={About} />
                    <Route path="comment" component={Comment} />
                    <Route path="signin" component={SignIn} />
                </Route>
            </Router>

          ),document.getElementById('main-container')
        );
    }
};