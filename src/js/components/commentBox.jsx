/**
 * Created by zhangyiqi on 1/6/16.
 */

var React = require("react");
var jQ = require("jquery");

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
            <h2 className="commentAuthor">{this.props.author}</h2>
        {this.props.children}
        </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment){
            return (
                <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
            );
        });
        return (
            <div className="commentList">
            {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    handleAuthorChange: function(e) {
        this.setState({author: e.target.value});
    },
    handleTextChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        console.log("submiting");

        e.preventDefault();
        var author = this.state.author;
        var text = this.state.text;
        if (!text || !author) {
            return ;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author: '', text: ''});
    },
    getInitialState: function() {
        return {author: "", text: ""};
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange}/>
        <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange}/>
        <input type="submit" value="Post" />
            </form>
        );
    }
});

var CommentBox = React.createClass({
    loadDataFromServer: function() {
        jQ.ajax({
            type: "GET",
            url: this.props.url,
            dataType: "json",
            success: function(data) {
                if (data.code == 0) {
                    this.setState({data: data.data});
                    console.log(data.message);
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err.toString());
            }.bind(this)
        });
    },
    submitDataToServer: function(comment) {
        jQ.ajax({
            type: "GET",
            url: this.props.submitUrl,
            dataType: "json",
            data: comment,
            success: function(data) {
                if (data.code == 0) {
                    this.setState({data: data.data});
                    console.log(data.message);
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadDataFromServer();
    },
    render: function() {
        return (
            <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.submitDataToServer}/>
        </div>
        );
    }
});

module.exports = CommentBox;