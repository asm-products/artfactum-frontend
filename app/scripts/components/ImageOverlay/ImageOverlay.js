'use strict'

require('./overlay.css');

var ImageOverlay = React.createClass({

  render: function(){
    
	var overlay = this.props.data.photoAttributes.map( function(item,i) {
      return (
	    <div key={i} className='overlaySection container'> 
		  <div className='container'>
		    <div className='row'>
              <div className='col-xs-4 pull-left'>
			    <dl>
				  <dt><b>{item.title}</b></dt>
                  <dd><small>{item.ownerName}</small></dd>
				</dl>
              </div>
              <div className='col-xs-4 pull-right text-right'>
                <div><small>{item.category}</small></div>
			  </div>
		    </div>{/*end 1st row*/}
			<div className='row'>
			  <div className='description'>
			    {item.description}
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
				  <div className='circle'><small>{item.curatedIncrement}</small></div>
			      <div><small>Curated</small></div>
                </button>
				<button type="button" className="btn btn-default btn-md">
				  <div className="glyphicon glyphicon-heart"></div> 
                  <div><small>Tip</small></div>
                </button>
				<button type="button" className="btn btn-default btn-md">
				  <div className="glyphicon glyphicon-user"></div> 
                  <div><small>Follow</small></div>
                </button>
			  </div>
			
			</div>
	      </div>
		</div>
	  );
	});
	return (
	  <div className='overlay'>{overlay}</div>
	);
  }

});

module.exports = ImageOverlay;