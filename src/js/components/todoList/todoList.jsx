import React, {Component, PropTypes} from 'react'
import {Todo} from './todo.jsx'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                <Todo text='text 1'
                      completed={true}
                      onClick={ index => this.props.onTodoClick(todo.id)} />
            </ul>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
};