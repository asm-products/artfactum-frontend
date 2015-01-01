(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Dispatcher = require('./../dispatcher.js');

var Actions = {
  setData: function (data) {
    Dispatcher.setData(data);
  },
  setUserProfile: function (data) {
    Dispatcher.setUserProfile(data);
  }
};

module.exports = Actions;
},{"./../dispatcher.js":20}],2:[function(require,module,exports){
'use strict';

var Router = window.ReactRouter,
    Route = Router.Route,
    Routes = Router.Routes,
	Link = Router.Link,
    RouteHandler = Router.RouteHandler;
	
require('./footer.css');

var Footer = React.createClass({displayName: 'Footer',

  render: function(){
    return (  
      React.createElement("div", {className: "row af-footer"}, 
        React.createElement("div", {className: "col-xs-12"}, 
		      
		  React.createElement("div", {className: "user-profile-logo-bottom center-block"}, 
		    React.createElement("img", {className: "img-responsive padding1", src: "images/Logo_AF_vector_white.png", alt: "artfactum logo", title: "artfactum logo"})
		  )
		  
	    ), 

	    React.createElement("div", {className: "col-xs-12 padding1"}, 
		  React.createElement("nav", {className: "navbar navbar-inverse breadcrumbs justified", role: "navigation"}, 
			React.createElement("div", {className: "footerpage"}, 
			  React.createElement(Link, {className: "footerpages", to: "about"}, React.createElement("a", {href: "#about"}, "About")), React.createElement("span", null, " | "), 
			  React.createElement(Link, {className: "footerpages", to: "about"}, React.createElement("a", {href: "#about"}, "Legal")), React.createElement("span", null, " | "), 
			  React.createElement(Link, {className: "footerpages", to: "about"}, React.createElement("a", {href: "#about"}, "Faq")), React.createElement("span", null, " | "), 
			  React.createElement(Link, {className: "footerpages", to: "about"}, React.createElement("a", {href: "#about"}, "Developers")), React.createElement("span", null, " | "), 
			  React.createElement(Link, {className: "footerpages", to: "about"}, React.createElement("a", {href: "#about"}, "Ads")), React.createElement("span", null, " | "), 
			  React.createElement(Link, {className: "footerpages", to: "about"}, React.createElement("a", {href: "#about"}, "Contact"))
			)
		  ), 
		  React.createElement("p", null, "Made with love on assembly")
		)
      
      )	  
	
	);

  }
  
});

module.exports = Footer;
},{"./footer.css":3}],3:[function(require,module,exports){
var css = ".af-footer{\r\n  background: black;\r\n}\r\n\r\n.af-footer a,li{\r\n  color: white;\r\n}\r\n\r\n.af-footer p{\r\n  margin-left:1.5em;\r\n}\r\n\r\n.breadcrumbs{\r\n  color:white;\r\n  width:90%;\r\n  \r\n  background: #3a3a3a;\r\n\r\n  display:block;\r\n  position:relative;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  text-align:justify;\r\n}\r\n\r\n.footerpages{\r\n  text-align:center;\r\n  color:white;\r\n}\r\n\r\n.footerpage{\r\n  width:380px;\r\n  padding:2px;\r\n  font-size:1.08em;\r\n  display:block;\r\n  position:relative;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n}\r\n\r\n@media (max-width:600px) {\r\n  .footerpage{\r\n    width:280px;\r\n  }\r\n}\r\n"; (require("C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify"))(css); module.exports = css;
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":23}],4:[function(require,module,exports){
var css = "@media all and (max-width:500px) and (min-width: 300px) {\r\n\r\n.min-height div{\r\n\r\n  width:90%;\r\n  min-height: 18vh;\r\n\r\n}\r\n\r\nfigure{\r\n\r\n  min-height: 18vh;\r\n  \r\n}\r\n\r\n\r\n.gif{\r\n   height: 0em;\r\n   width:0;\r\n   opacity: 0;\r\n      \r\n}\r\n\r\n.egon{\r\n  top:-2.25em;\r\n}\r\n\r\n}"; (require("C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify"))(css); module.exports = css;
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":23}],5:[function(require,module,exports){
var css = "/*the height break point seems to be just over 450px;\r\n *width breakpoint 350px;\r\n */\r\n\r\n#underline{\r\n\r\n  text-decoration: underline;\r\n\r\n}\r\n\r\n/*for the language picker and sign-in button\r\n *the entire page needs to be wrapped inside the parallax class and it needs\r\n *to have the appropriate height to keep a second scroller from appearing\r\n */\r\n\t\r\n.parallax {\r\n  -webkit-perspective: 1px;\r\n          perspective: 1px;\r\n  top:.5vh;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  position:relative;\r\n  height:99vh;\r\n  background:white;\r\n}\r\n\r\n\r\n.parallax__group {\r\n  position:relative;\r\n  background: white;\r\n\r\n  height:100vh;\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n  width:100%;\r\n  -webkit-transform-style: preserve-3d;\r\n}\r\n  \r\n.parallax__group:nth-child(2){\r\n   background: white;\r\n}\r\n\r\n.parallax__layer {\r\n\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  height:100vh;\r\n}\r\n\r\n.parallax__layer--base {\r\n\r\n  webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transform: translateZ(0);\r\n\r\n}\r\n\r\n.parallax__layer--back {\r\n\r\n  -webkit-transform: translateZ(-1px);\r\n  transform: translateZ(-1px);\r\n  -webkit-transform: translateZ(-1px) scale(2);\r\n  width:100%;\r\n   \r\n}\r\n\r\n.parallax__group {\r\n  position:relative;\r\n  background: rgba(130,130,230,0.01);\r\n  height:100vh;\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n  width:100%;\r\n  -webkit-transform-style: preserve-3d;\r\n}\r\n  \r\n.parallax__group:nth-child(2){\r\n  background: white;\r\n}\r\n\r\n/***\r\n three pages in total\r\n ***/\r\n\r\n.first-page{}\r\n\r\n.second-page, .third-page{\r\n  width:100%;\r\n  position:absolute;\r\n}\r\n \r\n.second-page{\r\n  top:45vh;\r\n  height:190vh;\r\n  background:white;\r\n}\r\n \r\n.third-page{\r\n  top:233vh;\r\n  left:0;\r\n  margin:0;\r\n  margin-top:1em;\r\n}\r\n\r\n\r\n/*wrap the second and third pages*/\r\n\r\n.under-back{\r\n  position:absolute;\r\n  width:100%;\r\n  top:200vh;\r\n}\r\n\r\n\r\n/*top header*/\r\n\r\n#signup-language,#signup-button{\r\n    position: absolute;\r\n    padding: 1vh;\r\n\tmargin: .75em;\r\n}\r\n\r\n#signup-button{\r\n  right:0;\r\n}\r\n\r\n/*hero-unit*/\t\r\n \r\n#jumbotron{\r\n  \r\n  position:relative;\r\n  top:-8%;\r\n  height:70%;\r\n  width:100%;\r\n  text-align:center;\r\n  color:black;\r\n  overflow:hidden:\r\n}\r\n  \r\n  \r\n#jumbotron img:nth-child(1){\r\n  \r\n  position:absolute;\r\n  z-index:0;\r\n  left:-25%;\r\n  top:-25%;\r\n  opacity:0.35;\r\n    \r\n}\r\n  \r\n#jumbotron img:nth-child(2){\r\n\r\n  top:.5em;\r\n  display:block;\r\n  position:relative;\r\n  z-index:0;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  //background: rgba(300,300,300,0.5);\r\n  //border-radius:50%;\r\n}\r\n  \r\n.jumbo-inner{\r\n  \r\n  position:relative;\r\n  top:-14%;\r\n  font-size:1.4em;\r\n  margin-left:5%;\r\n  margin-right:5%;\r\n}\r\n  \r\n#jumbotron i{\r\n\r\n  margin-top:-.2em;\r\n  position:relative;\r\n  display:block;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  width:90%;\r\n  font-size:.9em;\r\n  color:#000;\r\n \r\n}\r\n\r\n#jumbotron h2{\r\n  \r\n  color:black;\r\n  font-size:1.4em;\r\n  \r\n}\r\n\r\n\t\t\r\n.oval-button{\r\n  text-align:center;\r\n  color:white;\r\n  background: #e5635c;\r\n  padding: .75em;\r\n  position:relative;\r\n  display:block;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n  width:15em;\r\n  border-radius:20px;\r\n  font-family: 'Open-Sans-regular';\r\n  font-weight:bold;\r\n  font-size:1.2em;\r\n}\r\n  \r\n.second-oval{\r\n\r\n  background:blue;\r\n\r\n}\r\n  \r\n  \r\n/*second section of the first page\r\n  the first page actually being two pages of vh (window height)\r\n */  \r\n  \r\n#section-two{\r\n  left:0;\r\n  width:90%;\r\n  height:100vh;\r\n  position:relative;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  font-family: 'Open-Sans-regular';\r\n  font-size:1.2em;\r\n}\r\n\r\n/*wrap the icon section*/\r\n  \r\narticle{\r\n  position:relative;\r\n  top:15%;\r\n  width:110%;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  height:65%;\r\n}\r\n\r\n#signup-icons div{\r\n  margin-top:2em;\r\n}\r\n  \r\n\r\n  /*statement*/\r\n  \r\n.below-article{\r\n\t\r\n\tposition:relative;\r\n\tbottom:20%;\r\n\tclear:float;\r\n\twidth:80%;\r\n\tpadding-top:1.5em;\r\n\tfont-size:1.4em;\r\n\tfont-style: italic;\r\n\tmargin-left:auto;\r\n\tmargin-right:auto;\r\n\ttext-align: center;\r\n\tfont-family: 'Open-Sans-600';\r\n}\r\n  \r\n  \r\n.center-wrapper .row{\r\n\r\n margin-top:3em;\r\n\r\n} \r\n  \r\n#section-two div{\r\n    \r\n\twidth: 25%;\r\n\theight:30%;\r\n\tfloat:left;\r\n\tfont-size:1.2em;\r\n\ttext-align:center;\r\n\t\r\n}\r\n  \r\n#section-two span{\r\n\r\n    \r\n\twidth: 8%;\r\n\theight:30%;\r\n\tfloat:left;\r\n\tfont-size:1.2em;\r\n\ttext-align:center;\r\n\t\r\n\r\n}\r\n  \r\n/*TODO make less global*/\r\n\r\n.min-height div{\r\n  \r\n  padding: 0 15px;\r\n  min-height: 40vh;\r\n \r\n}\r\n\r\n.min-height h3{\r\n\r\n  color:#e56e5c;\r\n\r\n  }\r\n\r\n.min-height p{\r\n\r\n  color: slategray;\r\n\r\n}\r\n\r\nfigure {\r\n\r\n  height:40vh;\r\n  min-width:40vh;\r\n  display:cover;\r\n  overflow:hidden;\r\n  \r\n\r\n}\r\n\r\nfigure img{\r\n\r\n  padding:1.1em;\r\n  padding-right:4em;\r\n  width: 100%;\r\n  height:100;\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n   box-shadow: 0 0 5px 2px #ccc;\r\n\r\n}\r\n\r\n.fair-heading{\r\n\r\n  position:relative;\r\n  top:3em;\r\n  color:#e56e5c;\r\n\r\n}\r\n\r\n\r\n.fair-heading p{\r\n\r\n  color:slategray;\r\n  padding-top:1.25em;\r\n  \r\n}\r\n\r\n.center-wrapper figure{\r\n  \r\n  padding:1em;\r\n  \r\n}\r\n\r\n\r\n.center-wrapper{\r\n\r\n  position:relative;\r\n  width:90%;\r\n  top:2em;\r\n  margin-right:auto;\r\n  margin-left:auto;\r\n\r\n}\r\n\r\n\r\n#near-footer{\r\n\r\n  top:1.5em;\r\n  font-size:1em;\r\n  background: #e56e5c;\r\n  color:white;\r\n  width:100%;\r\n  position:relative;\r\n  \r\n}\r\n\r\n\r\n#near-footer button{\r\n\r\n  margin-top:1.5em;\r\n  background: white;\r\n  color:black;\r\n  border: solid black 3px;\r\n  border-radius: 10px;\r\n  padding:2px;\r\n  padding-left:5px;\r\n  padding-right:5px;\r\n  margin-left:4px;\r\n  box-shadow: 0 0 3px rgba(10,10,10,0.3);\r\n  \r\n}\r\n\r\n.footer{\r\n\r\n  color:white;\r\n  position:relative;\r\n \r\n}\r\n\r\n\r\n.modal-dialog, .modal-content{\r\n  border: solid black 10px;\r\n  position:relative;\r\n  z-index:9999;\r\n}"; (require("C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify"))(css); module.exports = css;
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":23}],6:[function(require,module,exports){
'use strict';

var Footer = React.createFactory(require('./../Footer/Footer.js'));

require('./signup.css');
require('./signup-phones.css');

/*var Ajax = React.createClass({
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
	  <span></span> 
	);
 
  }

});  



var Signup = React.createClass({
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
	  <div className='handleAjax'>
	    <Ajax 
		  onError={this.handleError} 
		  onSuccess={this.handleSuccess} 
		  ref='ajax' 
		  url={this.props.url} 
	    ></Ajax>
	    <FirstChild_A data={this.state.data} />
	  </div>
    )
  }
});


var FirstChild_A = React.createClass({

  render: function(){
  
    var items = this.props.data.map( function(i){
	  return (
	    <li>{i.name}</li>
	  );
  
    });
    return (
	  <div className='items'>
        <TopNavBar data={this.props.data} >{this.props.children}</TopNavBar>
	  </div>	 
    );
  }

});

*/
var TopNavBar = React.createClass({displayName: 'TopNavBar',

  render: function(){

    return (
	  React.createElement("div", {className: "topNavBar"}, 
	      React.createElement("div", {className: "modal fade", id: "basicModal", tabindex: "-1", role: "dialog", 
			    'aria-labelledby': "basicModal", 'aria-hidden': "true"}, 
				React.createElement("div", {className: "modal-dialog"}, 
				  React.createElement("div", {className: "modal-content"}, 
				    React.createElement("div", {className: "modal-header"}, 
					  React.createElement("button", {type: "button", className: "close", 'data-dismiss': "modal", 'aria-hiddden': "true"}, "x"), 
	                  React.createElement("h4", {className: "modal-title", id: "myModalLabel"}, "Modal title")
                    ), 
                  React.createElement("div", {className: "modal-body"}, 
                    React.createElement("h3", null, "Modal body")
                  ), 
                  React.createElement("div", {className: "modal-footer"}, 
                    React.createElement("button", {type: "button", className: "btn btn-default", 'data-dismiss': "modal"}, "Close"), 
           			React.createElement("button", {type: "button", className: "btn btn-primary"}, "Save Changes")
                  )					
                )					
              )					
            ), 				
        React.createElement("div", {className: "parallax"}, 
          React.createElement("div", {id: "first-page", className: "parallax__group"}, 
	        React.createElement("div", {className: "parallax__layer parallax__layer--back"}, 
              
			  React.createElement("header", {id: "jumbotron"}, 
			    
				React.createElement("img", {src: "images/flowers_big.jpg"}), 
				
				React.createElement("img", {src: "images/logo_AF+_256.png", alt: "images/logo_AF+_.png"}), 
					
				React.createElement("div", {className: "jumbo-inner"}, 
				React.createElement("h2", null, "A Better Way to Discover New Art"), 
				React.createElement("i", {id: "artfactum-describe"}, 
				  "Artfactum is an online marketplace where artists and art lovers create virtual galleries to showcase and sell art to a global community"
				)
				
				)
				
						
			  ), 
		  	    
				React.createElement("p", {id: "create-space"}, 
				
				  React.createElement("p", {className: "oval-button"}, React.createElement("span", null, "Launch Your Own Gallery")), 
				  React.createElement("p", {className: "second-oval oval-button"}, React.createElement("span", null, "Discover"))
			    
				)
			  
			), 
			
			React.createElement("div", {className: "parallax__layer parallax__layer--base"}, 
			  React.createElement("select", {className: "light", id: "signup-language"}, 
				React.createElement("option", null, "English"), 
				React.createElement("option", null, "Spanish")
			  ), 
			  React.createElement("button", {className: "light", id: "signup-button", 
			    'data-toggle': "modal", 
				'data-target': "#basicModal"}, "Sign up"
			  )
			  
				
				
			  
			), 

			
			React.createElement("div", {className: "under-back"}, 
			
			React.createElement("div", {className: "container-fluid tomato second-page"}, 
				React.createElement("div", {className: "center-wrapper"}, 
				React.createElement("div", {className: "row min-height"}, 
				  React.createElement("div", {className: "col-xs-12 col-md-6"}, 
				  React.createElement("h3", null, 
					React.createElement("b", null, "Simple")
				  ), 
				  React.createElement("p", null, 
					"Upload your gallery and upload your artworks"
				  )
				  ), 
				   React.createElement("figure", {className: "col-xs-12 col-md-6"}, 
				      React.createElement("img", {src: "images/artistspage_gif.gif"})
				   
				   )
				), 
				
				React.createElement("div", {className: "row min-height"}, 
				  React.createElement("figure", {className: "col-xs-6"}, 
				    React.createElement("img", {src: "images/egon.jpg"})
				  ), 
				   React.createElement("div", {className: "col-xs-6"}, 
					 React.createElement("h3", null, 
					   React.createElement("b", null, "Cool")
					), 
					React.createElement("p", null, 
					  "Curate the art you love while you recommend it"
					)
				  )
				), 
				
				React.createElement("div", {className: "row min-height"}, 
				  React.createElement("div", {className: "col-xs-6"}, 
				  React.createElement("h3", null, 
					React.createElement("b", null, "Effective")
				  ), 
				  React.createElement("p", null, 
					"Find the best new art by the recommendations of who really knows, the artists and art lovers"
				  )
				  ), 
				   React.createElement("figure", {className: "col-xs-6"}, 
					 React.createElement("img", {src: "images/egon_land.jpg"})
				   )
				), 
				  React.createElement("div", {className: "fair-heading row col-xs-12 text-center"}, 
				  React.createElement("h2", {id: "underline"}, React.createElement("b", null, "And above all, fair")), 
				  React.createElement("p", {className: "text-info"}, 
					"If an artwork is sold, 90% for the artist, 7% for the person who recommended it, and 3% for the platform."
				  )
				)
			  )
            ), 
              React.createElement("div", {className: "third-page"}, 			  			    
				React.createElement("div", {className: "container", id: "near-footer"}, 
				  React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-lg-8 col-md-8 col-xs-12 margin-top-1"}, 
					  React.createElement("h3", null, "Do you want to be part of the Artfactum community?")
					), 
					React.createElement("div", {className: "col-lg-4 col-md-4 col-xs-12 margin-top-1"}, 
					  React.createElement("div", {class: "btn-group"}, 
					    React.createElement("button", {type: "button", class: "btn btn-default"}, "Social Login"), 
					    React.createElement("button", {type: "button", class: "btn btn-default"}, "Social Login")
					  )
					  
					)
					
				  )/*end row*/
				), 
                
				React.createElement("div", {className: "footer"}, 
				  React.createElement(Footer, null)
				)
				
		      )	  
				
			)
		
		  ), 

		React.createElement("div", {className: "parallax__group"}, 
		React.createElement("div", {className: "parallax__layer parallax__layer--back"}), 
		React.createElement("div", {className: "parallax__layer parallax__layer--base"}, 

		React.createElement("div", {id: "section-two"}, 

		React.createElement("article", {id: "signup-icons"}, 
		 
			React.createElement("div", null, 
			  
			React.createElement("img", {src: "icons/icons/png/32px/pencil2.png"}), 
			React.createElement("p", null, "Create your own Gallery")
			  
			), 
			
			React.createElement("span", null), 
			React.createElement("div", null, 
			  React.createElement("img", {src: "icons/icons/png/32px/coin.png"}), 
			  React.createElement("p", null, "Sell your artworks")
			), 
			React.createElement("span", null), 
			React.createElement("div", null, 
			  React.createElement("img", {src: "icons/icons/png/32px/happy.png"}), 
			  React.createElement("p", null, "Get paid discovering art")
			), 
			React.createElement("div", null, 
			  React.createElement("img", {src: "icons/icons/png/32px/users.png"}), 

			  React.createElement("p", null, "A global community")
			), 
			React.createElement("span", null), 
			React.createElement("div", null, 
			  React.createElement("img", {src: "icons/icons/png/32px/volume-high.png"}), 
			  React.createElement("p", null, "Democratized visibility")
			), 
			React.createElement("span", null), 
			React.createElement("div", null, 
			  React.createElement("img", {src: "icons/icons/png/32px/loop.png"}), 
			  React.createElement("p", null, "Best commission ever")
			)
			
		  )
		  
		), 
		React.createElement("div", {className: "below-article"}, 
			React.createElement("strong", null, "The artistic community you were waiting for")
		  )
		), 

		React.createElement("div", {className: "parallax__group"}, 
		React.createElement("div", {className: "parallax__layer parallax__layer--back"}

		), 
		React.createElement("div", {className: "parallax__layer parallax__layer--base"}

		)

		)

      )
    )
  )

  );
  
}

});

/*React.render(
  <Signup url='data.json'/>,
  document.getElementById('artfactum')
);*/


/*var Footer = React.createClass({
render: function(){

  return (
 
	<footer className='container'>
	  <div className='row'>
		<ul className='breadcrumb'>
		  <li><a href='#'>About us</a></li>
		  <li><a href='#'>Legal</a></li>
		  <li><a href='#'>F.A.Q.</a></li>
		  <li><a href='#'>Developers</a></li>
		  <li><a href='#'>Ads/Sponsorship</a></li>
		  <li><a href='#'>Contact</a></li>
		</ul>
	  </div>
	</footer>
 
  );


}
});
*/

module.exports = TopNavBar;
},{"./../Footer/Footer.js":2,"./signup-phones.css":4,"./signup.css":5}],7:[function(require,module,exports){
var css = ".top-nav{\r\n\r\n  width: 98%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n  background: white;\r\n  \r\n}\r\n\r\n.tabs:active{\r\n\t\r\n\tcolor: tomato;\r\n\tbox-shadow: inset 0px -5px blue;\r\n    -webkit-transition: all 0.15s linear;\r\n\ttransition: all 0.15s linear;\r\n\t\r\n}\r\n\r\n.tabs:focus{\r\n\tcolor: tomato;\r\n\tbox-shadow: inset 0px -5px tomato;\r\n\r\n}\r\n\r\n\r\n.navbar{\r\n  background: white;\r\n  border: none;\r\n}\r\n\r\n.search{\r\n\r\n  border: none;\r\n  outline: none;\r\n  box-shadow: 0 0 0 0 white;\r\n  \r\n}\r\n\r\n.search-gl{\r\n  background: white;\r\n  border:none;\r\n  outline: none;\r\n}\r\n\r\n.search-box{\r\n\r\n  overflow:hidden; \r\n \r\n}"; (require("C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify"))(css); module.exports = css;
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":23}],8:[function(require,module,exports){
'use strict';


var Router = window.ReactRouter,
    Route = Router.Route,
    Routes = Router.Routes,
	Link = Router.Link,
    RouteHandler = Router.RouteHandler;

require('./TopNav.css');
	
var TopNav = React.createClass({displayName: 'TopNav',

  render: function(){
  
    return (
	
	  React.createElement("div", {className: "row top-nav"}, 
		React.createElement("nav", {className: "navbar navbar-default", role: "navigation"}, 
		  React.createElement("div", {className: "navbar-header"}, 
			React.createElement("button", {type: "button", className: "navbar-toggle", 'data-toggle': "collapse", 
			  'data-target': "#af-navbar-collapse-1"}, 
			  React.createElement("span", {className: "sr-only"}, "Navigate"), 
			  React.createElement("span", {className: "icon-bar"}), 
			  React.createElement("span", {className: "icon-bar"}), 
			  React.createElement("span", {className: "icon-bar"})
			), 
			React.createElement("img", {className: "top-logo-holder", src: "images/logo_+_256.png"})
		  ), 
		  React.createElement("div", {ref: "collapsible", 'data-toggle': "false", className: "collapse navbar-collapse", id: "af-navbar-collapse-1"}, 
			React.createElement("ul", {className: "nav navbar-nav search-wrapper"}, 
			  React.createElement("li", {className: "active search-box"}, 
				React.createElement("form", {className: "navbar-form navar-left", role: "search"}, 

				  React.createElement("div", {className: "form-group"}, 
					React.createElement("div", {className: "input-group"}, 
					  React.createElement("input", {type: "text", className: "search form-control", placeholder: "Search"}), 
					  React.createElement("span", {className: "search-gl input-group-addon glyphicon glyphicon-search"})
					)
				  )
				 
				)
			  ), 		  
			  React.createElement("li", {className: "dropdown"}, 
				React.createElement("a", {href: "#", className: "top-drop dropdown-toggle", 'data-toggle': "dropdown"}, 
				  React.createElement("span", {className: "glyphicon glyphicon-align-justify"})
				), 
				React.createElement("ul", {className: "dropdown-menu"}, 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Something")), 
				  React.createElement("li", {className: "divider"}), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link")), 
				  React.createElement("li", {className: "divider"}), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "One more separated "))
				)
			  ), 
			  React.createElement("li", null, React.createElement(Link, {className: "tabs", to: "browsecollections"}, "Browse")), 
			  React.createElement("li", null, React.createElement(Link, {className: "tabs", to: "collections"}, "Collections")), 
			  React.createElement("li", null, React.createElement(Link, {className: "tabs", to: "marketplace"}, "Marketplace"))
			  
			), 
			
			React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
			  React.createElement("li", null, React.createElement(Link, {className: "tabs", to: "mygallery"}, "My Gallery")), 
			  React.createElement("li", null, React.createElement(Link, {className: "tabs", to: "mymarketplace"}, "My Marketplace")), 
			  React.createElement("li", {className: "dropdown"}, 
				React.createElement("a", {href: "#", className: "top-drop dropdown-toggle", 'data-toggle': "dropdown"}, 
				  React.createElement("span", {className: "glyphicon glyphicon-search"}), 
				  React.createElement("b", {className: "caret"})
				), 
				React.createElement("ul", {className: "dropdown-menu"}, 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
				  React.createElement("li", {className: "divider"}), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
				)
			  )
			)
		  )/*-- /.navbar-collapse --*/
		
		)
		
	  )
	
	);
  
  }

});

module.exports = TopNav;
},{"./TopNav.css":7}],9:[function(require,module,exports){
var css = "\r\n\r\n.sorter{\r\n  \r\n  width:100%;\r\n  position:relative;\r\n  \r\n}\r\n\r\n.sorter div{\r\n  position:absolute;\r\n  right: 4em;\r\n}\r\n\r\n.row{\r\n\r\n  //border: solid black 2px;\r\n  \r\n}\r\n\r\n\r\n.tomato-button{\r\n\r\n  border-radius: 15px;\r\n  background: white;\r\n  border: tomato 2px solid;\r\n  color: tomato;\r\n  \r\n}\r\n\r\n\r\n.sort{\r\n\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  \r\n}\r\n\r\n.sorter{\r\n  \r\n  position:relative;\r\n  display:block;\r\n  width:100%;\r\n  height:2em;\r\n  \r\n}\r\n\r\n.masonry-row{\r\n  position:relative;\r\n  top:2em;\r\n}\r\n\r\n\r\n.list{\r\n  \r\n  width:100%;\r\n  margin:0;\r\n  padding:0;\r\n  \r\n}\r\n\r\n.list li{\r\n  position: relative;\r\n  text-align:right;\r\n  list-style:none;\r\n  width: 100%;\r\n  margin:0;\r\n  padding:0;\r\n  margin-top:5px;\r\n  color: slategray;\r\n}\r\n\r\n.list li a{\r\n  position:relative;\r\n  width:100%;\r\n  color: #000;\r\n  font-size:1.1em;\r\n}\r\n\r\n.item{\r\n  \r\n  width: 155px;\r\n  padding:.25em;\r\n  \r\n}\r\n\r\n\r\n.item img{\r\n\r\n  box-shadow: 0 0 4px 1px rgba(10,30,10,0.4);\r\n\r\n}\r\n\r\n.masonry{\r\n\r\n  width:90%;\r\n  height:100%;\r\n  position:relative;\r\n  margin-top:2.5em;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n \r\n \r\n}\r\n\r\n.browse-categories-dt{\r\n  position:relative;\r\n  top:2.5em;\r\n}\r\n\r\n.browse-sort{\r\n\r\n  position:relative;\r\n\r\n}\r\n\r\n.masonries{\r\n  position:relative;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n  position:relative;\r\n  height:100%;\r\n  width: 96%;\r\n  overflow:hidden;\r\n}\r\n\r\n.browse-categories{\r\n\r\n  display: none;\r\n\r\n}\r\n"; (require("C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify"))(css); module.exports = css;
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":23}],10:[function(require,module,exports){
'use strict'


//js
var TopNav = React.createFactory(require('./../TopNav/TopNav.js')),
    Masonry = require('./../masonry/masonry.js');

 
//css
require('./BrowseCollections.css');
require('./phones.css');


var BrowseCollections = React.createClass({displayName: 'BrowseCollections',

  getInitialState: function(){
  
    return ({
	
	  images: ['images/honey.jpg', 'images/city.jpg', 'images/picasso.png','images/egon.jpg','images/dogs.png', 'images/egon_land.jpg', 'images/flowers_big.jpg','images/Logo_+_vector.png'] 
	  
	});

  }, 
  
  getDefaultProps: function(){
  
    return {
	
	  images: ['images/picasso.png','images/egon.jpg','images/dogs.png', 'images/egon_land.jpg', 'images/flowers_big.jpg','images/Logo_+_vector.png'],
	  category: ['All', 'Applied', 'Digital', 'Original', 'Literature', 'Performing', 'Public', 'Music'],
	  sortingList: ['Recent', 'Most Curated', 'Most Viewed', 'Most Followed', 'Undiscovered', 'Oldest']
	};
  
  },

  handleClick: function(i,e){
    
	var domNode = this.getDOMNode();
	
	var elem = domNode.querySelectorAll('.browse-images')[i],
	    tag = $(elem).data('expression') + ' Art',
	    self = this,
		newImages = ['images/picasso.png','images/egon.jpg','images/dogs.png', 'images/egon_land.jpg', 'images/flowers_big.jpg','images/Logo_+_vector.png'],
		images = [],
		url;
	
	//can use flickr for dummy data
	url = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
	
	$.getJSON(url,{
	  tags: tag,
	  tagmode: 'any',
	  format: 'json'
	}).done(function(data){
	  $.each( data.items, function( i,item ){
	    newImages.push(item.media.m);
		if (i === 13){
		  return false;
		}
	  });
	}).always( function(){
	  self.setState({images:newImages});
	});

  },
  
  handleSort: function(i){
    
	var domNode = this.getDOMNode();
	
	var elem = domNode.querySelectorAll('.sortingList')[i],
	    tag = $(elem).data('expression');
		alert(tag);
	
  },
  
  render: function(){
  
    var self = this;
	
	var categories = this.props.category.map( function(items,i) {	
	  
	  return (
	    React.createElement("li", {'data-expression': items, className: "browse-images"}, 
		  React.createElement("a", {ref: "category", 
		    onClick: self.handleClick.bind(self,i), 
			key: i, 
			href: "#"}, 
			items
		  )
		)	
	  );
	});
	
	var sortingList = this.props.sortingList.map( function(items,i) {	
	  
	  return (
	 	React.createElement("li", {'data-expression': items, onClick: self.handleSort.bind(self,i), className: "sortingList"}, 
		  React.createElement("a", {ref: "sort", 
			 key: i, 
			 href: "#"}, 
			 items
		  )
		)
	  );
	});
	
    return (
	  React.createElement("div", {className: "browseCollections"}, 
     	React.createElement(TopNav, null), 
		  React.createElement("div", {className: "container"}, 
            React.createElement("div", {className: "row"}, 
              React.createElement("div", {className: "col-xs-4"}), 
			   React.createElement("div", {className: "col-xs-8"}, 
				React.createElement("div", {className: "btn-group browse-categories"}, 
				  React.createElement("button", {className: "btn btn-default dropdown-toggle tomato-button", 'data-toggle': "dropdown"}, 
			        React.createElement("span", {className: "sort"}, "Browse"), 
					React.createElement("span", {className: "caret"})
			      ), 
				  React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
				    categories
				  )
				), 
				
				React.createElement("div", {className: "sorter"}, 
				    React.createElement("div", {className: "btn-group"}, 
			          React.createElement("button", {className: "btn btn-default dropdown-toggle tomato-button", 'data-toggle': "dropdown"}, 
			            React.createElement("span", {className: "sort"}, "sort"), " ", React.createElement("span", {className: "caret"})
			          ), 
				      React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
			            sortingList
		              )
				    )
			      )
                ), 
			    React.createElement("div", {className: "col-xs-4 col-md-2"}, 
				  React.createElement("ul", {className: "list browse-categories-dt"}, 
			        categories
				  )
			    ), 
			    React.createElement("div", {className: "col-xs-12 col-md-10"}, 
			      React.createElement(Masonry, {images: this.state.images})
			    )
		      )/*end row*/
		    )
		  
		)		
		
	);
  
  }

});

module.exports = BrowseCollections;



},{"./../TopNav/TopNav.js":8,"./../masonry/masonry.js":17,"./BrowseCollections.css":9,"./phones.css":11}],11:[function(require,module,exports){
var css = "\r\n\r\n@media (max-width:986px){\r\n\r\n\r\n.browse-categories{\r\n\r\n  display: block;\r\n  position:absolute;\r\n  right:12.5em;\r\n  z-index:9999;\r\n  \r\n}\r\n\r\n.browse-categories-dt{\r\n  display:none;\r\n}\r\n\r\n\r\n}"; (require("C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify"))(css); module.exports = css;
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":23}],12:[function(require,module,exports){
module.exports=require(3)
},{"C:\\Users\\Justin\\documents\\github\\af\\app\\scripts\\components\\Footer\\footer.css":3,"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":23}],13:[function(require,module,exports){
module.exports=require(2)
},{"./footer.css":12,"C:\\Users\\Justin\\documents\\github\\af\\app\\scripts\\components\\Footer\\Footer.js":2}],14:[function(require,module,exports){
var css = ".route-header{\r\n  position:absolute;\r\n  height:100px;\r\n  background: #eee;\r\n  padding:1em;\r\n  width:100%;\r\n  left:0;\r\n  top:0;\r\n}\r\n\r\n.views{\r\n\r\n  position:absolute;\r\n  top: 100px;\r\n  width:100%;\r\n  left:0;\r\n\r\n}"; (require("C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify"))(css); module.exports = css;
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":23}],15:[function(require,module,exports){
'use strict';


var UserProfile = React.createFactory(require('./user-profile/user-profile.js')),
    TopNav = React.createFactory(require('./TopNav/TopNav.js')),
    Signup = React.createFactory(require('./Signup/signup.js')),
    BrowseCollections = React.createFactory(require('./browse-collections/browse-collections.js')),
    Footer = React.createFactory(require('./footer/footer.js'));
	
	
var store = require('./../stores/store.js'),
    Dispatcher = require('./../dispatcher.js'),
    Actions = require('./../actions/actions.js'),
    Flux = require('delorean').Flux;  
	
var Router = window.ReactRouter,
    Route = Router.Route,
    Routes = Router.Routes,
	Link = Router.Link,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute, 
	RouteHandler = Router.RouteHandler;

	
require('./main.css');


//better to render to a container or to document.html?	
/*React.render (
  <UserProfile></UserProfile>,
  document.getElementById('container')
);*/


// Make Welcome and NotFound(404) separate components

var Welcome = React.createClass({displayName: 'Welcome',
  render: function() {
    return (
	  React.createElement("div", {className: "routeHandler"}, 
 	     React.createElement("h2", null, "Welcome")
	  )
	);
  }
});


var NotFound = React.createClass({displayName: 'NotFound',
  render: function() {
    return React.createElement("h2", null, "NotFound");
  }
});

var About = React.createClass({displayName: 'About',
  render: function() {
    return React.createElement("h2", null, "About");
  }
});

var Collections = React.createClass({displayName: 'Collections',
  render: function() {
    return React.createElement("h2", null, "Collections");
  }
});

var Marketplace = React.createClass({displayName: 'Marketplace',
  render: function() {
    return React.createElement("h2", null, "Marketplace");
  }
});

var MyGallery = React.createClass({displayName: 'MyGallery',
  render: function() {
    return React.createElement("h2", null, "Marketplace");
  }
});

var MyMarketplace = React.createClass({displayName: 'MyMarketplace',
  render: function() {
    return React.createElement("h2", null, "Marketplace");
  }
});

var App = React.createClass({displayName: 'App',
  
  getInitialState: function(){
    return {data: []}
  },
  
  mixins: [Flux.mixins.storeListener],
  
  storeDidChange: function(Store){
    this.setState({ data: store.store.data });
  },
  
  render: function() {
    return (
	  React.createElement("div", {className: "routeHandler route-header"}, 
	    React.createElement(Link, {to: "welcome"}, React.createElement("button", null, "Welcome")), 
	    React.createElement(Link, {to: "user-profile"}, React.createElement("button", null, "user profile")), 
	    React.createElement(Link, {to: "topnav"}, React.createElement("button", null, "topnav")), 
	    React.createElement(Link, {to: "signup"}, React.createElement("button", null, "signup")), 
	    React.createElement(Link, {to: "browsecollections"}, React.createElement("button", null, "browse collections")), 
	    React.createElement(Link, {to: "footer"}, React.createElement("button", null, "footer")), 
 	    React.createElement("div", {className: "views"}, 
		  React.createElement(RouteHandler, {data: this.state.data})
	    )
	  )
	);
  }
});

var routes = (
  React.createElement(Route, {handler: App, path: "/"}, 
	React.createElement(Route, {path: "/user-profile", name: "user-profile", handler: UserProfile}), 
    React.createElement(Route, {path: "/", name: "welcome", handler: Welcome}), 
    React.createElement(Route, {path: "/topnav", name: "topnav", handler: TopNav}), 
    React.createElement(Route, {path: "/signup", name: "signup", handler: Signup}), 
    React.createElement(Route, {path: "/footer", name: "footer", handler: Footer}), 
    React.createElement(Route, {path: "/about", name: "about", handler: About}), 
    React.createElement(Route, {path: "/browsecollections", name: "browsecollections", handler: BrowseCollections}), 
    React.createElement(Route, {path: "/collections", name: "collections", handler: Collections}), 
    React.createElement(Route, {path: "/marketplace", name: "marketplace", handler: Marketplace}), 
    React.createElement(Route, {path: "/mygallery", name: "mygallery", handler: MyGallery}), 
    React.createElement(Route, {path: "/mymarketplace", name: "mymarketplace", handler: MyMarketplace}), 
	React.createElement(NotFoundRoute, {handler: NotFound}), 
	React.createElement(DefaultRoute, {handler: Welcome, pageTitle: "Home"})
  )
);


Router.run(routes, Router.HistoryLocation, function (Handler,state) {
  
  React.render( React.createElement(Handler, {dispatcher: Dispatcher}), document.getElementById('container') );
  
});



},{"./../actions/actions.js":1,"./../dispatcher.js":20,"./../stores/store.js":21,"./Signup/signup.js":6,"./TopNav/TopNav.js":8,"./browse-collections/browse-collections.js":10,"./footer/footer.js":13,"./main.css":14,"./user-profile/user-profile.js":19,"delorean":34}],16:[function(require,module,exports){
var css = "#transition-in{\r\n  transition: opacity .5s ease;\r\n  transition: transform .5s ease;\r\n  -webkit-transform: scale(1);\r\n  opacity: 1;\r\n   \r\n}\r\n#transition-out {\r\n  transition: opacity .5s ease;\r\n  transition: transform .5s ease;\r\n  -webkit-transform: scale(1) translateX(1000px);\r\n  opacity: .9;\r\n}\r\n\r\n#transition-middle {\r\n\r\n  transition: opacity: .1s ease;\r\n  transition: transform: .1s ease;\r\n  -webkit-transform: scale(0) translateX(0px);\r\n  opacity: .5;\r\n\r\n}\r\n\r\n@keyframes appear {\r\n  from {opacity: 0; transform: scale(.8);}\r\n  to {opacity: 1; transform: scale(1)}\r\n}\r\n\r\n@keyframes disappear {\r\n  from {opacity: 1; transform: scale(1);}\r\n  to {opacity: 0; transform: scale(.9) rotateX(0deg) translateZ(-1500px);}\r\n}\r\n\r\n.masonry-gallery{\r\n  perspective: 1500px;\r\n}\r\n\r\n#short{\r\n  \r\n  width:120px;\r\n}\r\n\r\n#long{\r\n  width:180px;\r\n}"; (require("C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify"))(css); module.exports = css;
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":23}],17:[function(require,module,exports){
'use strict';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    MasonryLayout = require('masonry-layout'),
    imagesLoaded = require('imagesloaded');

//css
require('./masonry.css');

var Masonry = React.createClass({displayName: 'Masonry',

  getInitialState: function(){
  
    return ({images: ['images/honey.jpg', 'images/city.jpg', 'images/picasso.png','images/egon.jpg','images/dogs.png', 'images/egon_land.jpg', 'images/flowers_big.jpg','images/Logo_+_vector.png'] });

  }, 
  
  componentDidMount: function(){
   
    var container = document.querySelector('.masonry');
	var msnry;
    imagesLoaded( container, function(){
	  
	  msnry = new MasonryLayout( container, {
	    //options
	    columnWidth:160,
	    itemSelector: '.item'
	  });
    
	});
	
  },
  
  componentDidUpdate: function(){
  
    var container = document.querySelector('.masonry');
   
	var msnry;
	
    imagesLoaded( container, function(){
	  
	  msnry = new MasonryLayout( container, {
	    //options
	    columnWidth:160,
	    itemSelector: '.item'
	  });
	     
	  container.setAttribute('id','transition-out');
      
      setTimeout( function(){
	    container.setAttribute('id','transition-middle');
			
	  },300);	  
	 
      setTimeout( function(){
	   container.setAttribute('id','transition-in');
	  },400);
	
	});
  
  },
  
  handleImageClick: function(i){
   
  },
  
  render: function(){
  
    var widths = ['short','long','short','long','short','long','short','long','short'];
    var images = this.props.images.map( function(image,i) {
	  return (
	    React.createElement("div", null, 
		  React.createElement("div", {ref: "images", className: "item"}, 
		      React.createElement("img", {key: "images", className: "img-responsive", src: image, alt: "picasso"})		    
		  )
		)
	  );
	}.bind(this));
	
    return (
	 
	  React.createElement("div", {className: "masonry-gallery"}, 
   	    React.createElement("div", {ref: "masonry", className: "masonry"}, 
		  React.createElement("div", {key: "masonries", className: "masonries"}, 
		      images	
		  )
	    )
	  )
	);
  
  }

});

module.exports = Masonry;
},{"./masonry.css":16,"imagesloaded":38,"masonry-layout":41}],18:[function(require,module,exports){
var css = ".user-profile .container{\r\n \r\n  width:100%;\r\n  \r\n\r\n}\r\n\r\n\r\n.user-profile-head{\r\n\r\n  height: 14em;\r\n  background: purple;\r\n  \r\n}\r\n\r\n.user-profile-head h1{\r\n\r\n  position: relative;\r\n  top:1.5em;\r\n  width:100%;\r\n  height:7em;\r\n  color: white;\r\n \r\n}\r\n\r\n.photo-circle{\r\n  position:relative;\r\n  top:1em;\r\n  border: solid #eee 4px;\r\n  box-shadow: 0 0 4px 1px white;\r\n  border-radius: 50%;\r\n  width: 3em;\r\n  height: 3em;\r\n  display:block;\r\n  overflow:hidden;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  display:cover;\r\n  background: white;\r\n}\r\n\r\n.inner-circle{\r\n\r\n  position:absolute;\r\n  z-index:9999;\r\n  width:100%;\r\n  height:100%;\r\n  top: .75em;\r\n}\r\n\r\n.user-profile-bottom{\r\n\r\n  position:relative;\r\n  top:300px;\r\n  overflow:hidden;\r\n  background: #3a3a3a;\r\n  color:white;\r\n\r\n}\r\n\r\na:visited{\r\n  color: black;\r\n}\r\n\r\n.user-profile-forms{\r\n\r\n  width: 80%;\r\n  top:1em;\r\n\r\n}\r\n\r\n/*make width wider on wider screens*/\r\n\r\n.user-profile-forms article{\r\n  top:2em;\r\n  left:0; \r\n  width:90%;\r\n  height: 270px;\r\n \r\n}\r\n\r\narticle p{\r\n  margin-top:1em;\r\n}\r\n\r\narticle .btn-group{\r\n\r\n  margin-left:5em;\r\n  margin-right:5em;\r\n\r\n}\r\n\r\n.dropdown-toggle{\r\n  background:tomato;\r\n  color:white;\r\n}\r\n\r\n.button-wrapper{\r\n  position:relative;\r\n  top:1em;\r\n  width:100%;\r\n}\r\n\r\n.user-profile-logo-bottom{\r\n\r\n  width:200px;\r\n \r\n}\r\n\r\n.user-profile-top-logo{\r\n\r\n  width:3em;\r\n\r\n}\r\n\r\n.user-profile-search{\r\n  padding-top:.5em;\r\n}\r\n\r\n.top-logo-holder{\r\n  width: 50px;\r\n  height:50px;\r\n  \r\n}\r\n\r\n.article{\r\n  position: relative;\r\n  width:400px;\r\n  border: solid pink 1px;\r\n}\r\n\r\n\r\n\r\n.top-drop, .top-drop:active{\r\n\r\n  background: inherit;\r\n   \r\n}\r\n\r\n.top-drop:hover{\r\n  background: #d1ccca;\r\n}\r\n\r\n.footer{\r\n\r\n  color:white;\r\n  position:relative;\r\n \r\n}\r\n\r\n/*\r\n * jQuery File Upload Plugin CSS 1.3.0\r\n * https://github.com/blueimp/jQuery-File-Upload\r\n *\r\n * Copyright 2013, Sebastian Tschan\r\n * https://blueimp.net\r\n *\r\n * Licensed under the MIT license:\r\n * http://www.opensource.org/licenses/MIT\r\n */\r\n\r\n.fileinput-button {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.fileinput-button input {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  opacity: 0;\r\n  -ms-filter: 'alpha(opacity=0)';\r\n  font-size: 200px;\r\n  direction: ltr;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Fixes for IE < 8 */\r\n@media screen\\9 {\r\n  .fileinput-button input {\r\n    filter: alpha(opacity=0);\r\n    font-size: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n"; (require("C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify"))(css); module.exports = css;
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":23}],19:[function(require,module,exports){
'use strict'

var Router = window.ReactRouter,
    Route = Router.Route,
    Routes = Router.Routes,
	Link = Router.Link,
    RouteHandler = Router.RouteHandler;
	
var Actions = require('./../../actions/actions.js'),
	TopNav = require('./../TopNav/TopNav.js'),
	Footer = require('./../footer/footer.js');
  
require('./user-profile.css');
require('../../../styles/color-swatch.css');
 
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
}; 
 

var UserProfile = React.createClass({displayName: 'UserProfile',
  
  getDefaultProps: function(){
    return {
	  data: 'data'
	}
  },
  
  getInitialState: function(){
    return { 
	  username: 'user profile'
	} 
  },
  
  componentDidMount: function(){
    
	// Change this to the location of your server-side upload handler:
	  
    var url = '';
    $('#fileupload').fileupload({
	
        url: url,
        dataType: 'json',
        done: function (e, data) {
            
		  $.each(data.result.files, function (index, file) {
          
  		    $('<p></p>').text(file.name).appendTo('#files');
				
          });
			
        },
		fail: function(){  
		       
		  alert('invalid url');
            
		},
	    progressall: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .progress-bar').css(
                'width',
                progress + '%'
            );
        }
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');    
  
  },
  
  handleSubmit: function(e){  
    e.preventDefault();
	var userInput = JSON.stringify($(form).serializeObject());
	/*Validate on the server
	  If valid then save to the store 
	  If not show a message
	*/
	
	var modal = this.refs.modal.getDOMNode(),
	    form = this.refs.form.getDOMNode();
	$(modal).find('.modal-body').html('<p>' + $('form').serializeObject() + '</p>');
	$(modal).modal('show');
	Actions.setUserProfile(
	  JSON.stringify($(form).serializeObject())
	);
  },
  
  render: function(){
    
	var data = this.props.data;
    var userProfile = data.userProfile;
	
    return (
	 
      React.createElement("div", {className: "user-profile"}, 	  
	    
		React.createElement(TopNav, null), 
		    React.createElement("div", {className: "modal fade", ref: "modal", id: "basicModal", tabindex: "-1", role: "dialog", 
			    'aria-labelledby': "basicModal", 'aria-hidden': "true"}, 
				React.createElement("div", {className: "modal-dialog"}, 
				  React.createElement("div", {className: "modal-content"}, 
				    React.createElement("div", {className: "modal-header"}, 
					  React.createElement("button", {type: "button", className: "close", 'data-dismiss': "modal", 'aria-hiddden': "true"}, "x"), 
	                  React.createElement("h4", {className: "modal-title", id: "myModalLabel"}, "Modal title")
                    ), 
                  React.createElement("div", {className: "modal-body"}, 
                    React.createElement("h3", null, "Modal body")
                  ), 
                  React.createElement("div", {className: "modal-footer"}, 
                    React.createElement("button", {type: "button", className: "btn btn-default", 'data-dismiss': "modal"}, "Close"), 
           			React.createElement("button", {type: "button", className: "btn btn-primary"}, "Save Changes")
                  )					
                )					
              )					
            ), 				
	    React.createElement("div", {className: "container"}, 
		    
		  React.createElement("div", {className: "row user-profile-head"}, 
		   
		    React.createElement("div", {className: "col-xs-12"}, 
		    
			  React.createElement("h1", {className: "text-center vertical-align"}, 
			  
			    this.state.username, 
			    
			    React.createElement("div", {className: "photo-circle"}, 
				  React.createElement("div", {className: "inner-circle"}, 
				    React.createElement("img", {src: "images/camera.png", alt: "camera", title: "camera"})
				  )
				)
			  )
		    )
		   
		  ), /*end second row*/
		  
		  React.createElement("div", {className: "row user-profile-menu"}, 
		  
		    React.createElement("div", {className: "col-xs-12"}, 			
			  React.createElement("menu", null, 
			  
			    React.createElement("menuitem", null, React.createElement("a", {href: "#myAccount"}, "My Account "), "| "), 
			    React.createElement("menuitem", null, React.createElement("a", {href: "#aboutMe"}, "About Me "), "| "), 
			    React.createElement("menuitem", null, React.createElement("a", {href: "#social"}, "Social "), "| "), 
			    React.createElement("menuitem", null, React.createElement("a", {href: "#background"}, "Background "), "| "), 
			    React.createElement("menuitem", null, React.createElement("a", {href: "#interests"}, "Interests"))
			  
			  )
			
			)
			
		  ), /*end third row*/
		  
          React.createElement("form", {ref: "form", role: "form", onSubmit: this.handleSubmit}, 
		  
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
			React.createElement("div", {className: "col-xs-12"}, 
			    
			  React.createElement("h3", {id: "myAccount", className: "underline"}, "My Account"), 
			  React.createElement("strong", {className: ""}, "*required")
	
			)
          
		  ), /*end fourth row*/
		  
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
		  
		    React.createElement("div", {className: "col-xs-12 col-md-8 col-md-offset-2"}, 
			  
			  React.createElement("article", null, 
			  
			    React.createElement("p", null, "username"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", name: "username", className: "form-control", placeholder: "username", required: true})
				  
                ), 
			
			    React.createElement("p", null, "Artfactum url"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", name: "arfactumUrl", className: "form-control", placeholder: "url", required: true})
				  
                ), 
				
				React.createElement("div", {className: "center-block button-wrapper"}, 
                  React.createElement("div", {className: "btn-group"}, 
				    React.createElement("button", {type: "button", className: "btn btn-default dropdown-toggle", 'data-toggle': "dropdown"}, 
                      "Artist ", React.createElement("span", {className: "caret"})
                    ), 
                    React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
                      React.createElement("li", null, React.createElement("a", {href: "#"}, "Artist")), 
                      React.createElement("li", null, React.createElement("a", {href: "#"}, "Art Lover"))
                    )
                  )
				)
			
			  )
			
			)			
		  
		  ), /*end fifth row*/
		
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
			React.createElement("div", {className: "col-xs-12"}, 
			    
			  React.createElement("h3", {id: "aboutMe", className: "underline"}, "About Me")
			 
			)
          
		  ), /*end sixth row*/
		  
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
		  
		    React.createElement("div", {className: "col-xs-12 col-md-8 col-md-offset-2"}, 
			  
			  React.createElement("article", null, 
			  
			    React.createElement("p", null, "Living in"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", name: "livingIn", className: "form-control", placeholder: "country"}), 
				  React.createElement("span", {className: "input-group-addon"}, "@")
			  
                ), 
			
			    React.createElement("p", null, "Spoken languages"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", name: "spokenLanguages", className: "form-control", placeholder: "url"}), 
				  React.createElement("span", {className: "input-group-addon"}, "@")
			  
                ), 
				
				React.createElement("p", {className: "gray"}, "Suggestions -",  
				  React.createElement("button", {type: "button", className: "btn btn-default"}, "English"), 
				  React.createElement("button", {type: "button", className: "btn btn-default"}, "Spanish")
				)
                
			  )
			
			)			
		  
		  ), /*end seventh row*/
		
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
			React.createElement("div", {className: "col-xs-12"}, 
			    
			  React.createElement("h3", {id: "social", className: "underline"}, "Social")
			 
			), 
			
		    React.createElement("div", {className: "row center-block"}, 
			
			  React.createElement("div", {className: "col-xs-12 col-md-4 padding1"}, 
			
			    React.createElement("span", {className: "btn-lg btn-primary center-block"}, "Facebook")
			
			  ), 
          
		      React.createElement("div", {className: "col-xs-12 col-md-4 padding1"}, 
			
			    React.createElement("span", {className: "btn-lg btn-primary center-block"}, "Twitter")
			
			  ), 
			
			  React.createElement("div", {className: "col-xs-12 col-md-4 padding1"}, 
			
			    React.createElement("span", {className: "btn-lg btn-primary center-block"}, "Google+")
			
			  )
			
		    )/*end sub-row*/
		  
		  ), /*end eighth row*/
		
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
			React.createElement("div", {className: "col-xs-12"}, 
			    
			  React.createElement("h3", {id: "background", className: "underline"}, "Artistic Background")
			 
			)
          
		  ), /*end ninth row*/
		  
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
		  
		    React.createElement("div", {className: "col-xs-12 col-md-8 col-md-offset-2"}, 
			  
			  React.createElement("article", null, 
			  
			    React.createElement("p", null, "Artistic Disciplines"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {name: "artisticDisciplines", type: "text", className: "form-control", placeholder: "country"})
			  
                ), 
				
				React.createElement("p", {className: "gray"}, "Suggestions -",  
				  React.createElement("button", {type: "button", className: "btn btn-default"}, "Photography"), 
				  React.createElement("button", {type: "button", className: "btn btn-default"}, "Painting")
				), 
			
			    React.createElement("p", null, "Artistic CV"), 
			    
			    React.createElement("div", {className: "input-group"}, 
			      React.createElement("span", {className: "btn btn-success fileinput-button"}, 
                    React.createElement("i", {className: "glyphicon glyphicon-plus"}), 
                    React.createElement("span", null, " Select file..."), 
                    React.createElement("input", {id: "fileupload", type: "file", name: "files[]", multiple: true})
                  ), 
				  React.createElement("span", {id: "files", className: "files"}), 
				  React.createElement("p", null), 
                  React.createElement("div", {id: "progress", className: "progress"}, 
                    React.createElement("div", {className: "progress-bar progress-bar-success"})
                  ), 
	              React.createElement("p", null)
                )
	
				  /*<span className="input-group-btn">
                    <button className="btn btn-default" type="button">Browse</button>
                  </span>*/
              
     			
			  )
			
			)			
		  
		  ), /*end tenth row*/
		
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
	 	    React.createElement("div", {className: "col-xs-12 "}, 
			    
			  React.createElement("h3", {id: "interests", className: "underline"}, 
				"Personal Interests"
		      )
			)
			  
		  ), " ", /*end 11th row*/
		  
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
		  
		    React.createElement("div", {className: "col-xs-12 col-md-8 col-md-offset-2"}, 
			  
			  React.createElement("article", null, 
			  
			    React.createElement("p", null, "Favorite art styles"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", name: "favoriteArtStyles", className: "form-control", placeholder: "username"}), 
			      
				  React.createElement("p", {className: "gray"}, "Suggestions -",  
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "English"), 
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "Spanish")
				  )
				  
				), 
			
			    React.createElement("p", null, "Featured interests"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", name: "featuredInterests", className: "form-control", placeholder: "url"}), 
			      
				  React.createElement("p", {className: "gray"}, "Suggestions -",  
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "English"), 
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "Spanish")
				  )
                
				), 
				 
				
				React.createElement("p", null, "Influences"), 
			  
				React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", name: "influences", className: "form-control", placeholder: "influences"}), 
			     
				  React.createElement("p", {className: "gray"}, "Suggestions -",  
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "Surrealism"), 
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "Cubism")
				  )
				
				), 
				
				React.createElement("div", {className: "center-block button-wrapper"}, 
                  React.createElement("div", {className: "btn-group"}, 
				    
					React.createElement("button", {type: "submit", className: "btn btn-active"}, 
                      "Save"
                    )
                  )
				
				)
		    
			  )
			
			)			
		  
		  ), " "/*end 12th row*/
		
		  ), 
		
		  React.createElement("div", {className: "row user-profile-bottom"}, 
		    React.createElement(Footer, null)
		  )/*end 13th row*/
		)
		
	  )
		
	);
	
  }
  
});



module.exports = UserProfile;
},{"../../../styles/color-swatch.css":22,"./../../actions/actions.js":1,"./../TopNav/TopNav.js":8,"./../footer/footer.js":13,"./user-profile.css":18}],20:[function(require,module,exports){
'use strict';

/*
 * Dispatchers are simple action dispatchers for stores.
 * Stores handle the related action.
 */
 
var Flux = require('delorean').Flux;
 
var store = require('./stores/store.js');
 
var Dispatcher = Flux.createDispatcher({
  setData: function (data) {
    this.dispatch('incoming-data', data);
  },
  setUserProfile: function (data) {
    this.dispatch('setUserProfile', data);
  },
  getStores: function () {
    return {increment: store};
  }
});
module.exports = Dispatcher;
},{"./stores/store.js":21,"delorean":34}],21:[function(require,module,exports){
'use strict';

var Flux = require('delorean').Flux;


var Store = Flux.createStore({
  
  data: {
    
	userProfile: 'user profile',
    
	photoAttributes: {
	
	  dateUploaded: null,
	  curatedIncrement: 0,
	  followedIncrement: 0,
	  viewedIncrement: 0,
	  isUndiscovered: true
	
	}
    
  },
  
  setData: function (data) {
    this.data = data;
    this.emit('change');
  },
  setUserProfile: function(data) {  
    this.data.userProfile = data;
	this.emit('change');
  },
  actions: {
    'incoming-data': 'setData',
	'setUserProfile': 'setUserProfile'
  }
});
var store = new Store();

module.exports = store;
},{"delorean":34}],22:[function(require,module,exports){
var css = "/*color swatch theme for artfactum signup page*/\r\n\r\n.tomato{\r\n  color:#e56e5c;\r\n}\r\n\r\n.tomato-background{\r\n  background:#e5635c;\r\n  color: white;\r\n}\r\n\r\n.dark-gray{\r\n\r\n  color: #3a3a3a;\r\n\r\n}\r\n\r\n.dark-gray-background{\r\n\r\n  background: #3a3a3a;\r\n  color:white;\r\n  \r\n}\r\n\r\n.chrome{\r\n\r\n  color: #d1ccca;\r\n\r\n}\r\n\r\n.chrome-background{\r\n\r\n  background: #d1ccca;\r\n  color: black;\r\n\r\n}\r\n\r\n.gray{\r\n  color: slategray;\r\n}\r\n"; (require("C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify"))(css); module.exports = css;
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":23}],23:[function(require,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],24:[function(require,module,exports){
"use strict";
var Promise = require("./promise/promise").Promise;
var polyfill = require("./promise/polyfill").polyfill;
exports.Promise = Promise;
exports.polyfill = polyfill;
},{"./promise/polyfill":28,"./promise/promise":29}],25:[function(require,module,exports){
"use strict";
/* global toString */

var isArray = require("./utils").isArray;
var isFunction = require("./utils").isFunction;

/**
  Returns a promise that is fulfilled when all the given promises have been
  fulfilled, or rejected if any of them become rejected. The return promise
  is fulfilled with an array that gives all the values in the order they were
  passed in the `promises` array argument.

  Example:

  ```javascript
  var promise1 = RSVP.resolve(1);
  var promise2 = RSVP.resolve(2);
  var promise3 = RSVP.resolve(3);
  var promises = [ promise1, promise2, promise3 ];

  RSVP.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `RSVP.all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  var promise1 = RSVP.resolve(1);
  var promise2 = RSVP.reject(new Error("2"));
  var promise3 = RSVP.reject(new Error("3"));
  var promises = [ promise1, promise2, promise3 ];

  RSVP.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @for RSVP
  @param {Array} promises
  @param {String} label
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
*/
function all(promises) {
  /*jshint validthis:true */
  var Promise = this;

  if (!isArray(promises)) {
    throw new TypeError('You must pass an array to all.');
  }

  return new Promise(function(resolve, reject) {
    var results = [], remaining = promises.length,
    promise;

    if (remaining === 0) {
      resolve([]);
    }

    function resolver(index) {
      return function(value) {
        resolveAll(index, value);
      };
    }

    function resolveAll(index, value) {
      results[index] = value;
      if (--remaining === 0) {
        resolve(results);
      }
    }

    for (var i = 0; i < promises.length; i++) {
      promise = promises[i];

      if (promise && isFunction(promise.then)) {
        promise.then(resolver(i), reject);
      } else {
        resolveAll(i, promise);
      }
    }
  });
}

exports.all = all;
},{"./utils":33}],26:[function(require,module,exports){
(function (process,global){
"use strict";
var browserGlobal = (typeof window !== 'undefined') ? window : {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var local = (typeof global !== 'undefined') ? global : (this === undefined? window:this);

// node
function useNextTick() {
  return function() {
    process.nextTick(flush);
  };
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function() {
    node.data = (iterations = ++iterations % 2);
  };
}

function useSetTimeout() {
  return function() {
    local.setTimeout(flush, 1);
  };
}

var queue = [];
function flush() {
  for (var i = 0; i < queue.length; i++) {
    var tuple = queue[i];
    var callback = tuple[0], arg = tuple[1];
    callback(arg);
  }
  queue = [];
}

var scheduleFlush;

// Decide what async method to use to triggering processing of queued callbacks:
if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else {
  scheduleFlush = useSetTimeout();
}

function asap(callback, arg) {
  var length = queue.push([callback, arg]);
  if (length === 1) {
    // If length is 1, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    scheduleFlush();
  }
}

exports.asap = asap;
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":37}],27:[function(require,module,exports){
"use strict";
var config = {
  instrument: false
};

function configure(name, value) {
  if (arguments.length === 2) {
    config[name] = value;
  } else {
    return config[name];
  }
}

exports.config = config;
exports.configure = configure;
},{}],28:[function(require,module,exports){
(function (global){
"use strict";
/*global self*/
var RSVPPromise = require("./promise").Promise;
var isFunction = require("./utils").isFunction;

function polyfill() {
  var local;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof window !== 'undefined' && window.document) {
    local = window;
  } else {
    local = self;
  }

  var es6PromiseSupport = 
    "Promise" in local &&
    // Some of these methods are missing from
    // Firefox/Chrome experimental implementations
    "resolve" in local.Promise &&
    "reject" in local.Promise &&
    "all" in local.Promise &&
    "race" in local.Promise &&
    // Older version of the spec had a resolver object
    // as the arg rather than a function
    (function() {
      var resolve;
      new local.Promise(function(r) { resolve = r; });
      return isFunction(resolve);
    }());

  if (!es6PromiseSupport) {
    local.Promise = RSVPPromise;
  }
}

exports.polyfill = polyfill;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./promise":29,"./utils":33}],29:[function(require,module,exports){
"use strict";
var config = require("./config").config;
var configure = require("./config").configure;
var objectOrFunction = require("./utils").objectOrFunction;
var isFunction = require("./utils").isFunction;
var now = require("./utils").now;
var all = require("./all").all;
var race = require("./race").race;
var staticResolve = require("./resolve").resolve;
var staticReject = require("./reject").reject;
var asap = require("./asap").asap;

var counter = 0;

config.async = asap; // default async is asap;

function Promise(resolver) {
  if (!isFunction(resolver)) {
    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
  }

  if (!(this instanceof Promise)) {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  }

  this._subscribers = [];

  invokeResolver(resolver, this);
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch(e) {
    rejectPromise(e);
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value, error, succeeded, failed;

  if (hasCallback) {
    try {
      value = callback(detail);
      succeeded = true;
    } catch(e) {
      failed = true;
      error = e;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (handleThenable(promise, value)) {
    return;
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    resolve(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

var PENDING   = void 0;
var SEALED    = 0;
var FULFILLED = 1;
var REJECTED  = 2;

function subscribe(parent, child, onFulfillment, onRejection) {
  var subscribers = parent._subscribers;
  var length = subscribers.length;

  subscribers[length] = child;
  subscribers[length + FULFILLED] = onFulfillment;
  subscribers[length + REJECTED]  = onRejection;
}

function publish(promise, settled) {
  var child, callback, subscribers = promise._subscribers, detail = promise._detail;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    invokeCallback(settled, child, callback, detail);
  }

  promise._subscribers = null;
}

Promise.prototype = {
  constructor: Promise,

  _state: undefined,
  _detail: undefined,
  _subscribers: undefined,

  then: function(onFulfillment, onRejection) {
    var promise = this;

    var thenPromise = new this.constructor(function() {});

    if (this._state) {
      var callbacks = arguments;
      config.async(function invokePromiseCallback() {
        invokeCallback(promise._state, thenPromise, callbacks[promise._state - 1], promise._detail);
      });
    } else {
      subscribe(this, thenPromise, onFulfillment, onRejection);
    }

    return thenPromise;
  },

  'catch': function(onRejection) {
    return this.then(null, onRejection);
  }
};

Promise.all = all;
Promise.race = race;
Promise.resolve = staticResolve;
Promise.reject = staticReject;

function handleThenable(promise, value) {
  var then = null,
  resolved;

  try {
    if (promise === value) {
      throw new TypeError("A promises callback cannot return that same promise.");
    }

    if (objectOrFunction(value)) {
      then = value.then;

      if (isFunction(then)) {
        then.call(value, function(val) {
          if (resolved) { return true; }
          resolved = true;

          if (value !== val) {
            resolve(promise, val);
          } else {
            fulfill(promise, val);
          }
        }, function(val) {
          if (resolved) { return true; }
          resolved = true;

          reject(promise, val);
        });

        return true;
      }
    }
  } catch (error) {
    if (resolved) { return true; }
    reject(promise, error);
    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value) {
    fulfill(promise, value);
  } else if (!handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) { return; }
  promise._state = SEALED;
  promise._detail = value;

  config.async(publishFulfillment, promise);
}

function reject(promise, reason) {
  if (promise._state !== PENDING) { return; }
  promise._state = SEALED;
  promise._detail = reason;

  config.async(publishRejection, promise);
}

function publishFulfillment(promise) {
  publish(promise, promise._state = FULFILLED);
}

function publishRejection(promise) {
  publish(promise, promise._state = REJECTED);
}

exports.Promise = Promise;
},{"./all":25,"./asap":26,"./config":27,"./race":30,"./reject":31,"./resolve":32,"./utils":33}],30:[function(require,module,exports){
"use strict";
/* global toString */
var isArray = require("./utils").isArray;

/**
  `RSVP.race` allows you to watch a series of promises and act as soon as the
  first promise given to the `promises` argument fulfills or rejects.

  Example:

  ```javascript
  var promise1 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("promise 1");
    }, 200);
  });

  var promise2 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("promise 2");
    }, 100);
  });

  RSVP.race([promise1, promise2]).then(function(result){
    // result === "promise 2" because it was resolved before promise1
    // was resolved.
  });
  ```

  `RSVP.race` is deterministic in that only the state of the first completed
  promise matters. For example, even if other promises given to the `promises`
  array argument are resolved, but the first completed promise has become
  rejected before the other promises became fulfilled, the returned promise
  will become rejected:

  ```javascript
  var promise1 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("promise 1");
    }, 200);
  });

  var promise2 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error("promise 2"));
    }, 100);
  });

  RSVP.race([promise1, promise2]).then(function(result){
    // Code here never runs because there are rejected promises!
  }, function(reason){
    // reason.message === "promise2" because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  @method race
  @for RSVP
  @param {Array} promises array of promises to observe
  @param {String} label optional string for describing the promise returned.
  Useful for tooling.
  @return {Promise} a promise that becomes fulfilled with the value the first
  completed promises is resolved with if the first completed promise was
  fulfilled, or rejected with the reason that the first completed promise
  was rejected with.
*/
function race(promises) {
  /*jshint validthis:true */
  var Promise = this;

  if (!isArray(promises)) {
    throw new TypeError('You must pass an array to race.');
  }
  return new Promise(function(resolve, reject) {
    var results = [], promise;

    for (var i = 0; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
}

exports.race = race;
},{"./utils":33}],31:[function(require,module,exports){
"use strict";
/**
  `RSVP.reject` returns a promise that will become rejected with the passed
  `reason`. `RSVP.reject` is essentially shorthand for the following:

  ```javascript
  var promise = new RSVP.Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  var promise = RSVP.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @for RSVP
  @param {Any} reason value that the returned promise will be rejected with.
  @param {String} label optional string for identifying the returned promise.
  Useful for tooling.
  @return {Promise} a promise that will become rejected with the given
  `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Promise = this;

  return new Promise(function (resolve, reject) {
    reject(reason);
  });
}

exports.reject = reject;
},{}],32:[function(require,module,exports){
"use strict";
function resolve(value) {
  /*jshint validthis:true */
  if (value && typeof value === 'object' && value.constructor === this) {
    return value;
  }

  var Promise = this;

  return new Promise(function(resolve) {
    resolve(value);
  });
}

exports.resolve = resolve;
},{}],33:[function(require,module,exports){
"use strict";
function objectOrFunction(x) {
  return isFunction(x) || (typeof x === "object" && x !== null);
}

function isFunction(x) {
  return typeof x === "function";
}

function isArray(x) {
  return Object.prototype.toString.call(x) === "[object Array]";
}

// Date.now is not available in browsers < IE9
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Compatibility
var now = Date.now || function() { return new Date().getTime(); };


exports.objectOrFunction = objectOrFunction;
exports.isFunction = isFunction;
exports.isArray = isArray;
exports.now = now;
},{}],34:[function(require,module,exports){
(function (DeLorean) {
  'use strict';

  // There are two main concepts in Flux structure: **Dispatchers** and **Stores**.
  // Action Creators are simply helpers but doesn't require any framework level
  // abstraction.

  var Dispatcher, Store;

  // ## Private Helper Functions

  // Helper functions are private functions to be used in codebase.
  // It's better using two underscore at the beginning of the function.

  /* `__hasOwn` function is a shortcut for `Object#hasOwnProperty` */
  function __hasOwn(object, prop) {
    return Object.prototype.hasOwnProperty.call(object, prop);
  }

  // Use `__generateActionName` function to generate action names.
  // E.g. If you create an action with name `hello` it will be
  // `action:hello` for the Flux.
  function __generateActionName(name) {
    return 'action:' + name;
  }

  /* It's used by the schemes to save the original version (not calculated)
     of the data. */
  function __generateOriginalName(name) {
    return 'original:' + name;
  }

  // `__findDispatcher` is a private function for **React components**.
  function __findDispatcher(view) {
     // Provide a useful error message if no dispatcher is found in the chain
    if (view == null) {
      throw 'No disaptcher found. The DeLoreanJS mixin requires a "dispatcher" property to be passed to a component, or one of it\'s ancestors.';
    }
    /* `view` should be a component instance. If a component don't have
        any dispatcher, it tries to find a dispatcher from the parents. */
    if (!view.props.dispatcher) {
      return __findDispatcher(view._owner);
    }
    return view.props.dispatcher;
  }

  // ## Dispatcher

  // The dispatcher is **the central hub** that **manages all data flow** in
  // a Flux application. It is essentially a _registry of callbacks into the
  // stores_. Each store registers itself and provides a callback. When the
  // dispatcher responds to an action, all stores in the application are sent
  // the data payload provided by the action via the callbacks in the registry.
  Dispatcher = (function () {

    // ### Dispatcher Helpers

    // Rollback listener adds a `rollback` event listener to the bunch of
    // stores.
    function __rollbackListener(stores) {

      function __listener() {
        for (var i in stores) {
          stores[i].listener.emit('__rollback');
        }
      }

      /* If any of them fires `rollback` event, all of the stores
         will be emitted to be rolled back with `__rollback` event. */
      for (var j in stores) {
        stores[j].listener.on('rollback', __listener);
      }
    }

    // ### Dispatcher Prototype
    function Dispatcher(stores) {
      var self = this;
      // `DeLorean.EventEmitter` is `require('events').EventEmitter` by default.
      // you can change it using `DeLorean.Flux.define('EventEmitter', AnotherEventEmitter)`
      this.listener = new DeLorean.EventEmitter();
      this.stores = stores;

      /* Stores should be listened for rollback events. */
      __rollbackListener(Object.keys(stores).map(function (key) {
        return stores[key];
      }));
    }

    // `dispatch` method dispatch the event with `data` (or **payload**)
    Dispatcher.prototype.dispatch = function (actionName, data) {
      var self = this, stores, deferred;

      /* Stores are key-value pairs. Collect store instances into an array. */
      stores = (function () {
        var stores = [], store;
        for (var storeName in self.stores) {
          store = self.stores[storeName];
          /* Store value must be an _instance of Store_. */
          if (!store instanceof Store) {
            throw 'Given store is not a store instance';
          }
          stores.push(store);
        }
        return stores;
      }());

      // Store instances should wait for finish. So you can know if all the
      // stores are dispatched properly.
      deferred = this.waitFor(stores, actionName);

      /* Payload should send to all related stores. */
      for (var storeName in self.stores) {
        self.stores[storeName].dispatchAction(actionName, data);
      }

      // `dispatch` returns deferred object you can just use **promise**
      // for dispatching: `dispatch(..).then(..)`.
      return deferred;
    };

    // `waitFor` is actually a _semi-private_ method. Because it's kind of internal
    // and you don't need to call it from outside most of the times. It takes
    // array of store instances (`[Store, Store, Store, ...]`). It will create
    // a promise and return it. _Whenever store changes, it resolves the promise_.
    Dispatcher.prototype.waitFor = function (stores, actionName) {
      var self = this, promises;
      promises = (function () {
        var __promises = [], promise;

        /* `__promiseGenerator` generates a simple promise that resolves itself when
            related store is changed. */
        function __promiseGenerator(store) {
          // `DeLorean.Promise` is `require('es6-promise').Promise` by default.
          // you can change it using `DeLorean.Flux.define('Promise', AnotherPromise)`
          return new DeLorean.Promise(function (resolve, reject) {
            store.listener.once('change', resolve);
          });
        }

        for (var i in stores) {
          // Only generate promises for stores that ae listening for this action
          if (stores[i].store.actions[actionName] != null) {
            promise = __promiseGenerator(stores[i]);
            __promises.push(promise);
          }
        }
        return __promises;
      }());
      // When all the promises are resolved, dispatcher emits `change:all` event.
      return DeLorean.Promise.all(promises).then(function () {
        self.listener.emit('change:all');
      });
    };

    // `registerAction` method adds a method to the prototype. So you can just use
    // `dispatcherInstance.actionName()`.
    Dispatcher.prototype.registerAction = function (action, callback) {
      /* The callback must be a function. */
      if (typeof callback === 'function') {
        this[action] = callback.bind(this.stores);
      } else {
        throw 'Action callback should be a function.';
      }
    };

    // `getStore` returns the store from stores hash.
    // You can also use `dispatcherInstance.stores[storeName]` but
    // it checks if the store really exists.
    Dispatcher.prototype.getStore = function (storeName) {
      if (!this.stores[storeName]) {
        throw 'Store ' + storeName + ' does not exist.';
      }
      return this.stores[storeName].store;
    };

    // ### Shortcuts

    Dispatcher.prototype.on = function () {
      return this.listener.on.apply(this.listener, arguments);
    };

    Dispatcher.prototype.off = function () {
      return this.listener.removeListener.apply(this.listener, arguments);
    };

    Dispatcher.prototype.emit = function () {
      return this.listener.emit.apply(this.listener, arguments);
    };

    return Dispatcher;
  }());

  // ## Store

  // Stores contain the application state and logic. Their role is somewhat similar
  // to a model in a traditional MVC, but they manage the state of many objects.
  // Unlike MVC models, they are not instances of one object, nor are they the
  // same as Backbone's collections. More than simply managing a collection of
  // ORM-style objects, stores manage the application state for a particular
  // domain within the application.
  Store = (function () {

    // ### Store Prototype
    function Store(store, args) {
      /* store parameter must be an `object` */
      if (typeof store !== 'object') {
        throw 'Stores should be defined by passing the definition to the constructor';
      }

      // `DeLorean.EventEmitter` is `require('events').EventEmitter` by default.
      // you can change it using `DeLorean.Flux.define('EventEmitter', AnotherEventEmitter)`
      this.listener = new DeLorean.EventEmitter();

      /* Store is _hygenic_ object. DeLorean doesn't extend it, it uses it. */
      this.store = store;
      this.bindActions();
      this.buildScheme();

      // `initialize` is the construction function, you can define `initialize` method
      // in your store definitions.
      if (typeof store.initialize === 'function') {
        store.initialize.apply(this.store, args);
      }
    }

     // `set` method updates the data defined at the `scheme` of the store.
    Store.prototype.set = function (arg1, value) {
      var changedProps = [];
      if (typeof arg1 === 'object') {
        for (var keyName in arg1) {
          changedProps.push(keyName);
          this.setValue(keyName, arg1[keyName]);
        }
      } else {
        changedProps.push(arg1);
        this.setValue(arg1, value);
      }
      this.recalculate(changedProps);
      return this.store[arg1];
    };

    // `set` method updates the data defined at the `scheme` of the store.
    Store.prototype.setValue = function (key, value) {
      var scheme = this.store.scheme, definition;
      if (scheme && this.store.scheme[key]) {
        definition = scheme[key];

        this.store[key] = value || definition.default;

        if (typeof definition.calculate === 'function') {
          this.store[__generateOriginalName(key)] = value;
          this.store[key] = definition.calculate.call(this.store, value);
        }
      } else {
        // Scheme **must** include the key you wanted to set.
        if (console != null) {
          console.warn('Scheme must include the key, ' + key + ', you are trying to set. ' + key + ' will NOT be set on the store.');
        }
      }
      return this.store[key];
    };

    // Removes the scheme format and standardizes all the shortcuts.
    // If you run `formatScheme({name: 'joe'})` it will return you
    // `{name: {default: 'joe'}}`. Also if you run `formatScheme({fullname: function () {}})`
    // it will return `{fullname: {calculate: function () {}}}`.
    Store.prototype.formatScheme = function (scheme) {
      var formattedScheme = {}, definition, defaultValue, calculatedValue;
      for (var keyName in scheme) {
        definition = scheme[keyName];
        defaultValue = null;
        calculatedValue = null;

        formattedScheme[keyName] = {default: null};

        /* {key: 'value'} will be {key: {default: 'value'}} */
        defaultValue = (definition && typeof definition === 'object') ?
                        definition.default : definition;
        formattedScheme[keyName].default = defaultValue;

        /* {key: function () {}} will be {key: {calculate: function () {}}} */
        if (definition && typeof definition.calculate === 'function') {
          calculatedValue = definition.calculate;
          /* Put a dependency array on formattedSchemes with calculate defined */
          if (definition.deps) {
            formattedScheme[keyName].deps = definition.deps;
          } else {
            formattedScheme[keyName].deps = [];
          }

        } else if (typeof definition === 'function') {
          calculatedValue = definition;
        }
        if (calculatedValue) {
          formattedScheme[keyName].calculate = calculatedValue;
        }
      }
      return formattedScheme;
    };

    /* Applying `scheme` to the store if exists. */
    Store.prototype.buildScheme = function () {
      var scheme, calculatedData, keyName, definition, dependencyMap, dependents, dep, changedProps = [];

      if (typeof this.store.scheme === 'object') {
        /* Scheme must be formatted to standardize the keys. */
        scheme = this.store.scheme = this.formatScheme(this.store.scheme);
        dependencyMap = this.store.__dependencyMap = {};

        /* Set the defaults first */
        for (keyName in scheme) {
          definition = scheme[keyName];
          this.store[keyName] = definition.default;
        }

        /* Set the calculations */
        for (keyName in scheme) {
          definition = scheme[keyName];
          if (definition.calculate) {
            // Create a dependency map - {keyName: [arrayOfKeysThatDependOnIt]}
            dependents = definition.deps || [];

            for (var i = 0; i < dependents.length; i++) {
              dep = dependents[i];
              if (dependencyMap[dep] == null) {
                dependencyMap[dep] = [];
              }
              dependencyMap[dep].push(keyName);
            }

            this.store[__generateOriginalName(keyName)] = definition.default;
            this.store[keyName] = definition.calculate.call(this.store, definition.default);
            changedProps.push(keyName);
          }
        }
        // Recalculate any properties dependent on those that were just set
        this.recalculate(changedProps);
      }
    };

    Store.prototype.recalculate = function (changedProps) {
      var scheme = this.store.scheme, dependencyMap = this.store.__dependencyMap, didRun = [], definition, keyName, dependents, dep;
      // Only iterate over the properties that just changed
      for (var i = 0; i < changedProps.length; i++) {
        dependents = dependencyMap[changedProps[i]];
        // If there are no properties dependent on this property, do nothing
        if (dependents == null) {
          continue;
        }
        // Iterate over the dependendent properties
        for (var d = 0; d < dependents.length; d++) {
          dep = dependents[d];
          // Do nothing if this value has already been recalculated on this change batch
          if (didRun.indexOf(dep) !== -1) {
            continue;
          }
          // Calculate this value
          definition = scheme[dep];
          this.store[dep] = definition.calculate.call(this.store,
                                this.store[__generateOriginalName(dep)] || definition.default);

          // Make sure this does not get calculated again in this change batch
          didRun.push(dep);
        }
      }
      // Update Any deps on the deps
      if (didRun.length > 0) {
        this.recalculate(didRun);
      }
      this.listener.emit('change');
    };

    // `bindActions` is semi-private method. You'll never need to call it from outside.
    // It powers up the `this.store` object.
    Store.prototype.bindActions = function () {
      var callback;

      // Some required methods can be used in **store definition** like
      // **`emit`**, **`emitChange`**, **`emitRollback`**, **`rollback`**, **`listenChanges`**
      this.store.emit = this.listener.emit.bind(this.listener);
      this.store.emitChange = this.listener.emit.bind(this.listener, 'change');
      this.store.emitRollback = this.listener.emit.bind(this.listener, 'rollback');
      this.store.rollback = this.listener.on.bind(this.listener, '__rollback');
      this.store.listenChanges = this.listenChanges.bind(this);
      this.store.set = this.set.bind(this);

      // Stores must have a `actions` hash of `actionName: methodName`
      // `methodName` is the `this.store`'s prototype method..
      for (var actionName in this.store.actions) {
        if (__hasOwn(this.store.actions, actionName)) {
          callback = this.store.actions[actionName];
          if (typeof this.store[callback] !== 'function') {
            throw 'Callback \'' + callback + '\' defined for action \'' + actionName + '\' should be a method defined on the store!';
          }
          /* And `actionName` should be a name generated by `__generateActionName` */
          this.listener.on(__generateActionName(actionName),
                           this.store[callback].bind(this.store));
        }
      }
    };

    // `dispatchAction` called from a dispatcher. You can also call anywhere but
    // you probably won't need to do. It simply **emits an event with a payload**.
    Store.prototype.dispatchAction = function (actionName, data) {
      this.listener.emit(__generateActionName(actionName), data);
    };

    // ### Shortcuts

    // `listenChanges` is a shortcut for `Object.observe` usage. You can just use
    // `Object.observe(object, function () { ... })` but everytime you use it you
    // repeat yourself. DeLorean has a shortcut doing this properly.
    Store.prototype.listenChanges = function (object) {
      var self = this, observer;
      if (!Object.observe) {
        console.error('Store#listenChanges method uses Object.observe, you should fire changes manually.');
        return;
      }

      observer = Array.isArray(object) ? Array.observe : Object.observe;

      observer(object, function (changes) {
        self.listener.emit('change', changes);
      });
    };

    // `onChange` simply listens changes and calls a callback. Shortcut for
    // a `on('change')` command.
    Store.prototype.onChange = function (callback) {
      this.listener.on('change', callback);
    };

    return Store;
  }());

  // ### Flux Wrapper
  DeLorean.Flux = {

    // `createStore` **creates a function to create a store**. So it's like
    // a factory.
    createStore: function (factoryDefinition) {
      return function () {
        return new Store(factoryDefinition, arguments);
      };
    },

    // `createDispatcher` generates a dispatcher with actions to dispatch.
    /* `actionsToDispatch` should be an object. */
    createDispatcher: function (actionsToDispatch) {
      var actionsOfStores, dispatcher, callback, triggers, triggerMethod;

      // If it has `getStores` method it should be get and pass to the `Dispatcher`
      if (typeof actionsToDispatch.getStores === 'function') {
        actionsOfStores = actionsToDispatch.getStores();
      }

      /* If there are no stores defined, it's an empty object. */
      dispatcher = new Dispatcher(actionsOfStores || {});

      /* Now call `registerAction` method for every action. */
      for (var actionName in actionsToDispatch) {
        if (__hasOwn(actionsToDispatch, actionName)) {
          /* `getStores` & `viewTriggers` are special properties, it's not an action. */
          if (actionName !== 'getStores' && actionName != 'viewTriggers') {
            callback = actionsToDispatch[actionName];
            dispatcher.registerAction(actionName, callback.bind(dispatcher));
          }
        }
      }

      /* Bind triggers */
      triggers = actionsToDispatch.viewTriggers;
      for (var triggerName in triggers) {
        triggerMethod = triggers[triggerName];
        if (typeof dispatcher[triggerMethod] === 'function') {
          dispatcher.on(triggerName, dispatcher[triggerMethod]);
        } else {
          if (console != null) {
            console.warn(triggerMethod + ' should be a method defined on your dispatcher. The ' + triggerName + ' trigger will not be bound to any method.');
          }
        }
      }

      return dispatcher;
    },
    // ### `DeLorean.Flux.define`
    // It's a key to _hack_ DeLorean easily. You can just inject something
    // you want to define.
    define: function (key, value) {
      DeLorean[key] = value;
    }
  };

  // Store and Dispatcher are the only base classes of DeLorean.
  DeLorean.Dispatcher = Dispatcher;
  DeLorean.Store = Store;

  // ## Built-in React Mixin
  DeLorean.Flux.mixins = {
    // It should be inserted to the React components which
    // used in Flux.
    // Simply `mixin: [Flux.mixins.storeListener]` will work.
    storeListener: {

      trigger: function () {
        this.__dispatcher.emit.apply(this.__dispatcher, arguments);
      },

      // After the component mounted, listen changes of the related stores
      componentDidMount: function () {
        var self = this, store, storeName;

        /* `__changeHandler` is a **listener generator** to pass to the `onChange` function. */
        function __changeHandler(store, storeName) {
          return function () {
            var state, args;
            /* If the component is mounted, change state. */
            if (self.isMounted()) {
              self.setState(self.getStoreStates());
            }
            // When something changes it calls the components `storeDidChanged` method if exists.
            if (self.storeDidChange) {
              args = [storeName].concat(Array.prototype.slice.call(arguments, 0));
              self.storeDidChange.apply(self, args);
            }
          };
        }

        // Remember the change handlers so they can be removed later
        this.__changeHandlers = {};

        /* Generate and bind the change handlers to the stores. */
        for (storeName in this.__watchStores) {
          if (__hasOwn(this.stores, storeName)) {
            store = this.stores[storeName];
            this.__changeHandlers[storeName] = __changeHandler(store, storeName);
            store.onChange(this.__changeHandlers[storeName]);
          }
        }
      },

      // When a component unmounted, it should stop listening.
      componentWillUnmount: function () {
        for (var storeName in this.__changeHandlers) {
          if (__hasOwn(this.stores, storeName)) {
            var store = this.stores[storeName];
            store.listener.removeListener('change', this.__changeHandlers[storeName]);
          }
        }
      },

      getInitialState: function () {
        var self = this, state, storeName;

        /* The dispatcher should be easy to access and it should use `__findDispatcher`
           method to find the parent dispatchers. */
        this.__dispatcher = __findDispatcher(this);

        // If `storesDidChange` method presents, it'll be called after all the stores
        // were changed.
        if (this.storesDidChange) {
          this.__dispatcher.on('change:all', function () {
            self.storesDidChange();
          });
        }

        // Since `dispatcher.stores` is harder to write, there's a shortcut for it.
        // You can use `this.stores` from the React component.
        this.stores = this.__dispatcher.stores;

        this.__watchStores = {};
        if (this.watchStores != null) {
          for (var i = 0; i < this.watchStores.length;  i++) {
            storeName = this.watchStores[i];
            this.__watchStores[storeName] = this.stores[storeName];
          }
        } else {
          this.__watchStores = this.stores;
          if (console != null && Object.keys != null && Object.keys(this.stores).length > 4) {
            console.warn('Your component is watching changes on all stores, you may want to define a "watchStores" property in order to only watch stores relevant to this component.');
          }
        }

        return this.getStoreStates();
      },

      getStoreStates: function () {
        var state = {stores: {}}, store;

        /* Set `state.stores` for all present stores with a `setState` method defined. */
        for (var storeName in this.__watchStores) {
          if (__hasOwn(this.stores, storeName)) {
            state.stores[storeName] = {};
            store = this.__watchStores[storeName].store;
            if (store && store.getState) {
              state.stores[storeName] = store.getState();
            } else if (typeof store.scheme === 'object') {
              var scheme = store.scheme;
              for (var keyName in scheme) {
                state.stores[storeName][keyName] = store[keyName];
              }
            }
          }
        }
        return state;
      },

      // `getStore` is a shortcut to get the store from the state.
      getStore: function (storeName) {
        return this.state.stores[storeName];
      }
    }
  };

  // ## DeLorean API
  // DeLorean can be used in **CommonJS** projects.
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {

    var requirements = require('./requirements');
    for (var requirement in requirements) {
      DeLorean.Flux.define(requirement, requirements[requirement]);
    }
    module.exports = DeLorean;

  // It can be also used in **AMD** projects, too.
  // And if there is no module system initialized, just pass the DeLorean
  // to the `window`.
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return DeLorean;
      });
    } else {
      window.DeLorean = DeLorean;
    }
  }

})({});

},{"./requirements":35}],35:[function(require,module,exports){
// ## Dependency injection file.

// You can change dependencies using `DeLorean.Flux.define`. There are
// two dependencies now: `EventEmitter` and `Promise`
var requirements;

module.exports = requirements = {
  // DeLorean uses **Node.js native EventEmitter** for event emittion
  EventEmitter: require('events').EventEmitter,
  // and **es6-promise** for Deferred object management.
  Promise: require('es6-promise').Promise
};
// It's better you don't change them if you really need to.

// This library needs to work for Browserify and also standalone.
// If DeLorean is defined, it means it's called from the browser, not
// the browserify.
if (typeof DeLorean !== 'undefined') {
  for (var requirement in requirements) {
    DeLorean.Flux.define(requirement, requirements[requirement]);
  }
}

},{"es6-promise":24,"events":36}],36:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],37:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],38:[function(require,module,exports){
/*!
 * imagesLoaded v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( [
      'eventEmitter/EventEmitter',
      'eventie/eventie'
    ], function( EventEmitter, eventie ) {
      return factory( window, EventEmitter, eventie );
    });
  } else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('wolfy87-eventemitter'),
      require('eventie')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EventEmitter,
      window.eventie
    );
  }

})( window,

// --------------------------  factory -------------------------- //

function factory( window, EventEmitter, eventie ) {

'use strict';

var $ = window.jQuery;
var console = window.console;
var hasConsole = typeof console !== 'undefined';

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) === '[object Array]';
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length === 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

  // -------------------------- imagesLoaded -------------------------- //

  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded( elem, options, onAlways ) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if ( !( this instanceof ImagesLoaded ) ) {
      return new ImagesLoaded( elem, options );
    }
    // use elem as selector string
    if ( typeof elem === 'string' ) {
      elem = document.querySelectorAll( elem );
    }

    this.elements = makeArray( elem );
    this.options = extend( {}, this.options );

    if ( typeof options === 'function' ) {
      onAlways = options;
    } else {
      extend( this.options, options );
    }

    if ( onAlways ) {
      this.on( 'always', onAlways );
    }

    this.getImages();

    if ( $ ) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }

    // HACK check async to allow time to bind listeners
    var _this = this;
    setTimeout( function() {
      _this.check();
    });
  }

  ImagesLoaded.prototype = new EventEmitter();

  ImagesLoaded.prototype.options = {};

  ImagesLoaded.prototype.getImages = function() {
    this.images = [];

    // filter & find items if we have an item selector
    for ( var i=0, len = this.elements.length; i < len; i++ ) {
      var elem = this.elements[i];
      // filter siblings
      if ( elem.nodeName === 'IMG' ) {
        this.addImage( elem );
      }
      // find children
      // no non-element nodes, #143
      var nodeType = elem.nodeType;
      if ( !nodeType || !( nodeType === 1 || nodeType === 9 || nodeType === 11 ) ) {
        continue;
      }
      var childElems = elem.querySelectorAll('img');
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        var img = childElems[j];
        this.addImage( img );
      }
    }
  };

  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function( img ) {
    var loadingImage = new LoadingImage( img );
    this.images.push( loadingImage );
  };

  ImagesLoaded.prototype.check = function() {
    var _this = this;
    var checkedCount = 0;
    var length = this.images.length;
    this.hasAnyBroken = false;
    // complete if no images
    if ( !length ) {
      this.complete();
      return;
    }

    function onConfirm( image, message ) {
      if ( _this.options.debug && hasConsole ) {
        console.log( 'confirm', image, message );
      }

      _this.progress( image );
      checkedCount++;
      if ( checkedCount === length ) {
        _this.complete();
      }
      return true; // bind once
    }

    for ( var i=0; i < length; i++ ) {
      var loadingImage = this.images[i];
      loadingImage.on( 'confirm', onConfirm );
      loadingImage.check();
    }
  };

  ImagesLoaded.prototype.progress = function( image ) {
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // HACK - Chrome triggers event before object properties have changed. #83
    var _this = this;
    setTimeout( function() {
      _this.emit( 'progress', _this, image );
      if ( _this.jqDeferred && _this.jqDeferred.notify ) {
        _this.jqDeferred.notify( _this, image );
      }
    });
  };

  ImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    var _this = this;
    // HACK - another setTimeout so that confirm happens after progress
    setTimeout( function() {
      _this.emit( eventName, _this );
      _this.emit( 'always', _this );
      if ( _this.jqDeferred ) {
        var jqMethod = _this.hasAnyBroken ? 'reject' : 'resolve';
        _this.jqDeferred[ jqMethod ]( _this );
      }
    });
  };

  // -------------------------- jquery -------------------------- //

  if ( $ ) {
    $.fn.imagesLoaded = function( options, callback ) {
      var instance = new ImagesLoaded( this, options, callback );
      return instance.jqDeferred.promise( $(this) );
    };
  }


  // --------------------------  -------------------------- //

  function LoadingImage( img ) {
    this.img = img;
  }

  LoadingImage.prototype = new EventEmitter();

  LoadingImage.prototype.check = function() {
    // first check cached any previous images that have same src
    var resource = cache[ this.img.src ] || new Resource( this.img.src );
    if ( resource.isConfirmed ) {
      this.confirm( resource.isLoaded, 'cached was confirmed' );
      return;
    }

    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    if ( this.img.complete && this.img.naturalWidth !== undefined ) {
      // report based on naturalWidth
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      return;
    }

    // If none of the checks above matched, simulate loading on detached element.
    var _this = this;
    resource.on( 'confirm', function( resrc, message ) {
      _this.confirm( resrc.isLoaded, message );
      return true;
    });

    resource.check();
  };

  LoadingImage.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emit( 'confirm', this, message );
  };

  // -------------------------- Resource -------------------------- //

  // Resource checks each src, only once
  // separate class from LoadingImage to prevent memory leaks. See #115

  var cache = {};

  function Resource( src ) {
    this.src = src;
    // add to cache
    cache[ src ] = this;
  }

  Resource.prototype = new EventEmitter();

  Resource.prototype.check = function() {
    // only trigger checking once
    if ( this.isChecked ) {
      return;
    }
    // simulate loading on detached element
    var proxyImage = new Image();
    eventie.bind( proxyImage, 'load', this );
    eventie.bind( proxyImage, 'error', this );
    proxyImage.src = this.src;
    // set flag
    this.isChecked = true;
  };

  // ----- events ----- //

  // trigger specified handler for event type
  Resource.prototype.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };

  Resource.prototype.onload = function( event ) {
    this.confirm( true, 'onload' );
    this.unbindProxyEvents( event );
  };

  Resource.prototype.onerror = function( event ) {
    this.confirm( false, 'onerror' );
    this.unbindProxyEvents( event );
  };

  // ----- confirm ----- //

  Resource.prototype.confirm = function( isLoaded, message ) {
    this.isConfirmed = true;
    this.isLoaded = isLoaded;
    this.emit( 'confirm', this, message );
  };

  Resource.prototype.unbindProxyEvents = function( event ) {
    eventie.unbind( event.target, 'load', this );
    eventie.unbind( event.target, 'error', this );
  };

  // -----  ----- //

  return ImagesLoaded;

});

},{"eventie":39,"wolfy87-eventemitter":40}],39:[function(require,module,exports){
/*!
 * eventie v1.0.5
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

var docElem = document.documentElement;

var bind = function() {};

function getIEEvent( obj ) {
  var event = window.event;
  // add event.target
  event.target = event.target || event.srcElement || obj;
  return event;
}

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = getIEEvent( obj );
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = getIEEvent( obj );
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// ----- module definition ----- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( eventie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = eventie;
} else {
  // browser global
  window.eventie = eventie;
}

})( this );

},{}],40:[function(require,module,exports){
/*!
 * EventEmitter v4.2.11 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */

;(function () {
    'use strict';

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {}

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in its storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        }
        else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after its first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of its properties to this method
        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    }
                    else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        }
        else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        }
        else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        }
        else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listeners = this.getListenersAsObject(evt);
        var listener;
        var i;
        var key;
        var response;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                i = listeners[key].length;

                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[key][i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        }
        else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return EventEmitter;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = EventEmitter;
    }
    else {
        exports.EventEmitter = EventEmitter;
    }
}.call(this));

},{}],41:[function(require,module,exports){
/*!
 * Masonry v3.2.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window ) {

'use strict';

// -------------------------- helpers -------------------------- //

var indexOf = Array.prototype.indexOf ?
  function( items, value ) {
    return items.indexOf( value );
  } :
  function ( items, value ) {
    for ( var i=0, len = items.length; i < len; i++ ) {
      var item = items[i];
      if ( item === value ) {
        return i;
      }
    }
    return -1;
  };

// -------------------------- masonryDefinition -------------------------- //

// used for AMD definition and requires
function masonryDefinition( Outlayer, getSize ) {
  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');

  Masonry.prototype._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    var i = this.cols;
    this.colYs = [];
    while (i--) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
  };

  Masonry.prototype.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    this.columnWidth += this.gutter;

    this.cols = Math.floor( ( this.containerWidth + this.gutter ) / this.columnWidth );
    this.cols = Math.max( this.cols, 1 );
  };

  Masonry.prototype.getContainerWidth = function() {
    // container is parent if fit width
    var container = this.options.isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  Masonry.prototype._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );

    var colGroup = this._getColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );
    var shortColIndex = indexOf( colGroup, minimumY );

    // position the brick
    var position = {
      x: this.columnWidth * shortColIndex,
      y: minimumY
    };

    // apply setHeight to necessary columns
    var setHeight = minimumY + item.size.outerHeight;
    var setSpan = this.cols + 1 - colGroup.length;
    for ( var i = 0; i < setSpan; i++ ) {
      this.colYs[ shortColIndex + i ] = setHeight;
    }

    return position;
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  Masonry.prototype._getColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      // make an array of colY values for that one group
      var groupColYs = this.colYs.slice( i, i + colSpan );
      // and get the max value of the array
      colGroup[i] = Math.max.apply( Math, groupColYs );
    }
    return colGroup;
  };

  Masonry.prototype._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var firstX = this.options.isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp
    var stampMaxY = ( this.options.isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  Masonry.prototype._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this.options.isFitWidth ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  Masonry.prototype._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  Masonry.prototype.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth !== this.containerWidth;
  };

  return Masonry;
}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( [
      'outlayer/outlayer',
      'get-size/get-size'
    ],
    masonryDefinition );
} else if (typeof exports === 'object') {
  module.exports = masonryDefinition(
    require('outlayer'),
    require('get-size')
  );
} else {
  // browser global
  window.Masonry = masonryDefinition(
    window.Outlayer,
    window.getSize
  );
}

})( window );

},{"get-size":42,"outlayer":50}],42:[function(require,module,exports){
/*!
 * getSize v1.2.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, exports: false, require: false, module: false, console: false */

( function( window, undefined ) {

'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') === -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console === 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}



function defineGetSize( getStyleProperty ) {

// -------------------------- setup -------------------------- //

var isSetup = false;

var getStyle, boxSizingProp, isBoxSizeOuter;

/**
 * setup vars and functions
 * do it on initial getSize(), rather than on script load
 * For Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  var getComputedStyle = window.getComputedStyle;
  getStyle = ( function() {
    var getStyleFn = getComputedStyle ?
      function( elem ) {
        return getComputedStyle( elem, null );
      } :
      function( elem ) {
        return elem.currentStyle;
      };

      return function getStyle( elem ) {
        var style = getStyleFn( elem );
        if ( !style ) {
          logError( 'Style returned ' + style +
            '. Are you running this code in a hidden iframe on Firefox? ' +
            'See http://bit.ly/getsizebug1' );
        }
        return style;
      };
  })();

  // -------------------------- box sizing -------------------------- //

  boxSizingProp = getStyleProperty('boxSizing');

  /**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox measures the inner-width
   */
  if ( boxSizingProp ) {
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style[ boxSizingProp ] = 'border-box';

    var body = document.body || document.documentElement;
    body.appendChild( div );
    var style = getStyle( div );

    isBoxSizeOuter = getStyleSize( style.width ) === 200;
    body.removeChild( div );
  }

}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem === 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display === 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );

  // get all measurements
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    value = mungeNonPixel( elem, value );
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

// IE8 returns percent values, not pixels
// taken from jQuery's curCSS
function mungeNonPixel( elem, value ) {
  // IE8 and has percent value
  if ( window.getComputedStyle || value.indexOf('%') === -1 ) {
    return value;
  }
  var style = elem.style;
  // Remember the original values
  var left = style.left;
  var rs = elem.runtimeStyle;
  var rsLeft = rs && rs.left;

  // Put in the new values to get a computed value out
  if ( rsLeft ) {
    rs.left = elem.currentStyle.left;
  }
  style.left = value;
  value = style.pixelLeft;

  // Revert the changed values
  style.left = left;
  if ( rsLeft ) {
    rs.left = rsLeft;
  }

  return value;
}

return getSize;

}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD for RequireJS
  define( [ 'get-style-property/get-style-property' ], defineGetSize );
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = defineGetSize( require('desandro-get-style-property') );
} else {
  // browser global
  window.getSize = defineGetSize( window.getStyleProperty );
}

})( window );

},{"desandro-get-style-property":43}],43:[function(require,module,exports){
/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

( function( window ) {

'use strict';

var prefixes = 'Webkit Moz ms Ms O'.split(' ');
var docElemStyle = document.documentElement.style;

function getStyleProperty( propName ) {
  if ( !propName ) {
    return;
  }

  // test standard property first
  if ( typeof docElemStyle[ propName ] === 'string' ) {
    return propName;
  }

  // capitalize
  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

  // test vendor specific properties
  var prefixed;
  for ( var i=0, len = prefixes.length; i < len; i++ ) {
    prefixed = prefixes[i] + propName;
    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
      return prefixed;
    }
  }
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( function() {
    return getStyleProperty;
  });
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = getStyleProperty;
} else {
  // browser global
  window.getStyleProperty = getStyleProperty;
}

})( window );

},{}],44:[function(require,module,exports){
/**
 * Outlayer Item
 */

( function( window ) {

'use strict';

// ----- get style ----- //

var getComputedStyle = window.getComputedStyle;
var getStyle = getComputedStyle ?
  function( elem ) {
    return getComputedStyle( elem, null );
  } :
  function( elem ) {
    return elem.currentStyle;
  };


// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
function toDash( str ) {
  return str.replace( /([A-Z])/g, function( $1 ){
    return '-' + $1.toLowerCase();
  });
}

// -------------------------- Outlayer definition -------------------------- //

function outlayerItemDefinition( EventEmitter, getSize, getStyleProperty ) {

// -------------------------- CSS3 support -------------------------- //

var transitionProperty = getStyleProperty('transition');
var transformProperty = getStyleProperty('transform');
var supportsCSS3 = transitionProperty && transformProperty;
var is3d = !!getStyleProperty('perspective');

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'otransitionend',
  transition: 'transitionend'
}[ transitionProperty ];

// properties that could have vendor prefix
var prefixableProperties = [
  'transform',
  'transition',
  'transitionDuration',
  'transitionProperty'
];

// cache all vendor properties
var vendorProperties = ( function() {
  var cache = {};
  for ( var i=0, len = prefixableProperties.length; i < len; i++ ) {
    var prop = prefixableProperties[i];
    var supportedProp = getStyleProperty( prop );
    if ( supportedProp && supportedProp !== prop ) {
      cache[ prop ] = supportedProp;
    }
  }
  return cache;
})();

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EventEmitter
extend( Item.prototype, EventEmitter.prototype );

Item.prototype._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
Item.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

Item.prototype.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
Item.prototype.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
Item.prototype.getPosition = function() {
  var style = getStyle( this.element );
  var layoutOptions = this.layout.options;
  var isOriginLeft = layoutOptions.isOriginLeft;
  var isOriginTop = layoutOptions.isOriginTop;
  var x = parseInt( style[ isOriginLeft ? 'left' : 'right' ], 10 );
  var y = parseInt( style[ isOriginTop ? 'top' : 'bottom' ], 10 );

  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  var layoutSize = this.layout.size;
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
Item.prototype.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var layoutOptions = this.layout.options;
  var style = {};

  if ( layoutOptions.isOriginLeft ) {
    style.left = ( this.position.x + layoutSize.paddingLeft ) + 'px';
    // reset other property
    style.right = '';
  } else {
    style.right = ( this.position.x + layoutSize.paddingRight ) + 'px';
    style.left = '';
  }

  if ( layoutOptions.isOriginTop ) {
    style.top = ( this.position.y + layoutSize.paddingTop ) + 'px';
    style.bottom = '';
  } else {
    style.bottom = ( this.position.y + layoutSize.paddingBottom ) + 'px';
    style.top = '';
  }

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};


// transform translate function
var translate = is3d ?
  function( x, y ) {
    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
  } :
  function( x, y ) {
    return 'translate(' + x + 'px, ' + y + 'px)';
  };


Item.prototype._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var compareX = parseInt( x, 10 );
  var compareY = parseInt( y, 10 );
  var didNotMove = compareX === this.position.x && compareY === this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  // flip cooridinates if origin on right or bottom
  var layoutOptions = this.layout.options;
  transX = layoutOptions.isOriginLeft ? transX : -transX;
  transY = layoutOptions.isOriginTop ? transY : -transY;
  transitionStyle.transform = translate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

// non transition + transform support
Item.prototype.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

// use transition and transforms if supported
Item.prototype.moveTo = supportsCSS3 ?
  Item.prototype._transitionTo : Item.prototype.goTo;

Item.prototype.setPosition = function( x, y ) {
  this.position.x = parseInt( x, 10 );
  this.position.y = parseInt( y, 10 );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
Item.prototype._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
Item.prototype._transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

var itemTransitionProperties = transformProperty && ( toDash( transformProperty ) +
  ',opacity' );

Item.prototype.enableTransition = function(/* style */) {
  // only enable if not already transitioning
  // bug in IE10 were re-setting transition style will prevent
  // transitionend event from triggering
  if ( this.isTransitioning ) {
    return;
  }

  // make transition: foo, bar, baz from style object
  // TODO uncomment this bit when IE10 bug is resolved
  // var transitionValue = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   transitionValue.push( toDash( prop ) );
  // }
  // enable transition styles
  // HACK always enable transform,opacity for IE10
  this.css({
    transitionProperty: itemTransitionProperties,
    transitionDuration: this.layout.options.transitionDuration
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

Item.prototype.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];

// ----- events ----- //

Item.prototype.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

Item.prototype.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform',
  '-moz-transform': 'transform',
  '-o-transform': 'transform'
};

Item.prototype.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

Item.prototype.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
Item.prototype._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: ''
};

Item.prototype.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- show/hide/remove ----- //

// remove element from DOM
Item.prototype.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  this.emitEvent( 'remove', [ this ] );
};

Item.prototype.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  var _this = this;
  this.on( 'transitionEnd', function() {
    _this.removeElem();
    return true; // bind once
  });
  this.hide();
};

Item.prototype.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;
  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true
  });
};

Item.prototype.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;
  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: {
      opacity: function() {
        // check if still hidden
        // during transition, item may have been un-hidden
        if ( this.isHidden ) {
          this.css({ display: 'none' });
        }
      }
    }
  });
};

Item.prototype.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( [
      'eventEmitter/EventEmitter',
      'get-size/get-size',
      'get-style-property/get-style-property'
    ],
    outlayerItemDefinition );
} else if (typeof exports === 'object') {
  // CommonJS
  module.exports = outlayerItemDefinition(
    require('wolfy87-eventemitter'),
    require('get-size'),
    require('desandro-get-style-property')
  );
} else {
  // browser global
  window.Outlayer = {};
  window.Outlayer.Item = outlayerItemDefinition(
    window.EventEmitter,
    window.getSize,
    window.getStyleProperty
  );
}

})( window );

},{"desandro-get-style-property":45,"get-size":42,"wolfy87-eventemitter":49}],45:[function(require,module,exports){
module.exports=require(43)
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\masonry-layout\\node_modules\\get-size\\node_modules\\desandro-get-style-property\\get-style-property.js":43}],46:[function(require,module,exports){
/**
 * matchesSelector v1.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( ElemProto ) {

  'use strict';

  var matchesMethod = ( function() {
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0, len = prefixes.length; i < len; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  // ----- match ----- //

  function match( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  }

  // ----- appendToFragment ----- //

  function checkParent( elem ) {
    // not needed if already has parent
    if ( elem.parentNode ) {
      return;
    }
    var fragment = document.createDocumentFragment();
    fragment.appendChild( elem );
  }

  // ----- query ----- //

  // fall back to using QSA
  // thx @jonathantneal https://gist.github.com/3062955
  function query( elem, selector ) {
    // append to fragment if no parent
    checkParent( elem );

    // match elem with all selected elems of parent
    var elems = elem.parentNode.querySelectorAll( selector );
    for ( var i=0, len = elems.length; i < len; i++ ) {
      // return true if match
      if ( elems[i] === elem ) {
        return true;
      }
    }
    // otherwise return false
    return false;
  }

  // ----- matchChild ----- //

  function matchChild( elem, selector ) {
    checkParent( elem );
    return match( elem, selector );
  }

  // ----- matchesSelector ----- //

  var matchesSelector;

  if ( matchesMethod ) {
    // IE9 supports matchesSelector, but doesn't work on orphaned elems
    // check for that
    var div = document.createElement('div');
    var supportsOrphans = match( div, 'div' );
    matchesSelector = supportsOrphans ? match : matchChild;
  } else {
    matchesSelector = query;
  }

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( function() {
      return matchesSelector;
    });
  } else if ( typeof exports === 'object' ) {
    module.exports = matchesSelector;
  }
  else {
    // browser global
    window.matchesSelector = matchesSelector;
  }

})( Element.prototype );

},{}],47:[function(require,module,exports){
/*!
 * docReady v1.0.3
 * Cross browser DOMContentLoaded event emitter
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/
/*global define: false, require: false, module: false */

( function( window ) {

'use strict';

var document = window.document;
// collection of functions to be triggered on ready
var queue = [];

function docReady( fn ) {
  // throw out non-functions
  if ( typeof fn !== 'function' ) {
    return;
  }

  if ( docReady.isReady ) {
    // ready now, hit it
    fn();
  } else {
    // queue function when ready
    queue.push( fn );
  }
}

docReady.isReady = false;

// triggered on various doc ready events
function init( event ) {
  // bail if IE8 document is not ready just yet
  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
  if ( docReady.isReady || isIE8NotReady ) {
    return;
  }
  docReady.isReady = true;

  // process queue
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var fn = queue[i];
    fn();
  }
}

function defineDocReady( eventie ) {
  eventie.bind( document, 'DOMContentLoaded', init );
  eventie.bind( document, 'readystatechange', init );
  eventie.bind( window, 'load', init );

  return docReady;
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  // if RequireJS, then doc is already ready
  docReady.isReady = typeof requirejs === 'function';
  define( [ 'eventie/eventie' ], defineDocReady );
} else if ( typeof exports === 'object' ) {
  module.exports = defineDocReady( require('eventie') );
} else {
  // browser global
  window.docReady = defineDocReady( window.eventie );
}

})( window );

},{"eventie":48}],48:[function(require,module,exports){
module.exports=require(39)
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\imagesloaded\\node_modules\\eventie\\eventie.js":39}],49:[function(require,module,exports){
module.exports=require(40)
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\imagesloaded\\node_modules\\wolfy87-eventemitter\\EventEmitter.js":40}],50:[function(require,module,exports){
/*!
 * Outlayer v1.3.0
 * the brains and guts of a layout library
 * MIT license
 */

( function( window ) {

'use strict';

// ----- vars ----- //

var document = window.document;
var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}


var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) === '[object Array]';
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length === 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// http://stackoverflow.com/a/384380/182183
var isElement = ( typeof HTMLElement === 'function' || typeof HTMLElement === 'object' ) ?
  function isElementDOM2( obj ) {
    return obj instanceof HTMLElement;
  } :
  function isElementQuirky( obj ) {
    return obj && typeof obj === 'object' &&
      obj.nodeType === 1 && typeof obj.nodeName === 'string';
  };

// index of helper cause IE8
var indexOf = Array.prototype.indexOf ? function( ary, obj ) {
    return ary.indexOf( obj );
  } : function( ary, obj ) {
    for ( var i=0, len = ary.length; i < len; i++ ) {
      if ( ary[i] === obj ) {
        return i;
      }
    }
    return -1;
  };

function removeFrom( obj, ary ) {
  var index = indexOf( ary, obj );
  if ( index !== -1 ) {
    ary.splice( index, 1 );
  }
}

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
function toDashed( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
}


function outlayerDefinition( eventie, docReady, EventEmitter, getSize, matchesSelector, Item ) {

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  // use element as selector string
  if ( typeof element === 'string' ) {
    element = document.querySelector( element );
  }

  // bail out if not proper element
  if ( !element || !isElement( element ) ) {
    if ( console ) {
      console.error( 'Bad ' + this.constructor.namespace + ' element: ' + element );
    }
    return;
  }

  this.element = element;

  // options
  this.options = extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  if ( this.options.isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  isInitLayout: true,
  isOriginLeft: true,
  isOriginTop: true,
  isResizeBound: true,
  isResizingContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

// inherit EventEmitter
extend( Outlayer.prototype, EventEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
Outlayer.prototype.option = function( opts ) {
  extend( this.options, opts );
};

Outlayer.prototype._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  extend( this.element.style, this.options.containerStyle );

  // bind resize method
  if ( this.options.isResizeBound ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
Outlayer.prototype.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
Outlayer.prototype._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0, len = itemElems.length; i < len; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
Outlayer.prototype._filterFindItemElements = function( elems ) {
  // make array of elems
  elems = makeArray( elems );
  var itemSelector = this.options.itemSelector;
  var itemElems = [];

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // check that elem is an actual element
    if ( !isElement( elem ) ) {
      continue;
    }
    // filter & find items if we have an item selector
    if ( itemSelector ) {
      // filter siblings
      if ( matchesSelector( elem, itemSelector ) ) {
        itemElems.push( elem );
      }
      // find children
      var childElems = elem.querySelectorAll( itemSelector );
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        itemElems.push( childElems[j] );
      }
    } else {
      itemElems.push( elem );
    }
  }

  return itemElems;
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
Outlayer.prototype.getItemElements = function() {
  var elems = [];
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    elems.push( this.items[i].element );
  }
  return elems;
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
Outlayer.prototype.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var isInstant = this.options.isLayoutInstant !== undefined ?
    this.options.isLayoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
Outlayer.prototype._init = Outlayer.prototype.layout;

/**
 * logic before any new layout
 */
Outlayer.prototype._resetLayout = function() {
  this.getSize();
};


Outlayer.prototype.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
Outlayer.prototype._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option === 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( isElement( option ) ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
Outlayer.prototype.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
Outlayer.prototype._getItemsForLayout = function( items ) {
  var layoutItems = [];
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    if ( !item.isIgnored ) {
      layoutItems.push( item );
    }
  }
  return layoutItems;
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
Outlayer.prototype._layoutItems = function( items, isInstant ) {
  var _this = this;
  function onItemsLayout() {
    _this.emitEvent( 'layoutComplete', [ _this, items ] );
  }

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    onItemsLayout();
    return;
  }

  // emit layoutComplete when done
  this._itemsOn( items, 'layout', onItemsLayout );

  var queue = [];

  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
Outlayer.prototype._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
Outlayer.prototype._processLayoutQueue = function( queue ) {
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var obj = queue[i];
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant );
  }
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
Outlayer.prototype._positionItem = function( item, x, y, isInstant ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
Outlayer.prototype._postLayout = function() {
  this.resizeContainer();
};

Outlayer.prototype.resizeContainer = function() {
  if ( !this.options.isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
Outlayer.prototype._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
Outlayer.prototype._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * trigger a callback for a collection of items events
 * @param {Array} items - Outlayer.Items
 * @param {String} eventName
 * @param {Function} callback
 */
Outlayer.prototype._itemsOn = function( items, eventName, callback ) {
  var doneCount = 0;
  var count = items.length;
  // event callback
  var _this = this;
  function tick() {
    doneCount++;
    if ( doneCount === count ) {
      callback.call( _this );
    }
    return true; // bind once
  }
  // bind callback
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    item.on( eventName, tick );
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
Outlayer.prototype.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
Outlayer.prototype.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
Outlayer.prototype.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    this.ignore( elem );
  }
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
Outlayer.prototype.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // filter out removed stamp elements
    removeFrom( elem, this.stamps );
    this.unignore( elem );
  }

};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
Outlayer.prototype._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems === 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = makeArray( elems );
  return elems;
};

Outlayer.prototype._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  for ( var i=0, len = this.stamps.length; i < len; i++ ) {
    var stamp = this.stamps[i];
    this._manageStamp( stamp );
  }
};

// update boundingLeft / Top
Outlayer.prototype._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
Outlayer.prototype._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
Outlayer.prototype._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
Outlayer.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

/**
 * Bind layout to window resizing
 */
Outlayer.prototype.bindResize = function() {
  // bind just one listener
  if ( this.isResizeBound ) {
    return;
  }
  eventie.bind( window, 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
Outlayer.prototype.unbindResize = function() {
  if ( this.isResizeBound ) {
    eventie.unbind( window, 'resize', this );
  }
  this.isResizeBound = false;
};

// original debounce by John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

// this fires every resize
Outlayer.prototype.onresize = function() {
  if ( this.resizeTimeout ) {
    clearTimeout( this.resizeTimeout );
  }

  var _this = this;
  function delayed() {
    _this.resize();
    delete _this.resizeTimeout;
  }

  this.resizeTimeout = setTimeout( delayed, 100 );
};

// debounced, layout on resize
Outlayer.prototype.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
Outlayer.prototype.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
Outlayer.prototype.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.reveal = function( items ) {
  var len = items && items.length;
  if ( !len ) {
    return;
  }
  for ( var i=0; i < len; i++ ) {
    var item = items[i];
    item.reveal();
  }
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.hide = function( items ) {
  var len = items && items.length;
  if ( !len ) {
    return;
  }
  for ( var i=0; i < len; i++ ) {
    var item = items[i];
    item.hide();
  }
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
Outlayer.prototype.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    var item = this.items[i];
    if ( item.element === elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
Outlayer.prototype.getItems = function( elems ) {
  if ( !elems || !elems.length ) {
    return;
  }
  var items = [];
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.remove = function( elems ) {
  elems = makeArray( elems );

  var removeItems = this.getItems( elems );
  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  this._itemsOn( removeItems, 'remove', function() {
    this.emitEvent( 'removeComplete', [ this, removeItems ] );
  });

  for ( var i=0, len = removeItems.length; i < len; i++ ) {
    var item = removeItems[i];
    item.remove();
    // remove item from collection
    removeFrom( item, this.items );
  }
};

// ----- destroy ----- //

// remove and disable Outlayer instance
Outlayer.prototype.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    var item = this.items[i];
    item.destroy();
  }

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  function Layout() {
    Outlayer.apply( this, arguments );
  }
  // inherit Outlayer prototype, use Object.create if there
  if ( Object.create ) {
    Layout.prototype = Object.create( Outlayer.prototype );
  } else {
    extend( Layout.prototype, Outlayer.prototype );
  }
  // set contructor, used for namespace and Item
  Layout.prototype.constructor = Layout;

  Layout.defaults = extend( {}, Outlayer.defaults );
  // apply new options
  extend( Layout.defaults, options );
  // keep prototype.settings for backwards compatibility (Packery v1.2.0)
  Layout.prototype.settings = {};

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = function LayoutItem() {
    Item.apply( this, arguments );
  };

  Layout.Item.prototype = new Item();

  // -------------------------- declarative -------------------------- //

  /**
   * allow user to initialize Outlayer via .js-namespace class
   * options are parsed from data-namespace-option attribute
   */
  docReady( function() {
    var dashedNamespace = toDashed( namespace );
    var elems = document.querySelectorAll( '.js-' + dashedNamespace );
    var dataAttr = 'data-' + dashedNamespace + '-options';

    for ( var i=0, len = elems.length; i < len; i++ ) {
      var elem = elems[i];
      var attr = elem.getAttribute( dataAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' +
            elem.nodeName.toLowerCase() + ( elem.id ? '#' + elem.id : '' ) + ': ' +
            error );
        }
        continue;
      }
      // initialize
      var instance = new Layout( elem, options );
      // make available via $().data('layoutname')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    }
  });

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( [
      'eventie/eventie',
      'doc-ready/doc-ready',
      'eventEmitter/EventEmitter',
      'get-size/get-size',
      'matches-selector/matches-selector',
      './item'
    ],
    outlayerDefinition );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = outlayerDefinition(
    require('eventie'),
    require('doc-ready'),
    require('wolfy87-eventemitter'),
    require('get-size'),
    require('desandro-matches-selector'),
    require('./item')
  );
} else {
  // browser global
  window.Outlayer = outlayerDefinition(
    window.eventie,
    window.docReady,
    window.EventEmitter,
    window.getSize,
    window.matchesSelector,
    window.Outlayer.Item
  );
}

})( window );

},{"./item":44,"desandro-matches-selector":46,"doc-ready":47,"eventie":48,"get-size":42,"wolfy87-eventemitter":49}]},{},[15]);
