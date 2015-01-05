'use strict';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    ImageOverlay = React.createFactory(require('./../ImageOverlay/ImageOverlay.js')),
    MasonryLayout = require('masonry-layout'),
    imagesLoaded = require('imagesloaded');

	
//css
require('./masonry.css');

var Masonry = React.createClass({
 
  componentDidMount: function(){
  
    var container = document.querySelector('.masonry'),
	  msnry;
    imagesLoaded( container, function(){
	  msnry = new MasonryLayout( container, {
	    itemSelector: '.item'
	  });
	});
  },
  
  componentDidUpdate: function(lastProps,lastState){
    var container = document.querySelector('.masonry'),
        msnry;
    imagesLoaded( container, function(){
	  msnry = new MasonryLayout( container, {
	    itemSelector: '.item'
	  });
	  container.setAttribute('id','transition-out');
      setTimeout( function(){
	    container.setAttribute('id','transition-middle');
	  },500);	  
	  setTimeout( function(){
	    container.setAttribute('id','transition-in');
	  },560);
	
	});
  },
  
  render: function(){
    var self=this;  
	
	var images = this.props.userPhotos.photos.map( function(image,i) {
	  return (
	    <div>
		  <div ref='images' className="item">
		    <ImageOverlay userProfile={this.props.userProfile} photoAttributes={image.photoAttributes} ></ImageOverlay>
		    <img key='images' 
			  className='img-responsive'
			  src={image.photoAttributes.photoUrl} 
			  alt='photo'
			/>		    
		  </div>
		</div>
	  );
	  
	}.bind(this));
	
    return (
	  <div className='masonry-gallery'>
   	    <div ref='masonry' className='masonry' >
		  <div key='masonries' className='masonries'>
		    {images}	
		  </div>
	    </div>
	  </div>
	);
  }

});

module.exports = Masonry;