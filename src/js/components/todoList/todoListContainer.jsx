import React, {Component} from 'react'
import TodoList from './todoList.jsx'

import Todo from './todo.jsx'

export default class TodoListContainer extends Component {
    render() {
        return (
            <div>
                <h1>i am a to do list</h1>
                <TodoList todos={[
                             {
                                 id: 1,
                                 text: 'i am text 1',
                                 completed: true
                             },
                             {
                                 id: 2,
                                 text: 'i am text 2',
                                 completed: false
                             }
                          ]}
                          onTodoClick={ id => console.log("on to do clicking, id: " + id)} />
            </div>
        )
    }
}