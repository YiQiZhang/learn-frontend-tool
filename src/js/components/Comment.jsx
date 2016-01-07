import React, {Component} from 'react'
import CommentBox from './commentBox.jsx'

export default class Comment extends Component {
    render() {
        return (
            <CommentBox url="/response.json" submitUrl="submitResponse.json" />
        )
    }
}