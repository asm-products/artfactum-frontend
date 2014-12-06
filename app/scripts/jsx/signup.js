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

		  <TopNavBar data={this.props.data} >{this.props.children}</TopNavBar>
	    
		</div>	 
	  );
	  
	}
    
  });
  
  var TopNavBar = React.createClass({
  
    render: function(){
	
	  return (
	    <div className='topNavBar'>
	    
	<div className="parallax">
      <div id='first-parallax' className='parallax__group'>
        <div className="parallax__layer parallax__layer--back">
  
 	      <header id='jumbotron'>
	        <img src='logo/logo_AF+_256.png' alt='logo/logo_AF+_.png' />
	        <h2>A Better Way to Discover New Art</h2>
	        <i id='artfactum-describe'>
	          Artfactum is an online marketplace where artists and art lovers create virtual galleries to showcase and sell art to a global community
	        </i>
	        <p id='create-space'></p>
	        <p className='oval-button'><span>Launch Your Own Gallery</span></p>
	        <p className='oval-button'><span>Discover</span></p>
	      </header>

        </div>
        <div className="parallax__layer parallax__layer--base">
          <select className='light' id='signup-language'>
	        <option>English</option>
	        <option>Spanish</option>
	      </select>
	      <button className='light' id='signup-button'>Sign up</button>
  
        </div>

      </div> 
  
    <div className='parallax__group'>
    <div className="parallax__layer parallax__layer--back"></div>
    <div className="parallax__layer parallax__layer--base">
  
    <div id='section-two' >
  
    <article>
      <div>Create your own Gallery</div>
        <span>+</span>
	    <div>Sell your artworks</div>
        <span>+</span>
	    <div>Get paid discovering artwork</div>
	    <div>A global community</div>
        <span>+</span>
	    <div>Democratized</div>
        <span>+</span>
	    <div>Best commision ever</div>
      </article>	
    </div>
  
  </div>
  
<div className='parallax__group'>
  <div className="parallax__layer parallax__layer--back">
  
   
  
  </div>
  <div className="parallax__layer parallax__layer--base">
  
  
  
  </div>  
  
</div>

</div>
	</div>
	</div>
	
	  );
	  
	}
  
  
  });
   
  React.render(
	<Dispatcher url='data.json'/>,
	document.getElementById('artfactum')
  );
  
  