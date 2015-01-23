'use strict';

var Actions = require('./../../actions/actions.js');

var TopNav = require('./../TopNav/TopNav.js'),
    PaddedUnderline = require('./../PaddedUnderline/PaddedUnderline.js'),
    Carousel = require('./../Carousel/Carousel.js'),
    QuatroGallery = require('./../QuatroGallery/QuatroGallery.js'),
	Footer = require('./../Footer/Footer.js');

	
	
var PhotoCollections = React.createClass({

  getDefaultProps: function() {
    return ({ featuredCollections: [{}] });
  },
 
  render: function() {
	var self = this;
	return (
	 
	  <div className='collections'>
	 
	    <TopNav />
		
		<div className='container margin-top3'>
		  
		  <div className='row center-block eighty'>
			  <PaddedUnderline template={<b>Featured Collections</b>} isFocused='true'></PaddedUnderline>
		  </div>{/*end 1st row*/}
		  
		  <div className='row center-block margin-top2 eighty'>
		    <h5 className='gray'>
			  Video Art
			</h5>
			<hr />
		  </div>
		  
		  <Carousel featuredCollections={this.props.featuredCollections} carousel_id='carousel-video-art'/>
			
		  
		  <div className='row center-block margin-top2 eighty'>
		    <h5 className='gray'>
			  Sculpture
			</h5>
			<hr />
		  </div>
		  <Carousel featuredCollections={this.props.featuredCollections} />
			      
		</div>{/*end container*/}
		<div className='container margin-top3'>
		  
		  <div className='row center-block eighty margin-top3'>
			  <PaddedUnderline template={<b>Art Lovers Collections</b>} isFocused="true"></PaddedUnderline>
		  </div>{/*end 1st row*/}
		  
		  <div className='row center-block quatrorow margin-top2 eighty'>
		     <div className='col-sm-12 col-md-6 col-lg-4'>
			   <QuatroGallery featuredCollections={self.props.featuredCollections} />
			 </div>
			 <div className='col-sm-12 col-md-6 col-lg-4'>
			   <QuatroGallery featuredCollections={self.props.featuredCollections} />
			 </div>
			 <div className='col-sm-12 col-md-6 col-lg-4'>
			   <QuatroGallery featuredCollections={self.props.featuredCollections} />
			 </div>
		  </div>
		
		</div>{/*end container 2*/}
		<br />
		<Footer className='margin-top3'/>
		
	  </div>
	
	);
  
  }
  
});


module.exports = PhotoCollections;
	