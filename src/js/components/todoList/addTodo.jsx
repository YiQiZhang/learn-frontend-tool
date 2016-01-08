import React, {Component, PropTypes} from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='todo_text' />
                <button onClick={ e => this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }

    handleClick(e) {
        const node = this.refs.todo_text;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = "";
    }
}

AddTodo.PropTypes = {
    onAddClick: PropTypes.func.isRequired
};