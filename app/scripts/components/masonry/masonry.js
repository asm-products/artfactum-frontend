'use strict';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    MasonryLayout = require('masonry-layout'),
    imagesLoaded = require('imagesloaded');

//css
require('./masonry.css');

var Masonry = React.createClass({

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
	    <div>
		  <div ref='images' className="item">
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