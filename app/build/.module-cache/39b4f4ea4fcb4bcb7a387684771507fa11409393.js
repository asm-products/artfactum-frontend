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

          /*<ul className="nav nav-pills">
            <div className='btn-group'>
              <a className='language-picker dropdown-toggle' data-toggle='dropdown' href='#'>
	            Language
	            <span className='caret'></span>
	          </a>
		      <ul className='dropdown-menu'>
			    <li><a href='#'>English</a></li>
		      </ul>
		    </div>
		    <input className="pull-right" type='text' placeholder='signin' />
		  </ul>
		  <ul className='second-layer'>
		  <select>
		    <option>English</option>
		  </select>
		  
		  <ul>{items}</ul>
		  <SecondChild_A data={this.props.data} >{this.props.children}</SecondChild_A>
		  </ul>*/
	
		 React.createElement(TopNavBar, {data: this.props.data}, this.props.children)
	    )	 
	  );
	  
	}
    
  });
  
  var TopNavBar = React.createClass({displayName: 'TopNavBar',
  
    render: function(){
	
	  return (
	     React.createElement("nav", {className: "navbar navbar-custom navbar-fixed-top", role: "navigation"}, 
        React.createElement("div", {className: "container"}, 
		      React.createElement("span", null, this.props), 

            React.createElement("div", {className: "navbar-header"}, 
                React.createElement("button", {type: "button", className: "navbar-toggle", 'data-toggle': "collapse", 'data-target': ".navbar-main-collapse"}, 
                    React.createElement("i", {className: "fa fa-bars"})
                ), 
                React.createElement("a", {className: "navbar-brand page-scroll", href: "#page-top"}, 
                    React.createElement("i", {className: "fa fa-play-circle"}), "  ", React.createElement("span", {className: "light"}, "Play"), " Kertwang"
                )
            ), 
            React.createElement("div", {className: "collapse navbar-collapse navbar-right navbar-main-collapse"}, 
                React.createElement("ul", {className: "nav navbar-nav"}, 
                    React.createElement("li", {className: "hidden"}, 
                        React.createElement("a", {href: "#page-top"})
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {className: "page-scroll", href: "#about"}, "Sign Up")
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {className: "page-scroll", href: "#download"}, "Login")
                    )
           
                )
            )
    
        )
    
    )
	  );
	  
	}
  
  
  });
   
  React.render(
	React.createElement(Dispatcher, {url: "data.json"}),
	document.getElementById('artfactum')
  );
  
  