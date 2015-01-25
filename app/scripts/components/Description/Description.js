'use strict';

require('./Description.css');

var Description = React.createClass({
  
  getDefaultProps: function(){
  
    return({
	  title: 'Title',
	  ownerName: 'Owner Name',
	  photoUrl: null,
	  //todo: add ownerAvatar to store/json
	  ownerAvatar: null,
	  description: "Description"
    });
  
  },
  
  render: function(){
    return(
	  <div className='description'>
	    
		<div className='container'>
	      <h4 className='dark-gray heavy'>{this.props.title}</h4>
		</div>
	  
	  </div>
	);
  }
});

module.exports = Description;