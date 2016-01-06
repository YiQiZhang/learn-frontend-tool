var React = require("react");
var ReactDOM = require("react-dom");
var jQ = require("jquery");

module.exports = {
    start: function() {
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
            getInitialState: function() {
                return {author: "", text: ""};
            },
            render: function() {
                return (
                    <form className="commentForm">
                        <input type="text" placeholder="Your name" />
                        <input type="text" placeholder="Say something..." />
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
                        <CommentForm/>
                    </div>
                );
            }
        });



        ReactDOM.render(
          <CommentBox url="/response.json"/>,
          document.getElementById('main-container')
        );
    }
};