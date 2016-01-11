import React, {Component} from 'react'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

import todoApp from '../../reducers.jsx'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from '../../actions.jsx'

import AddTodo from './addTodo.jsx'
import TodoList from './todoList.jsx'
import Footer from './footer.jsx'

let store = createStore(todoApp);

class TodoListContainer extends Component {
    render() {

        const {dispatch, visibleTodos, visibilityFilter} = this.props;

        return (
            <div>
                <h1>i am a to do list</h1>
                <AddTodo
                    onAddClick={text => dispatch(addTodo(text))} />
                <TodoList todos={visibleTodos}
                          onTodoClick={ id => dispatch(completeTodo(id))} />
                <Footer onFilterChange={nextFilter => setVisibilityFilter(nextFilter)}
                        filter={visibilityFilter} />
            </div>
        )
    }
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

let TodoListContainerConnector = connect(select)(TodoListContainer);

export default class TodoListContainerContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <TodoListContainerConnector />
            </Provider>
        )
    }
}