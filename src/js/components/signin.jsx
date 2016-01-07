import React, {Component} from 'react'
import {DatePicker} from 'antd'

export default class SignIn extends Component {
    render() {
        return (
            <form>
                <p>this is datepicker</p>
                <DatePicker/>
            </form>
        )
    }
}