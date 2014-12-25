'use strict';

var UserProfile = React.createFactory(require('./user-profile.js')),
    TopNav = React.createFactory(require('./TopNav.js'));

var store = require('./../stores/store.js');
var Dispatcher = require('./../dispatcher.js');
var Actions = require('./../actions/actions.js');
var Flux = require('delorean').Flux;  
	
var Router = window.ReactRouter,
    Route = Router.Route,
    Routes = Router.Routes,
	Link = Router.Link,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute, 
	RouteHandler = Router.RouteHandler;

	
require('../../styles/router.css');


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


var App = React.createClass({
  
  getInitialState: function(){
    return {data: []}
  },
  
  mixins: [Flux.mixins.storeListener],
  
  storeDidChange: function(Store){
    this.setState({ data: store.store.data });
  },
  
  render: function() {
    return (
	  <div className='routeHandler route-header'>
	    <Link to='welcome'><button>Welcome</button></Link>
	    <Link to='user-profile'><button>user profile</button></Link>
	    <Link to='topnav'><button>topnav</button></Link>
 	    <div className='views'>
		  <RouteHandler data={this.state.data} />
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
	<NotFoundRoute handler={NotFound} ></NotFoundRoute>
	<DefaultRoute handler={Welcome} pageTitle="Home"/>
  </Route>
);



Router.run(routes, Router.HistoryLocation, function (Handler,state) {
  
  React.render( <Handler dispatcher={Dispatcher} />, document.getElementById('container') );
  
});


