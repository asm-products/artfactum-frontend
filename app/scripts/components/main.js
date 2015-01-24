'use strict';

var UserProfile = React.createFactory(require('./user-profile/user-profile.js')),
    TopNav = React.createFactory(require('./TopNav/TopNav.js')),
    Signup = React.createFactory(require('./Signup/signup.js')),
    BrowseCollections = React.createFactory(require('./browse-collections/browse-collections.js')),
    Footer = React.createFactory(require('./footer/footer.js')),
    Masonry = React.createFactory(require('./masonry/masonry.js')),
    ParallaxPage = React.createFactory(require('./ParallaxPage/ParallaxPage.js')),
    PaddedUnderline = React.createFactory(require('./PaddedUnderline/PaddedUnderline.js')),
    PhotoCollections = React.createFactory(require('./PhotoCollections/PhotoCollections.js')),
    App = React.createFactory(require('./app.js'));

var	Dispatcher = require('./../dispatcher.js');
	
var Router = window.ReactRouter,
    Route = Router.Route,
    Routes = Router.Routes,
	Link = Router.Link,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute, 
	RouteHandler = Router.RouteHandler;
	
require('./main.css');


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
    <Route path='/paddedunderline' name='paddedunderline' handler={PaddedUnderline}/>
    <Route path='/photocollections' name='photocollections' handler={PhotoCollections}/>
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


