import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import CommentBox from './modules/commentBox.jsx'

module.exports = {
    start: function() {

        const Home = React.createClass({
           render() {
               return (
                   <div>i am home</div>
               )
           }
        });

        const About = React.createClass({
            render() {
                return (
                    <div>i am about</div>
                )
            }
        });

        const Comment = React.createClass({
            render() {
                return (
                    <CommentBox url="/response.json" submitUrl="submitResponse.json" />
                )
            }
        });

        const App = React.createClass({
            render() {
                return (
                    <div>
                        <h1>App</h1>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/comment">Comment</Link></li>
                        </ul>
                        {this.props.children}
                    </div>
                )
            }
        });

        ReactDOM.render((
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="about" component={About} />
                    <Route path="comment" component={Comment} />
                </Route>
            </Router>

          ),document.getElementById('main-container')
        );
    }
};