'use strict';

require('./PaddedUnderline.css');

var PaddedUnderline = React.createClass({

  getDefaultProps: function() {
  
    return ({
	
	  template: <span>underlined</span>,
	  dynamic: true,
	  isFocused: false
	
	});
  
  },

  componentDidMount: function() {
  
    this.handleStyles();
  
  },
  
  componentDidUpdate: function(){
  
    this.handleStyles();
  
  },
  
  handleStyles: function(){
  
    var elem = this.getDOMNode().children[0];
    elem.style.padding = '.45em .6em .45em .6em';
  
    var self = this;
	if(!self.props.dynamic) {
	  elem.style.boxShadow = 'inset 0 -3px #e56e5c';
    }
	else{
	  var isFocused = this.props.isFocused;
 	  if(isFocused){
	    $(elem).addClass('focused');
	  }
	  else{
	    $(elem).removeClass('focused');
	  }
      self.handleClick(elem,isFocused);
    }
  
  },
  
  handleClick: function(elem,isFocused){
  
    $(elem).click( function() {
	  if(!isFocused){
	    $(elem).addClass('focused');
	  }
	});
  },

  render: function(){
  
    var tmpl = this.props.template;
  
    return (
  
      <div className='paddedUnderline'>
	  
	    {tmpl}
	    
	  </div>
  
    );
  
  }
  
});

module.exports = PaddedUnderline;