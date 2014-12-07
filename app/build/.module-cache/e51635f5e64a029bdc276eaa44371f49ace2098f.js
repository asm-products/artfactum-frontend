'use strict';

 var Ajax = React.createclassName({
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
  var Dispatcher = React.createclassName({
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
		React.createElement("div", {className: "handleAjax"}, 
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
  
  var FirstChild_A = React.createclassName({
	
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
  
  var TopNavBar = React.createclassName({
  
    render: function(){
	
	  return (
	     React.createElement("div", {className: "topNavBar"}, 
	       React.createElement("nav", {className: "navbar navbar-custom navbar-fixed-top", role: "navigation"}, 
             React.createElement("div", {className: "container"}, 

             React.createElement("div", {className: "navbar-header"}, 
               React.createElement("button", {type: "button", className: "navbar-toggle", 'data-toggle': "collapse", 'data-target': ".navbar-main-collapse"}, 
                 React.createElement("i", {className: "fa fa-bars"})
               ), 
               React.createElement("a", {className: "navbar-brand", href: "#page-top"}, 
            		
					React.createElement("select", {className: "language-picker"}, 
					  React.createElement("option", null, "English"), 
					  React.createElement("option", null, "Spanish")
					)
					  
                )
            ), 
            React.createElement("div", {className: "navbar-collapse navbar-right navbar-main-collapse"}, 
                React.createElement("ul", {className: "nav navbar-nav"}, 
                    React.createElement("li", {className: "hidden"}, 
                        React.createElement("a", {href: "#page-top"})
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {className: "light page-scroll", href: "#about"}, 
						"Sign Up")
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {className: "light page-scroll", href: "#download"}, "Login")
                    )
           
                )
            )
    
        )
	    )
	
	/*<div className="parallax">
      <div id='first-parallax' className='parallax__group'>
    <div className="parallax__layer parallax__layer--back">
  
 	  <header id='jumbotron'>
	    <img src='logo/logo_AF+_256.png' alt='logo/logo_AF+_.png' />
	    <h2>A Better Way to Discover New Art</h2>
	    <i id='artfactum-describe'>
	      Artfactum is an online marketplace where artists and art lovers create virtual galleries to showcase and sell art to a global community
	    </i>
	    <p id='create-space'></p>
	    <p className='oval-button'><span>Launch Your Own Gallery</span></p>
	    <p className='oval-button'><span>Discover</span></p>
	  </header>

    </div>
    <div className="parallax__layer parallax__layer--base">
      <select id='signup-language'>
	    <option>English</option>
	    <option>Spanish</option>
	  </select>
	  <button id='signup-button'>Sign up</button>
  
    </div>

  </div> 
  <div className='parallax__group'>
    <div className="parallax__layer parallax__layer--back"></div>
    <div className="parallax__layer parallax__layer--base">
  
    <div id='section-two' >
  
    <article>
      <div>Create your own Gallery</div>
        <span>+</span>
	    <div>Sell your artworks</div>
        <span>+</span>
	    <div>Get paid discovering artwork</div>
	    <div>A global community</div>
        <span>+</span>
	    <div>Democratized</div>
        <span>+</span>
	    <div>Best commision ever</div>
      </article>	
    </div>
  
  </div>
  
<div className='parallax__group'>
  <div className="parallax__layer parallax__layer--back">
  
   
  
  </div>
  <div className="parallax__layer parallax__layer--base">
  
  <div id='signup-top' >
    
    
	
  </div>
  
  </div>  
  
</div>

</div>
	</div>*/
	)
	
	
	  );
	  
	}
  
  
  });
   
  React.render(
	React.createElement(Dispatcher, {url: "data.json"}),
	document.getElementById('artfactum')
  );