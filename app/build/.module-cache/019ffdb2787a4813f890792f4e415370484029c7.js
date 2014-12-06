'use strict';

 var Ajax = React.createClass({displayName: 'Ajax',
	getInitialState: function(){
	  return {data: []};
	},
	componentDidMount: function() {
	  $.ajax({
		url: this.props.url,
		dataType: 'json',
		success: function(data) {
		  this.setState( {data: data});
		  this.props.onSuccess({data:data});
		}.bind(this),
		error: function(Ajax, status, err) {
		  console.error(this.props.url, status, err.toString());
		  this.props.onError({data: [this.props.url,status, err.toString() ]});
		}.bind(this)
	  });
	},
	render: function(){
	    return (
		  React.createElement("span", null) 
		);
	 
	}
	
  });  
  var Dispatcher = React.createClass({displayName: 'Dispatcher',
	getInitialState: function(){
	  return {data: []};
	},
	
	handleSuccess: function(e) {
	  //document.getElementById('info').innerHTML = JSON.stringify(e);
	  this.setState({data:e.data});
	  return;
	},
	
	handleError: function(e){
	  //document.getElementById('info').innerHTML = JSON.stringify(e);
	  return;
	},
	
	render: function(){
	  return ( 
		React.createElement("div", {class: "handleAjax"}, 
  	      React.createElement(Ajax, {
		    onError: this.handleError, 
			onSuccess: this.handleSuccess, 
			ref: "ajax", 
			url: this.props.url
		  }), 
		  React.createElement(FirstChild_A, {data: this.state.data})
		)
	  )
	}
  });
  
  var FirstChild_A = React.createClass({displayName: 'FirstChild_A',
	
	render: function(){
	  
	  var items = this.props.data.map( function(i){
	    return (
		  React.createElement("li", null, i.name)
		 
		);
	  
	  });
	  return (
	    React.createElement("div", {className: "items"}, 
		  
React.createElement("ul", {className: "nav nav-pills"}, 
  React.createElement("li", {className: "active dropdown"}, 
    React.createElement("a", {className: "dropdown-toggle", 
       'data-toggle': "dropdown", 
       href: "#"}, 
        "English", 
        React.createElement("b", {className: "caret"})
      ), 
    React.createElement("ul", {className: "dropdown-menu"}, 
      React.createElement("li", null, React.createElement("a", {href: "#"}, "English"))
    ), 
	React.createElement("ul", {className: "dropdown-menu"}, 
      React.createElement("li", null, React.createElement("a", {href: "#"}, "English"))
    )
  )
), 
		  
		  
		  React.createElement("h2", null), 
		  React.createElement("h5", null, "firstchild-a"), 
		  React.createElement("ul", null, items), 
		  React.createElement(SecondChild_A, {data: this.props.data}, this.props.children)
		 
		)
	  );
	  
	}
    
  });
  
  var SecondChild_A = React.createClass({displayName: 'SecondChild_A',
  
    render: function(){
	
	  return (
	      React.createElement("span", null, this.props)
	  );
	  
	}
  
  
  });
   
  React.render(
	React.createElement(Dispatcher, {url: "data.json"}),
	document.getElementById('artfactum')
  );