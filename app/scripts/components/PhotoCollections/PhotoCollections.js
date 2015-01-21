'use strict';

var Actions = require('./../../actions/actions.js');

var TopNav = require('./../TopNav/TopNav.js'),
    PaddedUnderline = require('./../PaddedUnderline/PaddedUnderline.js');

	
var PhotoCollections = React.createClass({

  getDefaultProps: function() {
  
    return ({
	
	  featuredCollections: [{}]
	
	});
    
  },
  
  componentDidUpdate: function() {
	
	alert(JSON.stringify(this.props.featuredCollections[0].featuredCollection.title));
  
  },

  render: function() {
    
	if(this.props.featuredCollections[0].featuredCollection.mainPhoto){
	
      var featuredCollections = this.props.featuredCollections.map( function(item,i) {
	
	    return (
	      <div>{item.featuredCollection.mainPhoto}</div>
	    );
	
	  }); 
    }
    else{
	  var featuredCollections = function(){ return (<div>Nothing loaded</div>) }
	}
    
	return (
	
	  <div className='photoCollections'>
	  
	    <TopNav />
		{featuredCollections}
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
	      <div className='row center-block'>
		    <div className='col-xs-1'>
		      <span>span</span>
		    </div>
		    <div className='col-xs-10'>
		      <span>span</span>
		    </div>
		    <div className='col-xs-1'>
		      <span>span</span>
		    </div>
		  </div>
	    
		</div>{/*end container*/}
	  </div>
		
	
	);
  
  }
  
});

module.exports = PhotoCollections;
	