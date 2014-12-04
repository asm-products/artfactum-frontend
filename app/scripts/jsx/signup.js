'use strict';

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
	render: function(){
	    return (
		  <span></span> 
		);
	 
	}
	
  });  
  var Dispatcher = React.createClass({
	getInitialState: function(){
	  return {data: []};
	},
	
	handleSuccess: function(e) {
	  //document.getElementById('info').innerHTML = JSON.stringify(e);
	  this.setState({data:e.data});
	  return;
	},
	
	handleError: function(e){
	  //document.getElementById('info').innerHTML = JSON.stringify(e);
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
		  <FirstChild_A data={this.state.data} />
		</div>
	  )
	}
  });
  
  var FirstChild_A = React.createClass({
	
	render: function(){
	  
	  var items = this.props.data.map( function(i){
	    return (
		  <li>{i.name}</li>
		 
		);
	  
	  });
	  return (
	    <div className='items'>

          {/*<ul className="nav nav-pills">
            <div className='btn-group'>
              <a className='language-picker dropdown-toggle' data-toggle='dropdown' href='#'>
	            Language
	            <span className='caret'></span>
	          </a>
		      <ul className='dropdown-menu'>
			    <li><a href='#'>English</a></li>
		      </ul>
		    </div>
		    <input className="pull-right" type='text' placeholder='signin' />
		  </ul>
		  <ul className='second-layer'>
		  <select>
		    <option>English</option>
		  </select>
		  
		  <ul>{items}</ul>
		  <SecondChild_A data={this.props.data} >{this.props.children}</SecondChild_A>
		  </ul>*/}
	
		 <TopNavBar data={this.props.data} >{this.props.children}</TopNavBar>
	    </div>	 
	  );
	  
	}
    
  });
  
  var TopNavBar = React.createClass({
  
    render: function(){
	
	  return (
	     <div className='topNavBar'>
	     <nav className='navbar navbar-custom navbar-fixed-top' role='navigation'>
         <div className='container'>

            <div className='navbar-header'>
                <button type='button' className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="#page-top">
            		
					<select className="language-picker">
					  <option>English</option>
					  <option>Spanish</option>
					</select>
					  
                </a>
            </div>
            <div className="navbar-collapse navbar-right navbar-main-collapse">
                <ul className="nav navbar-nav">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a className="light page-scroll" href="#about">
						Sign Up</a>
                    </li>
                    <li>
                        <a className="light page-scroll" href="#download">Login</a>
                    </li>
           
                </ul>
            </div>
    
        </div>
	    </nav>
	<header className='intro'>
        <div className="intro-body">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <img src='logo/logo_af+_256.png' alt='logo' title='log' />
						<h3>A better way to discover new art</h3>
                        <p className="intro-text">Description here</p>
                        <p className="intro-text"><span className='launch-text'>Launch Your Own Gallery</span></p>
                        
						<a href="#about" className="btn btn-circle page-scroll">
						    
                        </a>
						<a href="#about" className="btn btn-circle page-scroll">
						    
                            <i className="fa fa-angle-double-down animated"></i>
                        </a>
                    </div>
					
                </div>
            </div>
        </div>
    </header>
	<header className="intro">
        <div className="intro-body">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h1 className="brand-heading">Kertwang</h1>
                        <p className="intro-text">A game inspired by Blek made with HTML5 technology.</p>
                        <a href="#about" className="btn btn-circle page-scroll">
                            <i className="fa fa-angle-double-down animated"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
	</div>
	
	  );
	  
	}
  
  
  });
   
  React.render(
	<Dispatcher url='data.json'/>,
	document.getElementById('artfactum')
  );
  
  