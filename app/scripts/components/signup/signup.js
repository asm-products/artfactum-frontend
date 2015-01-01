'use strict';

var Footer = React.createFactory(require('./../Footer/Footer.js'));

require('./signup.css');
require('./signup-phones.css');

/*var Ajax = React.createClass({
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



var Signup = React.createClass({
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

*/
var TopNavBar = React.createClass({

  render: function(){

    return (
	  <div className='topNavBar'>
	      <div className='modal fade' id='basicModal' tabindex='-1' role='dialog' 
			    aria-labelledby='basicModal' aria-hidden='true'>
				<div className='modal-dialog'>
				  <div className='modal-content'>
				    <div className='modal-header'>
					  <button type='button' className='close' data-dismiss='modal' aria-hiddden='true'>x</button>
	                  <h4 className='modal-title' id='myModalLabel'>Modal title</h4>
                    </div>
                  <div className='modal-body'>
                    <h3>Modal body</h3>
                  </div>
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-default' data-dismiss='modal' >Close</button>
           			<button type='button' className='btn btn-primary'>Save Changes</button>
                  </div>					
                </div>					
              </div>					
            </div>				
        <div className="parallax">
          <div id='first-page' className='parallax__group'>
	        <div className="parallax__layer parallax__layer--back">
              
			  <header id='jumbotron'>
			    
				<img src='images/flowers_big.jpg' />
				
				<img src='images/logo_AF+_256.png' alt='images/logo_AF+_.png' />
					
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
			  <button className='light' id='signup-button'
			    data-toggle='modal'
				data-target='#basicModal'>Sign up
			  </button>
			  
				
				
			  
			</div>

			
			<div className='under-back'>
			
			<div className='container-fluid tomato second-page'>
				<div className='center-wrapper'>
				<div className='row min-height'>
				  <div className='col-xs-12 col-md-6'>
				  <h3>
					<b>Simple</b>
				  </h3>
				  <p>
					Upload your gallery and upload your artworks
				  </p>
				  </div>
				   <figure className='col-xs-12 col-md-6'>
				      <img src='images/artistspage_gif.gif' />
				   
				   </figure>
				</div>
				
				<div className='row min-height'>
				  <figure className='col-xs-6'>
				    <img src='images/egon.jpg' />
				  </figure>
				   <div className='col-xs-6'>
					 <h3>
					   <b>Cool</b>
					</h3>
					<p>
					  Curate the art you love while you recommend it
					</p>
				  </div>
				</div>
				
				<div className='row min-height'>
				  <div className='col-xs-6'>
				  <h3>
					<b>Effective</b>
				  </h3>
				  <p>
					Find the best new art by the recommendations of who really knows, the artists and art lovers
				  </p>
				  </div>
				   <figure className='col-xs-6'>
					 <img src='images/egon_land.jpg' />
				   </figure>
				</div> 
				  <div className='fair-heading row col-xs-12 text-center'> 
				  <h2 id='underline' ><b>And above all, fair</b></h2>
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
					  <div class="btn-group">
					    <button type="button" class="btn btn-default">Social Login</button>
					    <button type="button" class="btn btn-default">Social Login</button>
					  </div>
					  
					</div>
					
				  </div>{/*end row*/}
				</div>  
                
				<div className='footer'>
				  <Footer></Footer>
				</div>
				
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

/*React.render(
  <Signup url='data.json'/>,
  document.getElementById('artfactum')
);*/


/*var Footer = React.createClass({
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
*/

module.exports = TopNavBar;