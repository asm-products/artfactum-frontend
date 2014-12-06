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
	     React.createElement("div", {className: "topNavBar"}, 
	     
	
	React.createElement("div", {className: "parallax"}, 
      React.createElement("div", {id: "first-parallax", className: "parallax__group"}, 
    React.createElement("div", {className: "parallax__layer parallax__layer--back"}, 
  
 	  React.createElement("header", {id: "jumbotron"}, 
	    React.createElement("img", {src: "logo/logo_AF+_256.png", alt: "logo/logo_AF+_.png"}), 
	    React.createElement("h2", null, "A Better Way to Discover New Art"), 
	    React.createElement("i", {id: "artfactum-describe"}, 
	      "Artfactum is an online marketplace where artists and art lovers create virtual galleries to showcase and sell art to a global community"
	    ), 
	    React.createElement("p", {id: "create-space"}), 
	    React.createElement("p", {className: "oval-button"}, React.createElement("span", null, "Launch Your Own Gallery")), 
	    React.createElement("p", {className: "oval-button"}, React.createElement("span", null, "Discover"))
	  )

    ), 
    React.createElement("div", {className: "parallax__layer parallax__layer--base"}, 
      React.createElement("select", {className: "light", id: "signup-language"}, 
	    React.createElement("option", null, "English"), 
	    React.createElement("option", null, "Spanish")
	  ), 
	  React.createElement("button", {className: "light", id: "signup-button"}, "Sign up")
  
    )

  ), 
  React.createElement("div", {className: "parallax__group"}, 
    React.createElement("div", {className: "parallax__layer parallax__layer--back"}), 
    React.createElement("div", {className: "parallax__layer parallax__layer--base"}, 
  
    React.createElement("div", {id: "section-two"}, 
  
    React.createElement("article", null, 
      React.createElement("div", null, "Create your own Gallery"), 
        React.createElement("span", null, "+"), 
	    React.createElement("div", null, "Sell your artworks"), 
        React.createElement("span", null, "+"), 
	    React.createElement("div", null, "Get paid discovering artwork"), 
	    React.createElement("div", null, "A global community"), 
        React.createElement("span", null, "+"), 
	    React.createElement("div", null, "Democratized"), 
        React.createElement("span", null, "+"), 
	    React.createElement("div", null, "Best commision ever")
      )	
    )
  
  ), 
  
React.createElement("div", {className: "parallax__group"}, 
  React.createElement("div", {className: "parallax__layer parallax__layer--back"}
  
   
  
  ), 
  React.createElement("div", {className: "parallax__layer parallax__layer--base"}, 
  
  React.createElement("div", {id: "signup-top"}
    
    
	
  )
  
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
  
  