'use strict';

var UserProfile = React.createFactory(require('./user-profile/user-profile.js')),
    TopNav = React.createFactory(require('./TopNav/TopNav.js')),
    Signup = React.createFactory(require('./Signup/signup.js')),
    BrowseCollections = React.createFactory(require('./browse-collections/browse-collections.js')),
    Footer = React.createFactory(require('./footer/footer.js')),
    Masonry = React.createFactory(require('./masonry/masonry.js')),
    ParallaxPage = React.createFactory(require('./ParallaxPage/ParallaxPage.js'));
   
   
	
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

var Welcome = React.createClass({
  render: function() {
    return (
	  <div className='routeHandler'>
 	     <h2>Welcome</h2>
	  </div>
	);
  }
});


var NotFound = React.createClass({
  render: function() {
    return <h2>NotFound</h2>;
  }
});

var About = React.createClass({
  render: function() {
    return <h2>About</h2>;
  }
});

var Collections = React.createClass({
  render: function() {
    return <h2>Collections</h2>;
  }
});

var Marketplace = React.createClass({
  render: function() {
    return <h2>Marketplace</h2>;
  }
});

var MyGallery = React.createClass({
  render: function() {
    return <h2>Marketplace</h2>;
  }
});

var MyMarketplace = React.createClass({
  render: function() {
    return <h2>Marketplace</h2>;
  }
});

var App = React.createClass({
  
  getDefaultProps: function(){
    return {data: store.store.data }
  },
  
  componentWillMount: function() {
  
    var url = 'photos.json';
    Actions.fetchUserPhotos(url);
  
  },
  
  mixins: [Flux.mixins.storeListener],
  
  storeDidChange: function(Store){
    //alert(JSON.stringify(store.store.data));
	this.props.data = store.store.data;
  },
  
  render: function() {
    return (
	  <div className='routeHandler route-header'>
	    <Link to='welcome'><button>Welcome</button></Link>
	    <Link to='user-profile'><button>user profile</button></Link>
	    <Link to='topnav'><button>topnav</button></Link>
	    <Link to='signup'><button>signup</button></Link>
	    <Link to='browsecollections'><button>browse collections</button></Link>
	    <Link to='footer'><button>footer</button></Link>
	    <Link to='masonry'><button>masonry</button></Link>
	    <Link to='parallaxpage'><button>Parallax</button></Link>
 	    <div className='views'>
		  <RouteHandler {... this.props.data} />
	    </div>
	  </div>
	);
  }
});

var routes = (
  <Route handler={App} path='/'>
	<Route path='/user-profile' name="user-profile" handler={UserProfile}/>
    <Route path='/' name="welcome" handler={Welcome}/>
    <Route path='/topnav' name='topnav' handler={TopNav}/>
    <Route path='/signup' name='signup' handler={Signup}/>
    <Route path='/footer' name='footer' handler={Footer}/>
    <Route path='/about' name='about' handler={About}/>
    <Route path='/browsecollections' name='browsecollections' handler={BrowseCollections}/>
    <Route path='/masonry' name='masonry' handler={Masonry}/>
    <Route path='/parallaxpage' name='parallaxpage' handler={ParallaxPage}/>
    <Route path='/collections' name='collections' handler={Collections}/>
    <Route path='/marketplace' name='marketplace' handler={Marketplace}/>
    <Route path='/mygallery' name='mygallery' handler={MyGallery}/>
    <Route path='/mymarketplace' name='mymarketplace' handler={MyMarketplace}/>
	<NotFoundRoute handler={NotFound} ></NotFoundRoute>
	<DefaultRoute handler={Welcome} pageTitle="Home"/>
  </Route>
);


Router.run(routes, Router.HistoryLocation, function (Handler,state) {
  
  React.render( <Handler dispatcher={Dispatcher} />, document.getElementById('container') );
  
});


