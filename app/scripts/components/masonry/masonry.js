'use strict';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    ImageOverlay = React.createFactory(require('./../ImageOverlay/ImageOverlay.js')),
    MasonryLayout = require('masonry-layout'),
    imagesLoaded = require('imagesloaded');

//css
require('./masonry.css');

var Masonry = React.createClass({

  getDefaultProps: function(){
  
    return {
	  images: ['images/picasso.png','images/egon.jpg','images/dogs.png', 'images/egon_land.jpg', 'images/flowers_big.jpg','images/Logo_+_vector.png']
    }
  },

  getInitialState: function(){
  
    return ({images: ['images/honey.jpg', 'images/city.jpg', 'images/picasso.png','images/egon.jpg','images/dogs.png', 'images/egon_land.jpg', 'images/flowers_big.jpg','images/Logo_+_vector.png'],
	clicked:false
	});

  }, 
  
  componentDidMount: function(){
   
    var container = document.querySelector('.masonry');
	var msnry;
    imagesLoaded( container, function(){
	  
	  msnry = new MasonryLayout( container, {
	    //options
	    itemSelector: '.item'
	  });
    
	});
	
  },
  
  componentDidUpdate: function(lastProps,lastState){
    
      var container = document.querySelector('.masonry');
   
	  var msnry;
	
      imagesLoaded( container, function(){
	  
	    msnry = new MasonryLayout( container, {
	      //options
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
  render: function(){
    var self=this;
    var widths = ['short','long','short','long','short','long','short','long','short'];
    var images = this.props.images.map( function(image,i) {
	  return (
	    <div>
		  <div ref='images' className="item">
		    <ImageOverlay data={self.props.data} ></ImageOverlay>
		    <img key='images' className='img-responsive' src={image} alt='picasso'/>		    
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