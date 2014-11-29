

var data = [
  {author: "Petey Hunt", text: "This is two comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];


var CommentForm = React.createClass({displayName: 'CommentForm',
  render: function() {
    return (
	  React.createElement("div", {className: "commentForm"}, 
	    "Hello, world! I am a CommentForm."
	  )
	);
  }
});

var CommentList = React.createClass({displayName: 'CommentList',
  render: function(){
    var commentNodes = this.props.data.map( function(comment){
      return (
	    React.createElement(Comment, {author: comment.author}, 
		  comment.text
		)
	  );
	});
	return ( 
	  React.createElement("div", {className: "commentList"}, 
	    commentNodes
	  )
	);
	
	/*return ( 
	  <div className='commentList'>
	    <Comment date="friday" author="Pete Hunt">This is one comment from: </Comment>
		<Comment author="Jordan Walke">This is *another* comment</Comment>
	  </div>
	);*/
  }
});

var Comment = React.createClass({displayName: 'Comment',
  render: function() {
	return (
	  React.createElement("div", {className: "comment"}, 
	    React.createElement("h2", {className: "commentAuthor"}, 
		  this.props.author
		), 
		this.props.children, 
		React.createElement("strong", {className: "commentDate"}, 
		  this.props.date
		)
	  )
	);
  }
});  


var CommentBox = React.createClass({displayName: 'CommentBox',
   
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
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
	  React.createElement("div", {className: "commentBox"}, 
	    React.createElement("h1", null, "Comments"), 
		React.createElement(CommentList, {data: this.state.data}), 
		React.createElement(CommentForm, null)
	  )
	);
  }
});

React.render(
  React.createElement(CommentBox, {url: "scripts/src/comments.json"}),
  document.getElementById('ajax')
);



