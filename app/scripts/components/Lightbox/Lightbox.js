'use strict';

require('./Lightbox.css');

var Lightbox = React.createClass({
  
  handleCloseClick: function(){
  
  },
  
  render: function(){
    return(
	  <div className='lightbox dark-gray-background'> 
		<div className='jumbotron center-block fifty'> 
	      <span onClick={this.handleCloseClick} className='glyphicon glyphicon-remove'></span>    
		  {/*
		  <div className='container'>
			<h4 className='dark-gray heavy'>Bird In Space</h4>
		  </div>*/}
		</div>
	  </div>
	);
  }
});

module.exports = Lightbox;