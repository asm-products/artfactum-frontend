var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];


var Comment = React.createClass({displayName: 'Comment',
  render: function() {
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
	  <div className="comment">
	    <h2 className="commentAuthor">
		  {this.props.author}
		</h2>
		{this.props.children}
		<strong className="commentDate">
		  {this.props.date}
		</strong>
	  </div>
	);*/
  }
});  

var CommentList = React.createClass({displayName: 'CommentList',
  render: function(){
    return ( 
	  React.createElement("div", {className: "commentList"}, 
	    React.createElement(Comment, {date: "friday", author: "Pete Hunt"}, "This is one comment from: "), 
		React.createElement(Comment, {author: "Jordan Walke"}, "This is *another* comment")
	  )
	);
  }
});

var CommentForm = React.createClass({displayName: 'CommentForm',
  render: function() {
    return (
	  React.createElement("div", {className: "commentForm"}, 
	    "Hello, world! I am a CommentForm."
	  )
	);
  }
});


var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return (
	  React.createElement("div", {className: "commentBox"}, 
	    React.createElement("h1", null, "Comments"), 
		React.createElement(CommentList, {data: this.props.data}), 
		React.createElement(CommentForm, null)
	  )
	);
  }
});

React.render(
  React.createElement(CommentBox, {data: data}),
  document.getElementById('react')
);



