'use strict';

var Actions = require('./../../actions/actions.js');

var TopNav = require('./../TopNav/TopNav.js'),
    PaddedUnderline = require('./../PaddedUnderline/PaddedUnderline.js');

require('./PhotoCollections.css');
	
	
var PhotoCollections = React.createClass({

  getDefaultProps: function() {
    return ({ featuredCollections: [{}] });
  },
 
  render: function() {
	
	if(this.props.featuredCollections[0].featuredCollection.mainPhoto){
	  
	  var imageArr = [],
	      increment = 1,
		  images,
	      classes = 'item itemholder';
	  
	  var featuredCollections = this.props.featuredCollections.map( function(item,i) {
	    
		imageArr.push(  
		  <div className='imagewrapper'>
		    <img className='img-responsive firstrow' src={item.featuredCollection.mainPhoto.photoUrl} alt='photo'/>
		  </div>
		);
		
		if((i+1) == increment*3){
		  
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
	  var featuredCollections = function(){ return (<div>Nothing loaded</div>) }
	}
    
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
		  
		  <div id="carousel-example-generic" className="carousel slide">
            
			<ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
			  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
			  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
		    </ol>

		    <div className="carousel-inner">
			  {featuredCollections}
		    </div>
		 
		    <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
			  <span className="glyphicon glyphicon-chevron-left"></span>
		    </a>
		    <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
			  <span className="glyphicon glyphicon-chevron-right"></span>
		    </a>
		  </div>{/*end carousel*/}
		  
		  <div className='row center-block margin-top2 eighty'>
		    <h5 className='gray'>
			  Sculpture
			</h5>
			<hr />
		  </div>
		  {/*<div id="carousel-example-generic" className="carousel slide">
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
			  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
			  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
		    </ol>

		    <div className="carousel-inner">
			  <div className="item active">
			    <img src="images/picasso.png" alt="..." />
			    <div className="carousel-caption">
				  ...
			    </div>
			  </div>
			  {featuredCollections}
		    </div>
		 
		    <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
			  <span className="glyphicon glyphicon-chevron-left"></span>
		    </a>
		    <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
			  <span className="glyphicon glyphicon-chevron-right"></span>
		    </a>
		  </div>{/*end carousel*/}
	      
		</div>{/*end container*/}
	  </div>
	
	);
  
  }
  
});


module.exports = PhotoCollections;
	