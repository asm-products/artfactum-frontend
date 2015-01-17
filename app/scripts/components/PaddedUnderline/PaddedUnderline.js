'use strict';

var Actions = require('./../../Actions/actions.js'),
    Channel = Actions.channel('paddedUnderline');
	
require('./PaddedUnderline.css');

var PaddedUnderline = React.createClass({

  getDefaultProps: function() {
  
    return ({
	
	  template: <strong>underlined</strong>,
	  variation: 'regular',
	  dynamic: true,
	  isFocused: false,
	  actions: [{
	    action: function(){ return 'bug' },
	    name: 'action'
	  }],
	  acceptActions: true
	
	});
  
  },

  componentDidMount: function() {
  
    this.handleStyles();
	if(this.props.acceptActions){
	  this.assignActions(this.props.actions);
	}
	
  },
  
  componentDidUpdate: function(){
  
    this.handleStyles();
	if(this.props.acceptActions){
	  this.assignActions(this.props.actions);
	}
  
  },
  
  assignActions: function(actions) {
    
	if(Channel){
	  for(var i=0;i<actions.length;i++){
	    Channel[actions[i].name] = actions[i].action;
	  }
	}
	
  },
  
  handleStyles: function(){
  
    var variation = this.props.variation;
    var elem = this.getDOMNode().children[0];
	
	if(variation === 'regular'){
	  $(elem).addClass('regular');
	  $(this.getDOMNode()).css({
	    marginBottom:'.5em'
	  });
	}
    
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