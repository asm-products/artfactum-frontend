'use strict';

require('./QuatroGallery.css');

var QuatroGallery = React.createClass({
  
  getDefaultProps: function(){
    return ({
	  featuredCollections: [{}]
	});
  },
  
  render: function(){
    var quatro;
	if( this.props.featuredCollections[0].featuredCollection.mainPhoto){
      quatro = this.renderImages();
	}
	else{
	  quatro = function(){ return (<div>Nothing loaded</div>) }
	}
	return (
	  <div className='quatro'>
	    <h5 className='gray'>
          Video Art
	    </h5>
	    <div className='quatros'>
	      {quatro}
	    </div>
	  </div>
	);
  },
  
  renderImages: function(){
  
    var images = this.props.featuredCollections.map( function(item,i){
	  if(i<4){
	  return(

	    <div className='image-wrap'>
	      <img className='img-responsive' src={item.featuredCollection.mainPhoto.photoUrl} alt={item.featuredCollection.mainPhoto.photoUrl} />
	    </div>
	  );
	  }
	});
  
    return images;
  
  }
});

module.exports = QuatroGallery;