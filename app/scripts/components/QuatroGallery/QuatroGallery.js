'use strict';

require('./QuatroGallery.css');

var QuatroGallery = React.createClass({
  
  getDefaultProps: function(){
    return ({
	  artLoverCollections: [{}],
	  owner: 'owner'
	});
  },
  
  componentDidMount: function(){
    //alert(JSON.stringify(this.props));
  },
  
  render: function(){
    var quatro;
	if( this.props.artLoverCollections[0].collection.mainPhoto){
      quatro = this.renderImages();
	}
	else{
	  quatro = function(){ return (<div>Nothing loaded</div>) }
	}
	return (
	  <div className='quatro'>
	    <h5 className='gray'>
          {this.props.owner}
	    </h5>
	    <div className='quatros'>
	      {quatro}
	    </div>
	  </div>
	);
  },
  
  renderImages: function(){
  
    var images = this.props.artLoverCollections.map( function(item,i){
	  if(i<4){
	  return(

	    <div className='image-wrap'>
	      <img className='img-responsive' src={item.collection.mainPhoto.photoUrl} alt={item.collection.mainPhoto.photoUrl} />
	    </div>
	  );
	  }
	});
  
    return images;
  
  }
});

module.exports = QuatroGallery;