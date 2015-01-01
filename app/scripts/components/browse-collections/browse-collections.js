'use strict'


//js
var TopNav = React.createFactory(require('./../TopNav/TopNav.js')),
    Masonry = require('./../masonry/masonry.js');

 
//css
require('./BrowseCollections.css');
require('./phones.css');


var BrowseCollections = React.createClass({

  getInitialState: function(){
  
    return ({
	
	  images: ['images/honey.jpg', 'images/city.jpg', 'images/picasso.png','images/egon.jpg','images/dogs.png', 'images/egon_land.jpg', 'images/flowers_big.jpg','images/Logo_+_vector.png'] 
	  
	});

  }, 
  
  getDefaultProps: function(){
  
    return {
	
	  images: ['images/picasso.png','images/egon.jpg','images/dogs.png', 'images/egon_land.jpg', 'images/flowers_big.jpg','images/Logo_+_vector.png'],
	  category: ['All', 'Applied', 'Digital', 'Original', 'Literature', 'Performing', 'Public', 'Music'],
	  sortingList: ['Recent', 'Most Curated', 'Most Viewed', 'Most Followed', 'Undiscovered', 'Oldest']
	};
  
  },

  handleClick: function(i,e){
    
	var domNode = this.getDOMNode();
	
	var elem = domNode.querySelectorAll('.browse-images')[i],
	    tag = $(elem).data('expression') + ' Art',
	    self = this,
		newImages = ['images/picasso.png','images/egon.jpg','images/dogs.png', 'images/egon_land.jpg', 'images/flowers_big.jpg','images/Logo_+_vector.png'],
		images = [],
		url;
	
	//can use flickr for dummy data
	url = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
	
	$.getJSON(url,{
	  tags: tag,
	  tagmode: 'any',
	  format: 'json'
	}).done(function(data){
	  $.each( data.items, function( i,item ){
	    newImages.push(item.media.m);
		if (i === 13){
		  return false;
		}
	  });
	}).always( function(){
	  self.setState({images:newImages});
	});

  },
  
  handleSort: function(i){
    
	var domNode = this.getDOMNode();
	
	var elem = domNode.querySelectorAll('.sortingList')[i],
	    tag = $(elem).data('expression');
		alert(tag);
	
  },
  
  render: function(){
  
    var self = this;
	
	var categories = this.props.category.map( function(items,i) {	
	  
	  return (
	    <li data-expression={items} className='browse-images'>
		  <a ref='category' 
		    onClick={self.handleClick.bind(self,i)} 
			key={i} 
			href='#'>
			{items}
		  </a>
		</li>	
	  );
	});
	
	var sortingList = this.props.sortingList.map( function(items,i) {	
	  
	  return (
	 	<li data-expression={items} onClick={self.handleSort.bind(self,i)} className='sortingList' >
		  <a ref='sort'
			 key={i}
			 href='#'>
			 {items} 
		  </a>
		</li>
	  );
	});
	
    return (
	  <div className='browseCollections'>
     	<TopNav></TopNav>
		  <div className='container'>
            <div className='row'>
              <div className='col-xs-4'></div>
			   <div className='col-xs-8'>
				<div className='btn-group browse-categories'>
				  <button className='btn btn-default dropdown-toggle tomato-button' data-toggle='dropdown'>
			        <span className='sort'>Browse</span> 
					<span className='caret'></span>
			      </button>
				  <ul className='dropdown-menu' role='menu'>
				    {categories}
				  </ul>
				</div>
				
				<div className='sorter'>   
				    <div className='btn-group'>
			          <button className='btn btn-default dropdown-toggle tomato-button' data-toggle='dropdown'>
			            <span className='sort'>sort</span> <span className='caret'></span>
			          </button>
				      <ul className='dropdown-menu' role='menu'>
			            {sortingList}    
		              </ul>
				    </div>
			      </div>
                </div>
			    <div className='col-xs-4 col-md-2'>
				  <ul className='list browse-categories-dt'>
			        {categories}
				  </ul>
			    </div>
			    <div className='col-xs-12 col-md-10'>
			      <Masonry images={this.state.images}></Masonry>
			    </div> 
		      </div>{/*end row*/}
		    </div>
		  
		</div>		
		
	);
  
  }

});

module.exports = BrowseCollections;


