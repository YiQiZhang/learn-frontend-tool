import React, {Component} from 'react';
import {addTodo} from '../actions.jsx';

export default class TodoList extends Component {
    render() {
        let state = [
            {
                id: 1,
                name: "abc",
                completed: false
            },
            {
                id: 2,
                name: "bcd",
                completed: true
            }
        ];

        console.log([
            ...state,
            {
                name: "aname",
                completed: false
            }
        ]);


        return (
            <h1>i am to do list</h1>
        )
    }
}