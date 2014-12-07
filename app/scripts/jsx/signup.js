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
	  <div className='handleAjax'>
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
          <div id='first-page' className='parallax__group'>
	        <div className="parallax__layer parallax__layer--back">
              
			  <header id='jumbotron'>    
			    <img src='images/dogs.png' />
				<img src='logo/logo_AF+_256.png' alt='logo/logo_AF+_.png' />
				<div className='jumbo-inner'>
				<h2>A Better Way to Discover New Art</h2>
				<i id='artfactum-describe'>
				  Artfactum is an online marketplace where artists and art lovers create virtual galleries to showcase and sell art to a global community
				</i>
				
				</div>
				
						
			  </header>
		  	    
				<p id='create-space'>
				
				  <p className='oval-button'><span>Launch Your Own Gallery</span></p>
				  <p className='second-oval oval-button'><span>Discover</span></p>
			    
				</p>
			  
			</div>
			
			<div className="parallax__layer parallax__layer--base">
			  <select className='light' id='signup-language'>
				<option>English</option>
				<option>Spanish</option>
			  </select>
			  <button className='light' id='signup-button'>Sign up</button>
			  

			</div>
			<div className='under-back'>
			
			<div className='container-fluid tomato second-page'>
				<div className='center-wrapper'>
				<div className='row min-height'>
				  <div className='col-xs-6'>
				  <h3>
					<b>Simple</b>
				  </h3>
				  <p>
					Upload your gallery and upload your artworks
				  </p>
				  </div>
				   <figure className='col-xs-6'>
				     <img src='icons/icons/png/32px/images.png' />  
				   </figure>
				</div>
				
				<div className='row min-height'>
				  <figure className='col-xs-6'>
					<img src='icons/icons/png/32px/images.png' />  
				  </figure>
				   <div className='col-xs-6'>
					 <h3>
					   <b>Cool</b>
					</h3>
					<p>
					  Upload your gallery and upload your artworks
					</p>
				  </div>
				</div>
				
				<div className='row min-height'>
				  <div className='col-xs-6'>
				  <h3>
					<b>Effective</b>
				  </h3>
				  <p>
					Upload your gallery and upload your artworks
				  </p>
				  </div>
				   <figure className='col-xs-6'>
					 <img src='icons/icons/png/32px/images.png' />
				   </figure>
				</div> 
				  <div className='fair-heading row col-xs-12 text-center'> 
				  <h3 id='underline' ><b>And above all, fair</b></h3>
				  <p className='text-info'>
					If an artwork is sold, 90% for the artist, 7% for the person who recommended it, and 3% for the platform.
				  </p>
				</div>
			  </div>
            </div>
              <div className='third-page'>			  
			    
				<div className='container' id='near-footer'>
				<div className='row'>
					<div className='col-lg-8 col-md-8 col-xs-12 margin-top-1' >
					  <h3>Do you want to be part of the Artfactum community?</h3>
					</div>
					<div className='col-lg-4 col-md-4 col-xs-12 margin-top-1'>
					  <button>button</button>
					  <button>button</button>
					  <p><small><a href='#' id='underline'>Or enter your email and a password</a></small></p>
					
					</div>
					
				</div>
				</div>  
				<footer className='row'>
				  
				  <div className=''>
					<ul className='breadcrumb'>
					  <li><a href='#'>About us</a></li>
					  <li><a href='#'>Legal</a></li>
					  <li><a href='#'>F.A.Q.</a></li>
					  <li><a href='#'>Developers</a></li>
					  <li><a href='#'>Ads/Sponsorship</a></li>
					  <li><a href='#'>Contact</a></li>
					</ul>
				  </div>
				  
				  <div className='row'>
					<ul>
					  <li><p id='underline'>Built with love on assembly</p></li>
					</ul>
				  </div>
				</footer>			  
				
			  </div>	  
				
			</div>
		
		  </div> 

		<div className='parallax__group'>
		<div className="parallax__layer parallax__layer--back"></div>
		<div className="parallax__layer parallax__layer--base">

		<div id='section-two' >

		<article id='signup-icons' >
		 
			<div>
			  
			<img src='icons/icons/png/32px/pencil2.png' />
			<p>Create your own Gallery</p>
			  
			</div>
			
			<span></span>
			<div>
			  <img src='icons/icons/png/32px/coin.png' />
			  <p>Sell your artworks</p>
			</div>
			<span></span>
			<div>
			  <img src='icons/icons/png/32px/happy.png' />
			  <p>Get paid discovering art</p>
			</div>
			<div>
			  <img src='icons/icons/png/32px/users.png' />

			  <p>A global community</p>
			</div>
			<span></span>
			<div>
			  <img src='icons/icons/png/32px/volume-high.png' />
			  <p>Democratized visibility</p>
			</div>
			<span></span>
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


var Footer = React.createClass({
render: function(){

  return (
 
	<footer className='container'>
	  <div className='row'>
		<ul className='breadcrumb'>
		  <li><a href='#'>About us</a></li>
		  <li><a href='#'>Legal</a></li>
		  <li><a href='#'>F.A.Q.</a></li>
		  <li><a href='#'>Developers</a></li>
		  <li><a href='#'>Ads/Sponsorship</a></li>
		  <li><a href='#'>Contact</a></li>
		</ul>
	  </div>
	</footer>
 
  );


}
});


