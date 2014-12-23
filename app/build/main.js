(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var UserProfile = React.createFactory(require('./user-profile.js'));


React.render (

  React.createElement(UserProfile, null),
  document.getElementById('container')

);
},{"./user-profile.js":2}],2:[function(require,module,exports){
'use strict'

//css  
require('../../styles/user-profile.css');
require('../../styles/color-swatch.css');

var UserProfile = React.createClass({displayName: 'UserProfile',
  
  componentDidMount: function(){
  
    this.handleNavCollapse();
  
  },
  
  handleNavCollapse: function(){
	
	  $('#af-navbar-collapse-1').collapse('hide');  
	
  },
  
  render: function(){
  
    
    return (
	 
      React.createElement("div", {className: "user-profile"}, 	  
	 
	    React.createElement("div", {className: "container fluid"}, 
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
			  React.createElement("div", {className: "collaspe navbar-collapse", id: "af-navbar-collapse-1"}, 
			    React.createElement("ul", {className: "nav navbar-nav search-wrapper"}, 
				  React.createElement("li", {className: "active search-box"}, 
				    React.createElement("form", {className: "navbar-form navar-left", role: "search"}, 

					  React.createElement("div", {className: "form-group"}, 
					    React.createElement("div", {className: "input-group"}, 
					      React.createElement("input", {type: "text", className: "search form-control", placeholder: "Search"}), 
					      React.createElement("span", {className: "input-group-addon glyphicon glyphicon-search"})
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
				  React.createElement("li", null, React.createElement("a", {className: "tabs", href: "#"}, "Browse")), 
				  React.createElement("li", null, React.createElement("a", {className: "tabs", href: "#"}, "Collections")), 
				  React.createElement("li", null, React.createElement("a", {className: "tabs", href: "#"}, "Marketplace"))
				), 
				
				React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
				
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "My Gallery")), 
				  React.createElement("li", null, React.createElement("a", {href: "#"}, "My Marketplace")), 
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
			
			
			/*<div className='col-xs-5 col-md-3 col-lg-1'>
		      <div className='top-logo-holder'>
			    <img className='img-responsive' src='images/logo_+_256.png' />
			  </div>
		    </div>
		    <div className='col-xs-6 col-md-3 col-lg-2'>
		      <input className='search' type='search' placeholder='search...'/>
		    </div>
			<div className='col-xs-12 col-md-3 col-lg-5'>
			  <menu>
			    <menuitem># </menuitem>
			    <menuitem>tabs </menuitem>
			    <menuitem>tabs </menuitem>
			    <menuitem>tabs </menuitem>
			  </menu>
			</div>
			<div className='col-xs-12 col-md-3 col-lg-4'>
			  <menu>
			    <menuitem>My Gallery </menuitem>
			    <menuitem>My Marketplace </menuitem>
			    <menuitem>Avatar </menuitem>
			  </menu>
			</div>*/
			
		  ), /end first row/, 
	    
		  React.createElement("div", {className: "row user-profile-head"}, 
		  
		  
		    React.createElement("div", {className: "col-xs-12"}, 
		    
			  React.createElement("h1", {className: "text-center vertical-align"}, "User Profile", 
			    React.createElement("div", {className: "photo-circle"}, 
				  React.createElement("div", {className: "inner-circle"}, 
				    React.createElement("img", {src: "images/camera.png", alt: "camera", title: "camera"})
				  )
				)
			  )
		    )
		   
		  ), /end second row/, 
		  
		  React.createElement("div", {className: "row user-profile-menu"}, 
		  
		    React.createElement("div", {className: "col-xs-12"}, 
			
			  React.createElement("menu", null, 
			  
			    React.createElement("menuitem", null, "My Account | "), 
			    React.createElement("menuitem", null, "About Me | "), 
			    React.createElement("menuitem", null, "Social | "), 
			    React.createElement("menuitem", null, "Background | "), 
			    React.createElement("menuitem", null, "Interests")
				
			  )
			
			)
			
		  ), /end third row/, 
			
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
			React.createElement("div", {className: "col-xs-12"}, 
			    
			  React.createElement("h3", {id: "underline", className: ""}, "My Account"), 
			  React.createElement("strong", {className: ""}, "*required")
	
			)
          
		  ), /end fourth row/, 
		  
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
		  
		    React.createElement("div", {className: "col-xs-12 col-md-8 col-md-offset-2"}, 
			  
			  React.createElement("article", null, 
			  
			    React.createElement("p", null, "username"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "username"}), 
				  React.createElement("span", {className: "input-group-addon"}, "@")
			  
                ), 
			
			    React.createElement("p", null, "Artfactum url"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "url"}), 
				  React.createElement("span", {className: "input-group-addon"}, "@")
			  
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
		  
		  ), /end fifth row/, 
		
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
			React.createElement("div", {className: "col-xs-12"}, 
			    
			  React.createElement("h3", {id: "underline", className: ""}, "About Me")
			 
			)
          
		  ), /end sixth row/, 
		  
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
		  
		    React.createElement("div", {className: "col-xs-12 col-md-8 col-md-offset-2"}, 
			  
			  React.createElement("article", null, 
			  
			    React.createElement("p", null, "Living in"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "country"}), 
				  React.createElement("span", {className: "input-group-addon"}, "@")
			  
                ), 
			
			    React.createElement("p", null, "Spoken languages"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "url"}), 
				  React.createElement("span", {className: "input-group-addon"}, "@")
			  
                ), 
				
				React.createElement("p", {className: "gray"}, "Suggestions -",  
				  React.createElement("button", {type: "button", className: "btn btn-default"}, "English"), 
				  React.createElement("button", {type: "button", className: "btn btn-default"}, "Spanish")
				)
                
			  )
			
			)			
		  
		  ), /end seventh row/, 
		
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
			React.createElement("div", {className: "col-xs-12"}, 
			    
			  React.createElement("h3", {id: "underline", className: ""}, "Social")
			 
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
			
		    ), /end sub-row/
		  
		  ), /end eighth row/, 
		
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
			React.createElement("div", {className: "col-xs-12"}, 
			    
			  React.createElement("h3", {id: "underline", className: ""}, "Artistic Background")
			 
			)
          
		  ), /end ninth row/, 
		  
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
		  
		    React.createElement("div", {className: "col-xs-12 col-md-8 col-md-offset-2"}, 
			  
			  React.createElement("article", null, 
			  
			    React.createElement("p", null, "Artistic Disciplines"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "country"})
			  
                ), 
				
				React.createElement("p", {className: "gray"}, "Suggestions -",  
				  React.createElement("button", {type: "button", className: "btn btn-default"}, "Photography"), 
				  React.createElement("button", {type: "button", className: "btn btn-default"}, "Painting")
				), 
			
			    React.createElement("p", null, "Artistic CV"), 
			    
			    React.createElement("div", {className: "input-group"}, 
			      
				  React.createElement("input", {type: "text", className: "form-control"}), 
				  React.createElement("span", {className: "input-group-btn"}, 
                    React.createElement("button", {className: "btn btn-default", type: "button"}, "Browse")
                  )
                  
                )
				
			  )
			
			)			
		  
		  ), /end tenth row/, 
		
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
			  
	 	    React.createElement("div", {className: "col-xs-12"}, 
			    
			  React.createElement("h3", {id: "underline", className: ""}, 
				"Personal Interests"
		      )
			)
			  
		  ), " ", /end 11th row/, 
		  
		  React.createElement("div", {className: "row user-profile-forms center-block"}, 
		  
		    React.createElement("div", {className: "col-xs-12 col-md-8 col-md-offset-4"}, 
			  
			  React.createElement("article", null, 
			  
			    React.createElement("p", null, "Favorite art styles"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "username"}), 
			      
				  React.createElement("p", {className: "gray"}, "Suggestions -",  
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "English"), 
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "Spanish")
				  )
				  
				), 
			
			    React.createElement("p", null, "Featured interests"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "url"}), 
			      
				  React.createElement("p", {className: "gray"}, "Suggestions -",  
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "English"), 
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "Spanish")
				  )
                
				), 
				 
				
				React.createElement("p", null, "Influences"), 
			  
				React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "influences"}), 
			     
				  React.createElement("p", {className: "gray"}, "Suggestions -",  
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "Surrealism"), 
				    React.createElement("button", {type: "button", className: "btn btn-default"}, "Cubism")
				  )
				
				), 
				
				React.createElement("div", {className: "center-block button-wrapper"}, 
                  React.createElement("div", {className: "btn-group"}, 
				    
					React.createElement("button", {type: "button", className: "btn btn-active"}, 
                      "Save"
                    )
                    
                  )
				
				)
			
			  )
			
			)			
		  
		  ), " ", /end 12th row/, 
		
		  React.createElement("div", {className: "row user-profile-bottom"}, 
		  
		    React.createElement("div", {className: "col-xs-6 col-xs-offset-3"}, 
		      
			  React.createElement("div", {className: "user-profile-logo-bottom center-block"}, 
			    React.createElement("img", {className: "img-responsive padding1", src: "images/Logo_AF_vector_white.png", alt: "artfactum logo", title: "artfactum logo"})
		      )
			  
			), 
			
			React.createElement("div", {className: "col-xs-10 col-xs-offset-1 padding1"}, 
			
		      React.createElement("span", null, "About | "), React.createElement("span", null, "Legal | "), React.createElement("span", null, "FAQ | "), React.createElement("span", null, "Developers | "), 
			  React.createElement("span", null, "Ads | "), " ", React.createElement("span", null, "Contact")
		  
		    ), 
			
			React.createElement("div", {className: "col-xs-10 col-xs-offset-1 padding1"}, 
			
		      React.createElement("span", null, "Made with love on assembly")
		  
		    )
		  
		  ), " ", /end 13th row/
		
		)
		
	  )
	
	
	
	);
	
  }
  
});


module.exports = UserProfile;
},{"../../styles/color-swatch.css":3,"../../styles/user-profile.css":4}],3:[function(require,module,exports){
var css = "/*color swatch theme for artfactum signup page*/\r\n\r\n.tomato{\r\n  color:#e56e5c;\r\n}\r\n\r\n.tomato-background{\r\n  background:#e5635c;\r\n  color: white;\r\n}\r\n\r\n.dark-gray{\r\n\r\n  color: #3a3a3a;\r\n\r\n}\r\n\r\n.dark-gray-background{\r\n\r\n  background: #3a3a3a;\r\n  color:white;\r\n  \r\n}\r\n\r\n.chrome{\r\n\r\n  color: #d1ccca;\r\n\r\n}\r\n\r\n.chrome-background{\r\n\r\n  background: #d1ccca;\r\n  color: black;\r\n\r\n}\r\n\r\n.gray{\r\n  color: slategray;\r\n}\r\n"; (require("C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify"))(css); module.exports = css;
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":5}],4:[function(require,module,exports){
var css = "\r\n.top-nav{\r\n\r\n  width: 98%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n  background: white;\r\n  \r\n}\r\n\r\n.tabs:active{\r\n\t\r\n\tcolor: tomato;\r\n\tbox-shadow: inset 0px -5px blue;\r\n    -webkit-transition: all 0.15s linear;\r\n\ttransition: all 0.15s linear;\r\n\t\r\n}\r\n\r\n.tabs:focus{\r\n\tcolor: tomato;\r\n\tbox-shadow: inset 0px -5px tomato;\r\n\r\n}\r\n\r\n\r\n.navbar{\r\n  background: white;\r\n  border: none;\r\n}\r\n\r\n.search{\r\n\r\n  border: none;\r\n  outline: none;\r\n  \r\n}\r\n\r\n.search-box{\r\n\r\n  overflow:hidden; \r\n\r\n}\r\n\r\n.user-profile-head{\r\n\r\n  height: 14em;\r\n  background: purple;\r\n  background-image: url(../images/mohai.jpg);\r\n \r\n\r\n}\r\n\r\n.user-profile-head h1{\r\n\r\n  position: relative;\r\n  top:1.5em;\r\n  width:100%;\r\n  height:7em;\r\n  color: white;\r\n \r\n}\r\n\r\n.photo-circle{\r\n  position:relative;\r\n  top:1em;\r\n  border: solid #eee 4px;\r\n  box-shadow: 0 0 4px 1px white;\r\n  border-radius: 50%;\r\n  width: 3em;\r\n  height: 3em;\r\n  display:block;\r\n  overflow:hidden;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  display:cover;\r\n  background: white;\r\n}\r\n\r\n.inner-circle{\r\n\r\n  position:absolute;\r\n  z-index:9999;\r\n  width:100%;\r\n  height:100%;\r\n  top: .75em;\r\n}\r\n\r\n.user-profile-bottom{\r\n\r\n  position:relative;\r\n  top:200px;\r\n  height: 14em;\r\n  overflow:hidden;\r\n  background: #3a3a3a;\r\n  color:white;\r\n\r\n}\r\n\r\n\r\n\r\n.user-profile-forms{\r\n\r\n  width: 80%;\r\n  top:1em;\r\n\r\n}\r\n\r\n/*make width wider on wider screens*/\r\n\r\n.user-profile-forms article{\r\n  top:2em;\r\n  left:0; \r\n  width:90%;\r\n  height: 270px;\r\n \r\n}\r\n\r\narticle p{\r\n  margin-top:1em;\r\n}\r\n\r\narticle .btn-group{\r\n\r\n  margin-left:5em;\r\n  margin-right:5em;\r\n\r\n}\r\n\r\n.dropdown-toggle{\r\n  background:tomato;\r\n  color:white;\r\n}\r\n\r\n.button-wrapper{\r\n  position:relative;\r\n  top:1em;\r\n  width:100%;\r\n}\r\n\r\n.user-profile-logo-bottom{\r\n\r\n  width:200px;\r\n\r\n}\r\n\r\n.user-profile-top-logo{\r\n\r\n  width:3em;\r\n\r\n}\r\n\r\n.user-profile-search{\r\n  padding-top:.5em;\r\n}\r\n\r\n.top-logo-holder{\r\n  width: 50px;\r\n  height:50px;\r\n  \r\n}\r\n\r\n.article{\r\n  position: relative;\r\n  width:400px;\r\n  border: solid pink 1px;\r\n}\r\n\r\n\r\n\r\n.top-drop, .top-drop:active{\r\n\r\n  background: inherit;\r\n   \r\n}\r\n\r\n.top-drop:hover{\r\n  background: #d1ccca;\r\n}"; (require("C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify"))(css); module.exports = css;
},{"C:\\Users\\Justin\\documents\\github\\af\\node_modules\\cssify":5}],5:[function(require,module,exports){
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

},{}]},{},[1]);
