'use strict';

<<<<<<< HEAD
/**
 * @jsx React.DOM
 */
 

=======
>>>>>>> origin/contributing
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
<<<<<<< HEAD
=======
	    
>>>>>>> origin/contributing
	<div className="parallax">
      <div id='first-parallax' className='parallax__group'>
        <div className="parallax__layer parallax__layer--back">
  
<<<<<<< HEAD
 	      <header id='jumbotron'>    
		    <img src='logo/logo_AF+_256.png' alt='logo/logo_AF+_.png' />
=======
 	      <header id='jumbotron'>
	        <img src='logo/logo_AF+_256.png' alt='logo/logo_AF+_.png' />
>>>>>>> origin/contributing
	        <h2>A Better Way to Discover New Art</h2>
	        <i id='artfactum-describe'>
	          Artfactum is an online marketplace where artists and art lovers create virtual galleries to showcase and sell art to a global community
	        </i>
<<<<<<< HEAD
			<p id='create-space'>
			</p>
	        <p className='oval-button'><span>Launch Your Own Gallery</span></p>
	        <p className='oval-button'><span>Discover</span></p>
	      </header>
		  
        </div>
		
=======
	        <p id='create-space'></p>
	        <p className='oval-button'><span>Launch Your Own Gallery</span></p>
	        <p className='oval-button'><span>Discover</span></p>
	      </header>

        </div>
>>>>>>> origin/contributing
        <div className="parallax__layer parallax__layer--base">
          <select className='light' id='signup-language'>
	        <option>English</option>
	        <option>Spanish</option>
	      </select>
	      <button className='light' id='signup-button'>Sign up</button>
<<<<<<< HEAD
   	
        </div>
		<div className='under-back'>
	
		  <div className='container-fluid second-page'>
            <div className='center-wrapper'>
			<div className='row-min-height'>
              <div className='col-xs-12 col-lg-6'>
			  <span>
			    Simple
			  </span>
			  <p>
			    Upload your gallery and upload your artworks
			  </p>
			  </div>
			   <figure className='col-xs-12 col-lg-6'>
			     <img src='icons/icons/png/32px/images.png' />
			   </figure>
		    </div>
			
			<div className='row-fluid min-height'>
              <figure className='col-xs-12 col-lg-6'>
			    <img src='icons/icons/png/32px/images.png' />  
			  </figure>
			   <div className='col-xs-12 col-lg-6'>
			     <span>
 			       Simple
			    </span>
			    <p>
			      Upload your gallery and upload your artworks
			    </p>
			  </div>
		    </div>
			
			<div className='row-fluid min-height'>
              <div className='col-xs-12 col-lg-6'>
			  <span>
			    Simple
			  </span>
			  <p>
			    Upload your gallery and upload your artworks
			  </p>
			  </div>
			   <figure className='col-xs-12 col-lg-6'>
			     <img src='icons/icons/png/32px/images.png' />
			   </figure>
			 </div> 
			  <div className='row-fluid text-center'> 
			  <h3 id='underline' >And above all, fair</h3>
	          <small className='text-info'>
	            If an artwork is sold, 90% for the artist, 7% for the person who recommended it, and 3% for the platform.
			  </small>
			</div>
			</div>
		    <div className='container third-page'>
		  
		    <div id='near-footer' className='row-fluid'>
			    <div className='col-lg-8 col-xs-12'>
				  <h3>Do you want to be part of the Artfactum community?</h3>
				</div>
				<div className='col-lg-4 co-xs-12'>
				  <button>button</button>
				  <button>button</button>
				  <p><a href='#'>sign up</a></p>
				
				</div>
				
			  </div>
		    </div>
		    <footer>
			
			
			</footer>
		  
        </div>

        
		</div>

=======
  
        </div>

>>>>>>> origin/contributing
      </div> 
  
    <div className='parallax__group'>
    <div className="parallax__layer parallax__layer--back"></div>
    <div className="parallax__layer parallax__layer--base">
  
    <div id='section-two' >
  
    <article>
<<<<<<< HEAD
	 
        <div>
	      
		<img src='icons/icons/png/32px/pencil2.png' />
		<p>Create your own Gallery</p>
		  
	    </div>
        
        <span>+</span>
	    <div>
		  <img src='icons/icons/png/32px/coin.png' />
		  <p>Sell your artworks</p>
		</div>
        <span>+</span>
	    <div>
		  <img src='icons/icons/png/32px/happy.png' />
  		  <p>Get paid discovering art</p>
		</div>
	 	<div>
		  <img src='icons/icons/png/32px/users.png' />

    	  <p>A global community</p>
		</div>
        <span>+</span>
	    <div>
  		  <img src='icons/icons/png/32px/volume-high.png' />
          <p>Democratized visibility</p>
		</div>
        <span>+</span>
	    <div>
		  <img src='icons/icons/png/32px/loop.png' />
		  <p>Best commission ever</p>
		</div>
		
      </article>
	  
    </div>
  <div className='below-article'>
	    <strong>The artistic community you were waiting for</strong>
	  </div>
  </div>
  
  <div className='parallax__group'>
    <div className="parallax__layer parallax__layer--back">
  
   
  
    </div>
=======
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
>>>>>>> origin/contributing
  <div className="parallax__layer parallax__layer--base">
  
  
  
  </div>  
  
<<<<<<< HEAD
  </div>

  </div>
=======
</div>

</div>
>>>>>>> origin/contributing
	</div>
	</div>
	
	  );
	  
	}
  
  
  });
   
  React.render(
	<Dispatcher url='data.json'/>,
	document.getElementById('artfactum')
  );
  
  