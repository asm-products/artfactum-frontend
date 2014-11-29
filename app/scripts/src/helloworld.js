

var data = [
  {author: "Peter Hunt", text: "This is two comment"},
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
  render: function() {
    return (
	  <div className="commentBox">
	    <h1>Comments</h1>
		<CommentList data={this.props.data} />
		<CommentForm />
	  </div>
	);
  }
});

React.render(
  <CommentBox data={data} />,
  document.getElementById('react')
);



