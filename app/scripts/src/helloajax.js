

var data = [
  {author: "Petey Hunt", text: "This is two comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];


var CommentForm = React.createClass({
  render: function() {
    return (
	  <div className="commentForm">
	    Hello, world! I am a CommentForm.
	  </div>
	);
  }
});

var CommentList = React.createClass({
  render: function(){
    var commentNodes = this.props.data.map( function(comment){
      return (
	    <Comment author={comment.author}>
		  {comment.text}
		</Comment>
	  );
	});
	return ( 
	  <div className="commentList">
	    {commentNodes}
	  </div>
	);
	
	/*return ( 
	  <div className='commentList'>
	    <Comment date="friday" author="Pete Hunt">This is one comment from: </Comment>
		<Comment author="Jordan Walke">This is *another* comment</Comment>
	  </div>
	);*/
  }
});

var Comment = React.createClass({
  render: function() {
	return (
	  <div className="comment">
	    <h2 className="commentAuthor">
		  {this.props.author}
		</h2>
		{this.props.children}
		<strong className="commentDate">
		  {this.props.date}
		</strong>
	  </div>
	);
  }
});  


var CommentBox = React.createClass({
   
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
	setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  loadCommentsFromServer: function() {
    $.ajax({
	  url: this.props.url,
	  dataType: 'json',
	  success: function(data) {
	    this.setState({data: data});
	  }.bind(this),
	  error: function(xhr, status, err) {
	    console.error(this.props.url, status, err.toString());
	  }.bind(this)
	});
  },
  render: function() {
    return (
	  <div className="commentBox">
	    <h1>Comments</h1>
		<CommentList data={this.state.data} />
		<CommentForm />
	  </div>
	);
  }
});

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
	var author = this.refs.author.getDOMNode).value.trim();
	var text = this.refs.text.getDOMNode().value.trim();
	if (!text || ! author) {
	  return;
	}
	// TODO: send request to the server
	this.refs.author.getDOMNode().value = '';
	this.refs.text.getDOMNode().value = '';
	return;
  },
  render: function() {
    return (
	  <form className="commentForm" onSubmit={this.handlSubmit}>
	    <input type="text" placeholder="Your name" ref="author" />
		<input type="text" placeholder="Say something..." ref="text" />
		<input type="submit" value="Post" />
	  </form>
	);
  }
});

React.render(
  <CommentBox url="scripts/src/comments.json" pollInterval={2000} />,
  document.getElementById('ajax')
);



