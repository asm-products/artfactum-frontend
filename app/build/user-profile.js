'use strict'

var UserProfile = React.createClass({displayName: 'UserProfile',

  render: function(){
  
    return (
	 
      React.createElement("div", {className: "user-profile"}, 	  
	  
	    React.createElement("div", {className: "container fluid"}, 
	      
		  React.createElement("div", {className: "row"}, 
		    
			React.createElement("div", {className: "col-xs-5 col-md-3 col-lg-1"}, 
		      React.createElement("p", null, "logo")
		    ), 
		    React.createElement("div", {className: "col-xs-6 col-md-3 col-lg-2"}, 
		      React.createElement("input", {type: "search", placeholder: "search"})
		    ), 
			React.createElement("div", {className: "col-xs-12 col-md-3 col-lg-5"}, 
			  React.createElement("menu", null, 
			    React.createElement("menuitem", null, "# "), 
			    React.createElement("menuitem", null, "tabs "), 
			    React.createElement("menuitem", null, "tabs "), 
			    React.createElement("menuitem", null, "tabs ")
			  )
			), 
			React.createElement("div", {className: "col-xs-12 col-md-3 col-lg-4"}, 
			  React.createElement("menu", null, 
			    React.createElement("menuitem", null, "My Gallery "), 
			    React.createElement("menuitem", null, "My Marketplace "), 
			    React.createElement("menuitem", null, "Avatar ")
			  )
			)
			
		  ), /end first row/, 
	    
		  React.createElement("div", {className: "row user-profile-head"}, 
		  
		    React.createElement("div", {className: "col-xs-12"}, 
		    
			  React.createElement("h1", {className: "text-center vertical-align"}, "User Profile")
		  
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
		  
		    React.createElement("div", {className: "col-xs-12"}, 
			  
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
		  
		    React.createElement("div", {className: "col-xs-12"}, 
			  
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
				
				React.createElement("label", null, "Suggestions -",  
				  React.createElement("span", {className: "label label-primary"}, "English"), 
				  React.createElement("span", {className: "label label-primary"}, "Spanish")
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
		  
		    React.createElement("div", {className: "col-xs-12"}, 
			  
			  React.createElement("article", null, 
			  
			    React.createElement("p", null, "Artistic Disciplines"), 
			  
			    React.createElement("div", {className: "input-group"}, 
			    
				  React.createElement("input", {type: "text", className: "form-control", placeholder: "country"})
			  
                ), 
				
				React.createElement("label", null, "Suggestions -", 
				  React.createElement("span", {className: "label label-primary"}, "Photography"), 
				  React.createElement("span", {className: "label label-primary"}, "Painting")
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
		  
		  ), /end tenth row/
		
		)
		
	  )
	
	
	
	);
	
  }
  
});


React.render(
  React.createElement(UserProfile, null),
  document.getElementById('user-profile')
);
