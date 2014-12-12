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


var FirstChild_A = React.createClass({displayName: 'FirstChild_A',

  render: function(){
  
    var items = this.props.data.map( function(i){
	  return (
	    React.createElement("li", null, i.name)
	  );
  
    });
    return (
	  React.createElement("div", {className: "items"}, 
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
			  React.createElement("button", {className: "light", id: "signup-button"}, "Sign up")
			  

			), 
			React.createElement("div", {className: "under-back"}, 
			
			React.createElement("div", {className: "container-fluid tomato second-page"}, 
				React.createElement("div", {className: "center-wrapper"}, 
				React.createElement("div", {className: "row min-height"}, 
				  React.createElement("div", {className: "col-xs-6"}, 
				  React.createElement("h3", null, 
					React.createElement("b", null, "Simple")
				  ), 
				  React.createElement("p", null, 
					"Upload your gallery and upload your artworks"
				  )
				  ), 
				   React.createElement("figure", {className: "col-xs-6"}, 
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
					    React.createElement("button", {type: "button", class: "btn btn-default"}, "Middle"), 
					    React.createElement("button", {type: "button", class: "btn btn-default"}, "Right")
					  )
					  
					)
					
				)
				), 
				React.createElement("footer", {className: "row"}, 
				  
				  React.createElement("div", {className: "row"}, 
					React.createElement("ul", null, 
					  React.createElement("li", null, React.createElement("a", {href: "#"}, "About us | ")), 
					  React.createElement("li", null, React.createElement("a", {href: "#"}, "Legal | ")), 
					  React.createElement("li", null, React.createElement("a", {href: "#"}, "F.A.Q. | ")), 
					  React.createElement("li", null, React.createElement("a", {href: "#"}, "Developers | ")), 
					  React.createElement("li", null, React.createElement("a", {href: "#"}, "Ads/Sponsorship | ")), 
					  React.createElement("li", null, React.createElement("a", {href: "#"}, "Contact| "))
					)
				  ), 
				  
				  React.createElement("div", {className: "row"}, 
					React.createElement("ul", null, 
					  React.createElement("li", null, React.createElement("p", {id: "underline"}, "Built with love on assembly"))
					)
				
				  )
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

React.render(
  React.createElement(Dispatcher, {url: "data.json"}),
  document.getElementById('artfactum')
);


var Footer = React.createClass({displayName: 'Footer',
render: function(){

  return (
 
	React.createElement("footer", {className: "container"}, 
	  React.createElement("div", {className: "row"}, 
		React.createElement("ul", {className: "breadcrumb"}, 
		  React.createElement("li", null, React.createElement("a", {href: "#"}, "About us")), 
		  React.createElement("li", null, React.createElement("a", {href: "#"}, "Legal")), 
		  React.createElement("li", null, React.createElement("a", {href: "#"}, "F.A.Q.")), 
		  React.createElement("li", null, React.createElement("a", {href: "#"}, "Developers")), 
		  React.createElement("li", null, React.createElement("a", {href: "#"}, "Ads/Sponsorship")), 
		  React.createElement("li", null, React.createElement("a", {href: "#"}, "Contact"))
		)
	  )
	)
 
  );


}
});


