'use strict';

var store = require('./../stores/store.js'),
    Actions = require('./../actions/actions.js'),
    Flux = require('delorean').Flux;  

var Router = window.ReactRouter,
    Link = Router.Link,
    RouteHandler = Router.RouteHandler;
	
require('./app.css');

var App = React.createClass({
  
  getDefaultProps: function(){
    return {data: store.store.data }
  },
  
  componentWillMount: function() {
  
    var url = 'photos.json';
    Actions.fetchUserPhotos(url);
	var featureUrl = 'featuredCollections.json';
    Actions.fetchFeaturedCollections(featureUrl);
    var artLoverUrl = 'artLoverCollections.json';
	Actions.fetchArtLoverCollections(artLoverUrl);
	
  },
  
  mixins: [Flux.mixins.storeListener],
  
  storeDidChange: function(Store){
    //alert(JSON.stringify(store.store.data));
	this.props.data = store.store.data;
  },
  
  render: function() {
    return (
	  <div className='routeHandler route-header'>
	    <div className="btn-group">
          <button type="button" className="btn btn-default dropdown-toggle primary" data-toggle="dropdown">
            Components <span className="caret"></span>
          </button>
		  <ul className='dropdown-menu' role='menu'>
	        <li><Link to='welcome'>Welcome</Link></li>
	        <li><Link to='user-profile'>user profile</Link></li>
	        <li><Link to='topnav'>topnav</Link></li>
	        <li><Link to='signup'>signup</Link></li>
	        <li><Link to='browsecollections'>browse collections</Link></li>
	        <li><Link to='footer'>footer</Link></li>
	        <li><Link to='masonry'>masonry</Link></li>
	        <li><Link to='parallaxpage'>Parallax</Link></li>
	        <li><Link to='paddedunderline'>PaddedUnderline</Link></li>
	        <li><Link to='photocollections'>PhotoCollections</Link></li>
	        <li><Link to='lightbox'>Lightbox</Link></li>
	        <li><Link to='description'>Description</Link></li>
	      </ul>
		</div>
 	    <div className='views'>
		  <RouteHandler {... this.props.data} />
	    </div>
	  </div>
	);
  }
});

module.exports = App;