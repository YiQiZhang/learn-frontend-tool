import React from 'react'
import {DatePicker} from 'antd'
import 'antd/lib/index.css'

let SignIn = React.createClass({
    render() {
        return (
            <form>
                <p>this is datepicker</p>
                <DatePicker/>
            </form>
        )
    }
});

module.exports = SignIn;