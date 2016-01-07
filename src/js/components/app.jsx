import React, {Component} from 'react'
import { Link } from 'react-router'

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/comment">Comment</Link></li>
                    <li><Link to="/signin">SignIn</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}