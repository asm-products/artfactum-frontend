"use strict";

  var Ajax = React.createClass({
	
	getInitialState: function(){
	  return {data: []};
	},
	componentDidMount: function() {
	  $.ajax({
		url: this.props.url,
		dataType: 'json',
		success: function(data) {
		  this.setState( {data: data});
		  this.props.onSuccess({data:data});
		}.bind(this),
		error: function(Ajax, status, err) {
		  console.error(this.props.url, status, err.toString());
		  this.props.onError({data: [this.props.url,status, err.toString() ]});
		}.bind(this)
	  });
	},
	render: function() {
	  return ( <div /> );
	}
	
  });  
  
  var Dispatcher = React.createClass({
	getInitialState: function(){
	  return {data: []};
	},
	
	handleSuccess: function(e) {
	  document.getElementById('info').innerHTML = JSON.stringify(e);
	  this.setState({data:e.data});
	  return;
	},
	
	handleError: function(e){
	  document.getElementById('info').innerHTML = JSON.stringify(e);
	  return;
	},
	
	render: function(){
	  return ( 
		<div class='handleAjax'>
  	      <Ajax 
		    onError={this.handleError} 
			onSuccess={this.handleSuccess} 
			ref='ajax' 
			url={this.props.url} 
		  ></Ajax>
		  <TopMenu data={this.state.data} />
		</div>
	  )
	}
  });
  
  var TopMenu = React.createClass({
	render: function(){
	  var items = this.props.data.map( function(i){
	    return (
		  <li className='list'>{i.name}</li>
		);
	  });
	  return (
	    <div className='items'>
		  <h5>firstchild-a</h5>
		  <ul>{items}</ul>
		  <SecondChild_A data={this.props.data} >{this.props.children}</SecondChild_A>
		</div>
	  );
	}
  });
  
  var SecondChild_A = React.createClass({
    render: function(){
	  return (
	    <span>{this.props}</span>
	  )
	}
  });
   
  React.render(
	<Dispatcher url='data.json'/>,
	document.getElementById('artfactum')
  );