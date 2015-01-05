'use strict'

var Actions = require('./../../actions/actions.js');

require('./overlay.css');


var ImageOverlay = React.createClass({

  isFollowing: 'follow',
  
  getInitialState: function(){
    
    //match artist user if following with owner/artist name in photo attributes
	var following = this.props.userProfile.following;
	var owner = this.props.photoAttributes.ownerName;
	var toFollow = following == owner ? 'Unfollow' : 'Follow'
	  
	return ({
	  isFollowing: toFollow
	});
	
  },
  
  handleFollowClick: function(){
  
    var elem = this.refs.follow.getDOMNode();
	var text = $(elem).find('small').text();
	
	if(text == 'Follow') {
	  this.setState({isFollowing:'Unfollow'});
	}
	else{
	  this.setState({isFollowing:'Follow'});
	}
	
	/*if use flux actions save to server but hold on rerender*/
	
  },

  render: function(){
    
	var self = this;
	
	var followClasses = this.state.isFollowing + ' glyphicon' + ' glyphicon-user';
	
	  return (
	  <div className='overlay'>
	    <div className='overlayWrapper'> 
		  <div className='container'>
		    <div className='row'>
              <div className='col-xs-4 pull-left'>
			    <dl>
				  <dt><b>{this.props.photoAttributes.title}</b></dt>
                  <dd><small>{this.props.photoAttributes.ownerName}</small></dd>
				</dl>
              </div>
              <div className='col-xs-4 pull-right text-right'>
                <div><small>{this.props.photoAttributes.category}</small></div>
			  </div>
		    </div>{/*end 1st row*/}
			<div className='row'>
			  <div className='description'>
			    {this.props.photoAttributes.description}
			  </div>
			</div>{/*end 2nd row*/}
			<div className='row'>
			  <div className="btn-group btn-group-justified">
                <button type="button" className="btn btn-default btn-md">
				  <div className="glyphicon glyphicon-share"></div> 
                  <div><small>Share</small></div>
                </button>
				<button type="button" className="btn btn-default btn-md">
				  <div className="glyphicon glyphicon-plus"></div> 
                  <div><small>Curate</small></div>
                </button>
				<button type="button" className="btn btn-default btn-md">
				  <div className='circle'><small>{this.props.photoAttributes.curatedIncrement}</small></div>
			      <div><small>Curated</small></div>
                </button>
				<button type="button" className="btn btn-default btn-md">
				  <div className="glyphicon glyphicon-heart"></div> 
                  <div><small>Tip</small></div>
                </button>
				<button onClick={self.handleFollowClick} type="button" className="btn btn-default btn-md">
				  <div className={followClasses}></div> 
                  <div ref='follow'><small>{self.state.isFollowing}</small></div>
                </button>
			  </div>			
			</div>{/*end 3rd row*/}
	      </div>
		</div>
	  </div>
	  );
	
	
  }

});

module.exports = ImageOverlay;