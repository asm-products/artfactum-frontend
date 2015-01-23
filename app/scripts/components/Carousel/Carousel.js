'use strict';

require('./carousel.css');

var Carousel = React.createClass({
  
  getDefaultProps: function(){
  
    return({
	  featuredCollections: [{}],
	  carousel_id: 'carousel-generic',
	  imagesPer: 3
	});
  
  },
  
  componentDidMount: function(){
  
    $('.carousel-control').css({background:'white'});
	$('.carousel-control').find('.glyphicon').css({color:'black'});
  
  },
  
  render: function(){
    
    var featuredCollections,
	    carousel_id = "#" + this.props.carousel_id;
	
    if(this.props.featuredCollections[0].featuredCollection.mainPhoto){
	  
	  var imageArr = [],
	      increment = 1,
		  images,
	      classes = 'item itemholder',
		  self = this;
	  
	  featuredCollections = this.props.featuredCollections.map( function(item,i) {
	    
		imageArr.push(  
		  <div className='imagewrapper'>
		    <img className='img-responsive firstrow' src={item.featuredCollection.mainPhoto.photoUrl} alt='photo'/>
		  </div>
		);
		
		if((i+1) == increment*self.props.imagesPer){
		  
		  if(increment === 1){
		    classes = 'item active itemholder';
		  }
		  else{ 
		    classes = 'item itemholder';
		  }
		  
 		  images = imageArr.slice(i-2,i+1);
		  increment++;
		  
		  return (
		    <div className={classes} >{images}</div>		  
	      ); 
		 
		}
		
	  }); 
    
	}
    else{
	  featuredCollections = function(){ return (<div>Nothing loaded</div>) }
	}
	
	return (
	
	  <div id={this.props.carousel_id} className="carousel slide custom-carousel">
            
		<ol className="carousel-indicators">
		  <li data-target={carousel_id} data-slide-to="0" className="active"></li>
		  <li data-target={carousel_id} data-slide-to="1"></li>
		  <li data-target={carousel_id} data-slide-to="2"></li>
		</ol>

		<div className="carousel-inner">
		  {featuredCollections}
		</div>
	 
		<a className="left carousel-control" href={carousel_id} data-slide="prev">
		  <span className="glyphicon glyphicon-chevron-left"></span>
		</a>
		<a className="right carousel-control" href={carousel_id} data-slide="next">
		  <span className="glyphicon glyphicon-chevron-right"></span>
		</a>
	 
	  </div>
	  
	);
  }
});

module.exports = Carousel;