'use strict';

require('./ParallaxPage.css');

var ParallaxPage = React.createClass({

  getDefaultProps: function(){
  
    return ({
	  backLayer: <blockquote>I am the default backlayer.</blockquote>,
	  baseLayer: <div><br /><br /><br /><blockquote>I am the default baselayer.</blockquote></div>,
	  below: <blockquote>
	           I am additional default content that lives below the layers but is still part of the page.
	         </blockquote>,
	  groupHeight: '100vh',
	  baseLayerHeight: '100vh',
	  backLayerHeight: '100vh',
	  //below from top is positioned absolute from window top
	  belowFromTop: '100vh',
	  //dev mode
	  showBackground: true
	});
  
  },
  
  componentDidMount: function(){
    
	var group = this.refs.group.getDOMNode(),
        back = this.refs.back.getDOMNode(),
        base = this.refs.base.getDOMNode(),
        below = this.refs.below.getDOMNode();
	group.style.height = this.props.groupHeight;
	back.style.height = this.props.backLayerHeight;
	base.style.height = this.props.baseLayerHeight;
	below.style.height = this.props.belowFromTop;
	
	//dev mode to show seperation of concerns
	if(this.props.showBackground){
	  back.style.background = 'rgba(100,100,100,0.21)';
	  base.style.background = 'rgba(100,100,100,0.21)';
	  base.style.top = '20vh';
	  base.style.border = 'solid black 4px';
	  below.style.top = '120vh';
	}
  
  },

  render: function(){
    return (
	  <div className="parallax">
        <div ref='group' className='parallax__group'>
	      <div ref='back' className="parallax__layer parallax__layer--back">
		    {this.props.backLayer}
		  </div>
		  <div ref='base' className="parallax__layer parallax__layer--base">
		    {this.props.baseLayer}
		  </div>
		  {/*additional content*/}
		  <div ref="below" className='parallax__below'>
		    {this.props.below}
		  </div>
	    </div>
	  </div>
	);
  }
});

module.exports = ParallaxPage;